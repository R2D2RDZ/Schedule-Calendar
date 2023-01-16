import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private usuarioservice: UsuarioService, private router: Router) { }

  ngOnInit() {
  }

  Login(){
    this.usuarioservice.login()
    .then(() => this.router.navigate(['/tabs']))
    .catch(error => console.log(error));
  }

}
