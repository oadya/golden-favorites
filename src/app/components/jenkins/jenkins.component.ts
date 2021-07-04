import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jenkins',
  templateUrl: './jenkins.component.html',
  styleUrls: ['./jenkins.component.scss']
})
export class JenkinsComponent implements OnInit {



  allLinks: any[] = [
    {
      "title": "JENKINS + DOCKERS",
      "link": "https://github.com/oadya/jenkins-resources/tree/master/jenkins",
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
