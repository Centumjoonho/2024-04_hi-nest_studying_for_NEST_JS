import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TodoService } from '../service/todo.service';
import { Todo } from '@prisma/client';

@Controller('api/v1/todo')
export class TodoController {
  constructor(private readonly todoservice: TodoService) {}

  @Get()
  async fetchAllTodos(): Promise<Todo[]> {
    return this.todoservice.fetchAllTodos();
  }

  @Get(':id')
  async fetchATodoItem(@Param('id') id: number): Promise<Todo | null> {
    return this.todoservice.fetchATodoItem(id);
  }

  @Delete(':id')
  async deleteATodoItem(@Param('id') id: number): Promise<Todo | null> {
    return this.todoservice.deleteATodoItem(id);
  }

  @Post()
  async addTodoItem(@Body() data: Todo): Promise<Todo> {
    return this.todoservice.addTodoItem(data);
  }

  @Put(':id')
  async updateTodoItem(
    @Param('id') id: number,
    @Body() data: Todo,
  ): Promise<Todo> {
    return this.todoservice.updateTodoItem(
      id,
      data.title,
      data.content,
      data.is_done,
    );
  }
}
