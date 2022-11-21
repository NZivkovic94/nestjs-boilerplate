import { IsString } from "class-validator";

export class QueryExampleDto {
  @IsString()
  name: string;
}
