import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  opened = true;

  constructor(
    private messageService: MessageService) { }

  ngOnInit(): void {
  }

  toggleMen() {
    this.opened = !this.opened;
    this.messageService.sendMessageMenu(this.opened);
  }
}
