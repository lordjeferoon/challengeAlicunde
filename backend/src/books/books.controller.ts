import { Controller, Get, Post, Body, Param, NotFoundException, BadRequestException, UseFilters } from '@nestjs/common';
import { Book } from './book';
import { Author } from '../authors/author';
import { BookAuthor } from './book-author';
import { BooksService } from './book.service';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  async findAll(): Promise<Book[]> {
    return await this.booksService.findAll();
  }

  @Post()
  async create(@Body() book: Book): Promise<Book> {
    if (!book.title || !book.chapters || !book.pages || !book.authors) {
      throw new BadRequestException('Los datos del libro son inválidos.');
    }

    return await this.booksService.create(book);
  }

  @Get(':id/average-pages-per-chapter')
  async getAveragePagesPerChapter(@Param('id') id: number): Promise<{ id: number; average: string }> {
    const book = await this.booksService.findOne(id);

    if (!book) {
      throw new NotFoundException(`Libro con ID ${id} no encontrado.`);
    }

    const average = book.getAveragePagesPerChapter();

    return { id: book.id, average };
  }
}