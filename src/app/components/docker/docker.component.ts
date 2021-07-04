import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-docker',
  templateUrl: './docker.component.html',
  styleUrls: ['./docker.component.scss']
})
export class DockerComponent implements OnInit {

  

  allLinks: any[] = [
    {
      "title": "DOCKERS +JENKINS ",
      "link": "https://github.com/oadya/jenkins-resources/tree/master/jenkins",
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
