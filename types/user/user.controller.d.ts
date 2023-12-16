import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { loginDto } from './dto/login.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    registration(createUserDto: CreateUserDto): Promise<import("./entities/user.entity").User>;
    login(loginDto: loginDto): Promise<{
        access_token: string;
        data: import("./entities/user.entity").User;
    }>;
}
