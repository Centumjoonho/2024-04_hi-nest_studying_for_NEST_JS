import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { AppController } from './app.controller';

import { TodosModule } from './todos/todos.module';
import { PostsModule } from './posts/posts.module';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [MoviesModule, TodosModule, PostsModule, TodoModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
