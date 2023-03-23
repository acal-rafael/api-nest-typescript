/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Cat } from 'src/interfaces/cat.interfaces';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  create(cat: Cat) {
    this.cats.push(cat);
  }

  findAll(): Cat[] {
    return this.cats;
  }
}