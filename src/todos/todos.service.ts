import { Injectable } from '@nestjs/common';

@Injectable()
export class TodosService {
  getHello(): string {
    return 'AppService -getHello';
  }
  postHello(): string {
    return 'AppService -getHello';
  }
  putHello(): string {
    return 'AppService -getHello';
  }
  deleteHello(): string {
    return 'AppService -getHello';
  }
}
