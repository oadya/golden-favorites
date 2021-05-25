import { Component, OnDestroy, OnInit } from '@angular/core';
import { MediaChange, MediaObserver } from "@angular/flex-layout";
import { Subscription } from 'rxjs';
import { menu } from 'src/app/domain/menu';
import { NavItem } from 'src/app/domain/nav-item';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {

  public opened: boolean = true;
  public mediaWatcher: Subscription;
  public menu: NavItem[] = menu;

  subscription: Subscription;

  constructor(private media: MediaObserver,
    private messageService: MessageService) {

    this.mediaWatcher = this.media.media$.subscribe((mediaChange: MediaChange) => {
      this.handleMediaChange(mediaChange);
    })


    this.subscription = this.messageService.onMenuChange().subscribe(value => {
      this.opened = value;
    });

  }

  ngOnInit(): void {
  }

  private handleMediaChange(mediaChange: MediaChange) {
    if (this.media.isActive('lt-md')) {
      this.opened = false;
    } else {
      this.opened = true;
    }
  }


  log(state) {
    console.log(state)
    console.log(this.opened)

  }

  ngOnDestroy() {

    // unsubscribe to ensure no memory leaks
    this.mediaWatcher.unsubscribe();
    this.subscription.unsubscribe();
  }

}
