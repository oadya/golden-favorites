import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-docker',
  templateUrl: './docker.component.html',
  styleUrls: ['./docker.component.scss']
})
export class DockerComponent implements OnInit {

  

  allLinks: any[] = [
    
    {
      "title": "DOCKER",
      "link": "https://github.com/oadya/devops-docker",
    },
    {
      "title": "KUBERNATES",
      "link": "https://github.com/oadya/devops-kubernates",
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
