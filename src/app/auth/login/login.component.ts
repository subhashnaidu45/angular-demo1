import { Component } from '@angular/core';
import { LoginForm } from 'src/app/types/auth';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

form: LoginForm = {
  email: '',
  password: '',
};

isLoading: boolean = false;

constructor(private authService: AuthService){}

submit(){
  if(this.isLoading) return;
  this.isLoading = true;
  this.authService.login()
  
  
  
}

  
}
