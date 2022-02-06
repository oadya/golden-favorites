import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maven',
  templateUrl: './maven.component.html',
  styleUrls: ['./maven.component.scss']
})
export class MavenComponent implements OnInit {


  allLinks: any[] = [
    {
      "title": "Maven projects & documentations",
      "link": "https://github.com/oadya/Maven-Guru-Docs",
    }, {
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
    }

  ];


  othersLinks: any[] = [
    "http://books.sonatype.com/mvnref-book/reference/index.html",
    "https://www.vogella.com/tutorials/ApacheMaven/article.html",
    "https://maven.apache.org/pom.html#Aggregation",
    "http://tutorials.jenkov.com/maven/maven-commands.html",
    "https://www.baeldung.com/category/maven/",
    "https://www.baeldung.com/maven",
    "https://www.baeldung.com/category/maven/tag/maven-basics/",
    "https://maven.apache.org/download.cgi",
    "https://maven.apache.org/guides/mini/index.html",
    "https://maven.apache.org/settings.html#Servers",
    "https://maven.apache.org/guides/index.html",
    "https://maven.apache.org/guides/mini/guide-mirror-settings.html",
    "https://maven.apache.org/ref/3.6.3/maven-settings/settings.html",
    "https://maven.apache.org/plugins/maven-dependency-plugin/examples/copying-artifacts.html",
    "https://maven.apache.org/plugins/maven-dependency-plugin/examples/purging-local-repository.html",
    "https://www.baeldung.com/maven-goals-phases",
    "https://www.baeldung.com/java-optional",
    "https://www.baeldung.com/category/maven/",
    "https://maven.apache.org/guides/introduction/introduction-to-the-lifecycle.html#Lifecycle_Reference",
    "https://maven.apache.org/settings.html#Servers",
    "https://maven.apache.org/guides/mini/guide-3rd-party-jars-local.html",
    "https://stackoverflow.com/questions/50824789/why-am-i-getting-received-fatal-alert-protocol-version-or-peer-not-authentic",

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
