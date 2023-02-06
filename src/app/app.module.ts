import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatButtonModule} from '@angular/material/button';
import { BooksModule } from './books/books.module';
import { CartComponent } from './cart/cart.component';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule, 
    BooksModule,AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
