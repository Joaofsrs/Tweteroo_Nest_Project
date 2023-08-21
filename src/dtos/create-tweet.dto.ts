import { IsString } from "class-validator";

export class CreateTweetDTO {

    @IsString()
    user: string;

    @IsString()
    tweet: string;

}