import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spring-boot',
  templateUrl: './spring-boot.component.html',
  styleUrls: ['./spring-boot.component.scss']
})
export class SpringBootComponent implements OnInit {

  allLinks: any[] = [
    {
      "title": "Spring-Boot-Exercices",
      "link": "https://github.com/oadya/Spring-Boot-Exercices",
    },
    {
      "title": "Spring Boot + JWT Token + Spring Security ",
      "link": "https://github.com/oadya/spring-boot-jwt-token-spring-security",
    },
    {
      "title": "Spring Boot + H2 IN Memory Database + SAWAGER UI",
      "link": "https://github.com/oadya/spring-boot-h2-database-swagger",
    },
    {
      "title": "Spring MVC CRUD",
      "link": "https://github.com/oadya/Spring-MVC-CRUD",
    },

    {
      "title": "Spring boot Profiles",
      "link": "https://github.com/oadya/spring-boot/tree/master/SpringBootProfilesApp2-master",
    },
    {
      "title": "Spring Data Pagination",
      "link": "https://github.com/oadya/spring-boot/tree/master/-SpringDataPaginationDemo-master",
    },

    {
      "title": "Spring Data Named Query",
      "link": "https://github.com/oadya/spring-boot/tree/master/-SpringDataNamedQueryDemo-master",
    },

    {
      "title": "Spring Data Query Annotation",
      "link": "https://github.com/oadya/spring-boot/tree/master/SpringDataQueryAnnotation_2-master",
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
