import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maven',
  templateUrl: './maven.component.html',
  styleUrls: ['./maven.component.scss']
})
export class MavenComponent implements OnInit {


  allLinks: any[] = [
    {
      "title": "MAVEN + JAXB",
      "link": "https://github.com/oadya/mb2g-jaxb",
    },
    {
      "title": "MAVEN + LOMBOK",
      "link": "https://github.com/oadya/mb2g-lombok",
    },

    {
      "title": "MAVEN + MAPSTRUCT",
      "link": "https://github.com/oadya/mb2g-mapstruct",
    },

    {
      "title": "MAVEN + JSON",
      "link": "https://github.com/oadya/mb2g-json-schema",
    },

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
