import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { AppController } from './app.controller';

import { TodosModule } from './todos/todos.module';

@Module({
  imports: [MoviesModule, TodosModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
