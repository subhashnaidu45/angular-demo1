// import { Component } from '@angular/core';

// @Component({
//   selector: '',
//   templateUrl: './app/books/books.component.html',
//   styleUrls: ['./app/books/books.component.css'],
// })
// export class BooksComponent {}

import { Component, OnInit } from '@angular/core';
import { Book } from '../types/book';
import { BooksService } from './books.service';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {

  constructor(private booksService: BooksService) {}

  books: Book[] = [];

 

  ngOnInit() {
    this.books=this.booksService.getBooks();
  }
  // isDisabled: boolean = false;
  // handleClick(){
  //   alert('I am working');
  //   this.isDisabled=true;
  // }
  
isShowing:boolean=false;

// addtoCart(book: Book){
//   console.log(book);
// }


// toggle(){
//   this.isShowing=!this.isShowing;
// }
}
