import { Component, OnInit } from '@angular/core';
import { CompteService } from '../service/compte.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login : string = "";
  password : string = "";

  constructor(private compteService : CompteService ) { }

  ngOnInit(): void {
  }

  connexion () {
    console.log (this.login + " " + this.password);
    this.compteService.login (this.login,this.password).subscribe (flux => console.log (flux));

  }

}
