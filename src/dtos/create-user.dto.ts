import { IsString, IsUrl } from "class-validator";

export class CreateUserDTO {

    @IsString()
    username: string;

    @IsUrl()
    avatar: string

}