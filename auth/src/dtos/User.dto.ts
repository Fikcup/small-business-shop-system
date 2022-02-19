import { IsString, IsEmail, IsUrl } from 'class-validator';

export default class UserDto {
    @IsString()
    username!: string;

    @IsEmail()
    email!: string;

    @IsString()
    password!: string;

    @IsUrl()
    img?: string;
}