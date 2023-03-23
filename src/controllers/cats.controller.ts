/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post, Res, HttpStatus } from "@nestjs/common";
import { Response } from "express";
import { CreateCatDto } from "src/dto/create-cat.dto";

@Controller('cats')
export class CatsController {

  @Post()
  create(@Body() createCatDto: CreateCatDto, @Res() res: Response): object {

    console.log(createCatDto);
    return res.status(HttpStatus.CREATED).json(createCatDto);
  }

  @Get()
  findAll(): object {

    return {
      name: "Joao Marcos Junior",
      age: 38,
      breed: "nothing",
    };
  }
}
