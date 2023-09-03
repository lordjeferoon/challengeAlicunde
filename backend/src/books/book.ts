export class Book {
  id: number;
  title: string;
  chapters: number;
  pages: number;
  authors: number[];

  getAveragePagesPerChapter(): string {
    const average = this.pages / this.chapters;
    return average.toFixed(2);
  }
}