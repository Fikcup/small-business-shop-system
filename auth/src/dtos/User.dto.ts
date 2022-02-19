import { 
    IsString, 
    IsEmail, 
    IsUrl, 
    IsArray, 
    IsOptional 
} from 'class-validator';

export default class UserDto {
    @IsString()
    username!: string;

    @IsEmail()
    email!: string;

    @IsString()
    password!: string;

    @IsUrl()
    @IsOptional()
    img?: string;

    @IsArray()
    @IsOptional()
    addressArr?: Array<Object>;
}