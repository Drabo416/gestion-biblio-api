import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty() @IsString() @Length(0, 100) firstName: string;
  @IsNotEmpty() @IsString() @Length(0, 100) lastName: string;
  @IsNotEmpty() @IsEmail() email: string;
  @IsNotEmpty() @IsString() @Length(0, 100) password: string;
}
