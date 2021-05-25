import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-registretion',
  templateUrl: './login-registretion.component.html',
  styleUrls: ['./login-registretion.component.scss']
})
export class LoginRegistretionComponent implements OnInit {



  constructor() { }

  ngOnInit(): void {
  }


  public register() {
    document.getElementById("login").style.left = "-400px";
    document.getElementById("register").style.left = "50px";
    document.getElementById("btn").style.left = "110px";
  }

  public login() {
    document.getElementById("login").style.left = "50px";
    document.getElementById("register").style.left = "450px";
    document.getElementById("btn").style.left = "0";
  }

}
