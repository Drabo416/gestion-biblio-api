import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { PayloadInterface } from 'src/interface/payload.interface';
declare const JwtStrategy_base: new (...args: any[]) => any;
export declare class JwtStrategy extends JwtStrategy_base {
    private userRepository;
    constructor(userRepository: Repository<User>);
    validate(payload: PayloadInterface): Promise<User>;
}
export {};
