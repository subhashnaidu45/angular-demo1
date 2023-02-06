import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartService } from 'src/app/cart/cart.service';
import { Book } from '../../types/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
@Input() book: Book = {} as Book;
@Output() bookEmitter = new EventEmitter<Book>();

constructor(private cartService : CartService){}

isInCart:boolean= false;

addtoCart(){
  // console.log(this.book);
  this.cartService.add(this.book)
  this.isInCart= true;
  // this.bookEmitter.emit(this.book);
}
removeFromCart(){
  this.cartService.remove(this.book)
  this.isInCart= false;
}
}
