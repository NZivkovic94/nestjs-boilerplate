import { Controller, Get, Post } from '@nestjs/common';
import { Entity } from '@prisma/client';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly prisma: PrismaService) {}

  @Get()
  async getHello(): Promise<string> {
    return this.appService.getHello();
  }

  @Post('entity')
  async createEntity(): Promise<Entity> {
    return this.prisma.entity.create({ data: {} });
  }

  @Get('entities')
  async getEntities(): Promise<Entity[]> {
    return this.prisma.entity.findMany();
  }
}
