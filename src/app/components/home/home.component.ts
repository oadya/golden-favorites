import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,) { }

  ngOnInit(): void {
  }


  java(): void {
    this.router.navigate(['../java'], { relativeTo: this.route });
  }


  spring(): void {
    this.router.navigate(['../spring/spring-link'], { relativeTo: this.route });
  }


  html(): void {
    this.router.navigate(['../templates-html-css'], { relativeTo: this.route });
  }


  angular(): void {
    this.router.navigate(['../angular/angular-link'], { relativeTo: this.route });
  }


  maven(): void {
    this.router.navigate(['../maven'], { relativeTo: this.route });
  }


  elasticsearch(): void {
    this.router.navigate(['../elasticsearch'], { relativeTo: this.route });
  }


  sql(): void {
    this.router.navigate(['../bases-donnees'], { relativeTo: this.route });
  }


  jenkins(): void {
    this.router.navigate(['../jenkins'], { relativeTo: this.route });
  }


  docker(): void {
    this.router.navigate(['../docker'], { relativeTo: this.route });
  }


  nosql(): void {
    this.router.navigate(['../nosql'], { relativeTo: this.route });
  }


  git(): void {
    this.router.navigate(['../git'], { relativeTo: this.route });
  }

}
