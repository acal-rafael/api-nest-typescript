import {
  Body,
  Controller,
  Get,
  Headers,
  Param,
  Query,
  Req,
  HttpCode,
  // Redirect,
} from '@nestjs/common';
import { Request } from 'express';
// import { AppService } from './app.service';

@Controller('/user')
export class AppController {
  // constructor(private readonly appService: AppService) {}

  @Get()
  getUser(@Req() request: Request): string {
    // return this.appService.getHello();
    console.log('getUser: -------------------- ');
    console.log('Request body: ', request.body);
    console.log('Request query:', request.query);
    console.log('Request params:', request.params);
    console.log('Request query:', request.headers);
    console.log('Request query:', request.url);

    return 'Route accessed by user web';
  }

  @Get(':id')
  @HttpCode(200)
  // @Redirect('https://amplication.com/blog/the-django-nodejs-alternative', 302)
  getUserById(
    // @Query() query: any,
    @Query('user') user: string,
    @Param() param: any,
    @Body() body: object,
    @Headers() header: object,
    // @Req() request: Request,
  ): string {
    console.log('getUserById: ----- Decorator ---- ');
    console.log('Decorate: query: ', user);
    console.log('Decorate: param: ', param);
    console.log('Decorate: body: ', body);
    console.log('Decorate: body: ', header);

    return 'Route accessed by user web';
  }
}
