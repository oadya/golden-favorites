import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jenkins',
  templateUrl: './jenkins.component.html',
  styleUrls: ['./jenkins.component.scss']
})
export class JenkinsComponent implements OnInit {



  allLinks: any[] = [
    {
      "title": "JENKINS PIPELINE-SONARQUE-AWS",
      "link": "https://github.com/oadya/cicd-pipeline-jenkins-sonar-aws",
    },
    {
      "title": "JENKINS CICD",
      "link": "https://github.com/oadya/formation-cicd",
    },
    {
      "title": "JENKINS + DOCKERS",
      "link": "https://github.com/oadya/jenkins-resources/tree/master/jenkins",
    },
  ];


  othersLinks: any[] = [

    "https://jenkinsci.github.io/job-dsl-plugin/#path/job",
    "https://www.vogella.com/tutorials/Jenkins/article.html",
    "https://www.jenkins.io/doc/tutorials/#pipeline/",
    "https://www.jenkins.io/doc/book/pipeline/jenkinsfile/#using-environment-variables",
    "https://plugins.jenkins.io/job-dsl/",
    "https://www.digitalocean.com/community/tutorials/how-to-automate-jenkins-job-configuration-using-job-dsl",
    "https://jenkinsci.github.io/job-dsl-plugin/#path/job-description",
    "https://github.com/jenkinsci/ansible-plugin",
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
