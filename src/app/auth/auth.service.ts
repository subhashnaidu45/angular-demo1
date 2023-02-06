import { Injectable } from '@angular/core';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { LoginForm } from '../types/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
isAuthenticated: boolean = false;
  constructor() { }

  login(form: LoginForm) {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        // Signed in 
        alert('Yeah Login successful');
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert('Credentials are incorrect');
        // ..
      })}

  register() {}
}
