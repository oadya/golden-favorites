import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, OnDestroy {

  constructor(
    private router: Router,
    private messageService: MessageService) { }

  ngOnInit(): void {
    this.router.navigate(['dashboard']);
  }


  ngOnDestroy() {
  }
}
