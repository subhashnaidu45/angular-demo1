import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor() {}

  getBooks(){
    return [
      {
        name : 'Harry Potter and the Philosophers Stone',
        author:   'J.K. Rowling',
        image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1170803558l/72193._SX120_SY180_.jpg',
        price: 400,
        rating: 4.47,
      },
      {
        name : 'Harry Potter and the Chamber of Secrets',
        author:   'J.K. Rowling',
        image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1474169725i/15881._SY180_.jpg',
        price: 420,
        rating: 4.43,
      },
      {
        name : 'Harry Potter and the Prisoner of Azkaban',
        author:   'J.K. Rowling',
        image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1630547330i/5._SY180_.jpg',
        price: 440,
        rating: 4.58,
      },
      {
        name : 'Harry Potter and the Goblet of Fire',
        author:   'J.K. Rowling',
        image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1671736452i/6._SX120_.jpg',
        price: 460,
        rating: 4.57,
      },
      {
        name : 'Harry Potter and the Order of the Phoenix',
        author:   'J.K. Rowling',
        image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1660911061i/2._SY180_.jpg',
        price: 480,
        rating: 4.5,
      },
      {
        name : 'Harry Potter and the Half-Blood Prince',
        author:   'J.K. Rowling',
        image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1587697303i/1._SX120_.jpg',
        price: 500,
        rating: 4.58,
      },
      {
        name : 'Harry Potter and the Deathly Hallows',
        author:   'J.K. Rowling',
        image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1663805647i/136251._SY180_.jpg',
        price: 520,
        rating: 4.62,
      },
      {
        name : 'Harry Potter and the Cursed Child',
        author:   'J.K. Rowling',
        image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1470082995i/29056083._SY180_.jpg',
        price: 200,
        rating: 3.51,
      },];
  }
}
