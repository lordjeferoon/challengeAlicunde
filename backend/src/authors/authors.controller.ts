import { Controller, Get, Post, Body, Param, NotFoundException, BadRequestException, UseFilters } from '@nestjs/common';
import { Author } from './author';
import { AuthorsService } from './author.service';

@Controller('authors')
export class AuthorsController {
  constructor(private readonly authorsService: AuthorsService) {}

  @Get()
  async findAll(): Promise<Author[]> {
    return await this.authorsService.findAll();
  }

  @Post()
  async create(@Body() author: Author): Promise<Author> {
    if (!author.name) {
      throw new BadRequestException('El nombre del autor es obligatorio.');
    }

    return await this.authorsService.create(author);
  }

  @Get(':id/books')
  async findBooksByAuthorId(@Param('id') id: number): Promise<number[]> {
    const authorBooks = await this.authorsService.findBooksByAuthorId(id);

    if (!authorBooks) {
      throw new NotFoundException(`Autor con ID ${id} no encontrado.`);
    }

    return authorBooks;
  }
}