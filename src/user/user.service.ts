import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { loginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}
  async create(createUserDto: CreateUserDto) {
    const user = this.userRepository.create(createUserDto);
    user.salt = await bcrypt.genSalt();
    user.password = await bcrypt.hash(user.password, user.salt);
    try {
      const userSaved = await this.userRepository.save(user);
      delete userSaved.password;
      delete userSaved.salt;
      return user;
    } catch (error) {
      throw new ConflictException('Le mail est déjà utilisé');
    }
  }

  async login(loginDto: loginDto) {
    const { email, password } = loginDto;
    const user = await this.userRepository
      .createQueryBuilder('user')
      .where('user.email =:email', { email })
      .getOne();

    if (!user) {
      throw new ConflictException('Le mail ou le mot de passe est incorect');
    }

    const hashedPassWord = await bcrypt.hash(password, user.salt);

    if (hashedPassWord == user.password) {
      const payload = {
        email: user.email,
      };
      delete user.password;
      delete user.salt;
      const jwt = await this.jwtService.sign(payload);
      return {
        access_token: jwt,
        data: user,
      };
    } else {
      throw new UnauthorizedException(
        'Le mail ou le mot de passe est incorect',
      );
    }
  }
}
