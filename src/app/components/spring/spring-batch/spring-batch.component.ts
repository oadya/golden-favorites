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
    }
  ];


  othersLinks: any[] = [

    "https://www.kaherecode.com/tutorial/commencer-la-programmation-avec-spring-batch",
    "https://www.toptal.com/spring/spring-batch-tutorial",
    "https://gkemayo.developpez.com/tutoriels/java/tutoriel-sur-mise-oeuvre-spring-batch-avec-spring-boot/",
    "https://www.javainuse.com/spring/bootbatch",
    "https://www.petrikainulainen.net/programming/spring-framework/spring-batch-tutorial-introduction/",
    "https://www.codeusingjava.com/boot/batch/hello",
    "https://www.dineshonjava.com/spring-batch-process-with-example/",
    "https://www.javadream.in/spring-batch-tutorial/",
    "https://spring.developpez.com/cours/#spring-batch",
    "https://www.javainuse.com/spring/bootbatch",
    "https://www.javainuse.com/spring/batch/jobparam",
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
