import { Injectable } from '@nestjs/common';
import { Book } from './book';

@Injectable()
export class BooksService {
  private books: Book[] = [];

  async findAll(): Promise<Book[]> {
    return this.books;
  }

  async create(book: Book): Promise<Book> {
    book.id = this.books.length + 1;
    this.books.push(book);
    return book;
  }

  async findOne(id: number): Promise<Book | undefined> {
    return this.books.find((b) => b.id === id);
  }
}