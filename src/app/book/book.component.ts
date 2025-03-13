import { Component } from '@angular/core';


interface Book {
  title: string;
  author: string;
}

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})

export class BookComponent {
  book: Book = { title: '', author: '' };
  books: Book[] = [];

  ngOnInit() {
    this.books = this.getBooks();
  }

  addBook() {
    this.books.push({ ...this.book });
    this.book = { title: '', author: '' };
  }

  getBooks() {
    const books = localStorage.getItem('books');
    return books ? JSON.parse(books) : [];
  }

  deleteBook(title: string) {
    this.books = this.books.filter(book => book.title !== title);
  }

  generateId() {
    return '_' + Math.random().toString(36).substr(2, 9);
  }
}
