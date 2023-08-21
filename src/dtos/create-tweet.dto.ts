import { IsString } from "class-validator";

export class CreateTweetDTO {

    @IsString()
    username: string;

    @IsString()
    tweet: string;

}