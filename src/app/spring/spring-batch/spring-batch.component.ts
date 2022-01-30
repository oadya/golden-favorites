import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spring-batch',
  templateUrl: './spring-batch.component.html',
  styleUrls: ['./spring-batch.component.scss']
})
export class SpringBatchComponent implements OnInit {


  allLinks: any[] = [
    {
      "title": "Spring Batch + Tests d'intégration",
      "link": "https://github.com/oadya/spring-boot-batch-TI",
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
