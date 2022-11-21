import { Body, Controller, Get, Post, Query, ValidationPipe } from '@nestjs/common';
import { AppService } from './app.service';
import { BodyExampleDto } from './dtos/body-example.dto';
import { QueryExampleDto } from './dtos/query-example.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  validationExample(
    @Body(ValidationPipe) bodyExample: BodyExampleDto,
    @Query(ValidationPipe) queryExample: QueryExampleDto
  ): { body: BodyExampleDto; query: QueryExampleDto } {
    return { body: bodyExample, query: queryExample };
  }
}
