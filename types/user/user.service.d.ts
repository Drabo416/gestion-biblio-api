import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { loginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
export declare class UserService {
    private userRepository;
    private jwtService;
    constructor(userRepository: Repository<User>, jwtService: JwtService);
    create(createUserDto: CreateUserDto): Promise<User>;
    login(loginDto: loginDto): Promise<{
        access_token: string;
        data: User;
    }>;
}
