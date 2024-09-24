import { IsEmail, IsString, MinLength } from 'class-validator';

export class CreateUserDto {

    @IsEmail()
    readonly email: string;

    @MinLength(6)
    readonly password: string;

    @IsString()
    readonly name: string;

}
