import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Get()
  getHello(): string {
    return this.todosService.getHello();
  }
  @Post()
  postHello(): string {
    return this.todosService.postHello();
  }

  @Put()
  putHello(): string {
    return this.todosService.putHello();
  }

  @Delete()
  deleteHello(): string {
    return this.todosService.deleteHello();
  }
}
