import {
  Controller,
  Get,
  Patch,
  UseGuards,
} from '@nestjs/common';

import { User } from 'generated/prisma';
import { GetUser } from 'src/auth/decorator';
import { JwtGuard } from 'src/auth/guard';

@Controller('users')
export class UserController {
  // GET /users
  @UseGuards(JwtGuard)
  @Get('me') // GET /users/test if the value is prvided to the @Get
  getMe(@GetUser() user: User) {
    return user;
  }

  @UseGuards(JwtGuard)
  @Patch()
  editUser() {}
}
