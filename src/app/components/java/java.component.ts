import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-java',
  templateUrl: './java.component.html',
  styleUrls: ['./java.component.scss']
})
export class JavaComponent implements OnInit {


  allLinks: any[] = [
    {
      "title": "Java Design Pattern",
      "link": "https://github.com/oadya/java-design-pattern",
    },
    {
      "title": "Java JCA-JCE, APIs pour l'encryptage et le décryptage",
      "link": "https://github.com/oadya/java-jca-jce",
    },

    {
      "title": "Java JAXB, pour les transmations XML",
      "link": "https://github.com/oadya/java-jaxb",
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
