import { Injectable } from '@angular/core';
import { Auth, signInWithPopup, signOut, GoogleAuthProvider} from '@angular/fire/auth'

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private auth: Auth) { }

  login(){
    return signInWithPopup(this.auth, new GoogleAuthProvider);
  }

  logout(){
    return signOut(this.auth);
  }

  getUser(){
    return this.auth.currentUser;
  }

  getEmail(): string {
    return this.auth.currentUser?.email ? this.auth.currentUser?.email : "";
  }

  getName(){
    return this.auth.currentUser?.displayName ? this.auth.currentUser.displayName : "";
  }


}
