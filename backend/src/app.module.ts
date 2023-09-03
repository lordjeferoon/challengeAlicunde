import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { BooksController } from './books/books.controller';
import { AuthorsController } from './authors/authors.controller';
import { BooksService } from './books/book.service';
import { AuthorsService } from './authors/author.service';

@Module({
  imports: [],
  controllers: [BooksController, AuthorsController],
  providers: [AppService, BooksService, AuthorsService],
})
export class AppModule {}
