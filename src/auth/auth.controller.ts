import {
  Body,
  Controller,
  Post,
  Req,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';

@Controller('auth')
export class AuthController {
  //   authService: AuthService;
  constructor(private authService: AuthService) {
    // this.authService = authService;
  }
  //*  /auth/signup
  @Post('signup')
  signup(@Body() dto: AuthDto) {
    console.log({
      dto,
    });
    return this.authService.signup(dto);
  }

  //*  /auth/signin
  @Post('signin')
  signin(@Body() dto: AuthDto) {
    return this.authService.signin(dto);
  }
}
