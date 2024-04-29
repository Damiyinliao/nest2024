
import { Body, Controller, Get, Post, Version } from "@nestjs/common";
import { UserService } from "./user.service";

@Controller({
  path: 'user',
  version: '1'
})
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('list')
  async list() {
    return await this.userService.list();
  }

  @Get('all')
  async all() {
    return await this.userService.findAll();
  }

  @Post('create')
  async create(@Body() user: any) {
    return await this.userService.create(user);
  }
}