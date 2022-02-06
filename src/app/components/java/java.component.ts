import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-java',
  templateUrl: './java.component.html',
  styleUrls: ['./java.component.scss']
})
export class JavaComponent implements OnInit {


  javaLinks: any[] = [

    {
      "title": "Jwt authentication",
      "link": "https://github.com/oadya/jwt-authentication",
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


  javaOhersLinks: any[] = [
    "https://howtodoinjava.com/java/generics/complete-java-generics-tutorial/",
    "https://www.javaguides.net/p/java-multithreading-utorial.html",
    "https://www.javacodegeeks.com/2016/12/mapstruct-transferring-data-one-bean-another.html",
    "https://javarevisited.blogspot.com/2017/02/17-examples-of-calendar-and-date-in-java.html",
    "https://dzone.com/articles/spring-transaction-management",
    "http://zetcode.com/java/fileutils/",
    "https://www.soberkoder.com/apache-fileutils-tutorial/",
    "https://howtodoinjava.com/java/generics/complete-java-generics-tutorial/",
    "https://www.javaguides.net/p/java-multithreading-utorial.html",
    "https://www.javacodegeeks.com/2016/12/mapstruct-transferring-data-one-bean-another.html",
    "https://goldenpackagebyanuj.blogspot.com/2010/08/take-screen-shot-of-current-window.html",
    "https://www.codejava.net/java-se/graphics/how-to-capture-screenshot-programmatically-in-java",
    "https://www.baeldung.com/print-screen-in-java",
    "https://javatutorial.net/java-file-upload-rest-service",
    "https://www.baeldung.com/java-file-sftp",
    "https://www.woolha.com/tutorials/java-connecting-to-sftp-uploading-downloading-files",
    "https://codingbeginners.com/what-is-sftp-simple-java-sftp-file-upload-code/",
    "https://www.devglan.com/spring-boot/spring-boot-file-upload-download",

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
