import { Injectable } from '@nestjs/common';
import { Author } from './author';
import { BookAuthor } from '../books/book-author';

@Injectable()
export class AuthorsService {
  private authors: Author[] = [];
  private bookAuthors: BookAuthor[] = [];

  async findAll(): Promise<Author[]> {
    return this.authors;
  }

  async create(author: Author): Promise<Author> {
    author.id = this.authors.length + 1;
    this.authors.push(author);
    return author;
  }

  async findBooksByAuthorId(id: number): Promise<number[]> {
    const authorBooks = this.bookAuthors
      .filter((ba) => ba.authorId === id)
      .map((ba) => ba.bookId);

    return authorBooks;
  }
}