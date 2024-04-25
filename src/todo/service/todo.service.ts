import { Injectable } from '@nestjs/common';
import { PrismaService } from './../../prisma.service';
import { Todo } from '@prisma/client';

@Injectable()
export class TodoService {
  constructor(private prismaService: PrismaService) {}

  // 전체 조회
  async fetchAllTodos(): Promise<Todo[]> {
    return this.prismaService.todo.findMany();
  }
  // 단일 조회
  async fetchATodoItem(id: number): Promise<Todo | null> {
    return this.prismaService.todo.findUnique({ where: { id: Number(id) } });
  }

  // 단일 삭제
  async deleteATodoItem(id: number): Promise<Todo | null> {
    return this.prismaService.todo.delete({ where: { id: Number(id) } });
  }

  // 추가
  async addTodoItem(data: Todo): Promise<Todo | null> {
    return this.prismaService.todo.create({ data: data });
  }

  // 단일 수정
  async updateTodoItem(
    id: number,
    title: string,
    content: string,
    is_done: boolean,
  ): Promise<Todo | null> {
    return this.prismaService.todo.update({
      where: { id: Number(id) },
      data: { title: title, content: content, is_done: is_done },
    });
  }
}
