import { IsString } from "class-validator";

export class BodyExampleDto {
  @IsString()
  name: string;
}
