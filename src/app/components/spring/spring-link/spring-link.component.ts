import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spring-link',
  templateUrl: './spring-link.component.html',
  styleUrls: ['./spring-link.component.scss']
})
export class SpringLinkComponent implements OnInit {


  allLinks: any[] = [
    "https://github.com/mohamedYoussfi/spring-security-jwt-micro-service",
    "https://github.com/dailycodebuffer/Spring-MVC-Tutorials",
    "https://github.com/github4codedebugger/async-springboot/",
    "https://github.com/Java-Techie-jt/springboot-multithreading-example",
    "https://howtodoinjava.com/spring-rest/spring-rest-crud-jpa-example/",
    "https://www.codesenior.com/en/tutorial/Spring-Generic-DAO-and-Generic-Service-Implementation",
    "https://www.petrikainulainen.net/programming/spring-framework/spring-data-jpa-tutorial-part-two-crud/",
    "https://blog.jayway.com/2013/11/03/spring-and-autowiring-of-generic-types/",
    "https://dzone.com/articles/ddd-spring-boot-multi-module-maven-project",
    "https://www.javadevjournal.com/spring-boot/multi-module-project-with-spring-boot/",
    "https://howtodoinjava.com/spring-boot2/h2-database-example/",
    "https://cloud.spring.io/spring-cloud-static/spring-cloud-openfeign/2.1.5.RELEASE/multi/multi_spring-cloud-feign.html",
    "https://howtodoinjava.com/spring-boot2/h2-database-example/",
    "https://codeboje.de/getting-started-feignclient/",
    "https://cloud.spring.io/spring-cloud-openfeign/reference/html/",
    "https://www.javadevjournal.com/spring-boot/",
    "https://www.eclipse.org/hawkbit/guides/feignclient/",
    "https://www.javadevjournal.com/spring-boot/spring-boot-add-filter/",
    "https://www.javadevjournal.com/spring/rest-resource-naming/",
    "https://www.baeldung.com/spring-request-param",
    "https://www.baeldung.com/tag/spring-core-basics/",
    "https://www.baeldung.com/tag/spring-annotations/",
    "https://www.baeldung.com/spring-request-param",
    "https://www.baeldung.com/spring-bean-scopes",
    "https://www.baeldung.com/java-8-double-colon-operator",
    "https://www.baeldung.com/tag/java-8/",
    "https://www.springboottutorial.com/spring-boot-crud-rest-service-with-jpa-hibernate",
    "https://howtodoinjava.com/spring-boot2/h2-database-example/",
    "https://www.javadevjournal.com/spring-boot/spring-boot-configuration-properties/",
    "https://www.baeldung.com/java-when-to-use-parallel-stream",
    "https://roytuts.com/how-to-call-spring-rest-apis-concurrently-using-java-completablefuture/",
    "https://www.codeusingjava.com/hazelcast/boot",
    "https://docs.spring.io/spring-batch/docs/current/reference/html/step.html",
    "https://thepracticaldeveloper.com/guide-spring-boot-controller-tests/",
    "https://www.baeldung.com/cron-expressions",
    "https://www.baeldung.com/spring-scheduled-tasks",
    "http://www.quartz-scheduler.org/documentation/quartz-2.3.0/tutorials/crontrigger.html",
    "https://dzone.com/articles/running-on-time-with-springs-scheduled-tasks",
    "https://reflectoring.io/spring-scheduler/",
    "https://www.callicoder.com/spring-boot-task-scheduling-with-scheduled-annotation/",
    "https://devstory.net/11131/executer-des-taches-planifiees-en-arriere-plan-dans-spring",
    "https://www.baeldung.com/spring-classpath-file-access",
    "https://frontbackend.com/linux/cron-every-30-minutes",
    "https://dzone.com/articles/working-with-spring-boot-and-hazelcastdistributed",
    "https://www.codeusingjava.com/hazelcast",
    "https://www.javainuse.com/hazelcast",
    "https://dzone.com/articles/working-with-spring-boot-and-hazelcastdistributed",
  ];




  spingFilelinks: any[] = [

    "https://www.devglan.com/spring-boot/spring-boot-file-upload-download#:~:text=Spring%20Boot%20File%20Upload%20to%20Database&text=Spring%20boot%20provides%20a%20very,data%20JPA%20for%20our%20purpose.&text=To%20save%20the%20uploaded%20file,save%20it%20in%20the%20DB",
    "https://bezkoder.com/spring-boot-file-upload/",
    "https://www.callicoder.com/spring-boot-file-upload-download-rest-api-example/",
    "https://www.javaguides.net/2020/04/spring-boot-file-upload-download-rest-api-example.html",
    "https://attacomsian.com/blog/uploading-files-spring-boot",
    "https://medium.com/@rameez.s.shaikh/upload-and-retrieve-images-using-spring-boot-angular-8-mysql-18c166f7bc98",

  ];

  springuploadLinks: any[] = [
    "https://medium.com/@chinthakajayatilake98/file-upload-download-as-multipart-file-using-angular-6-spring-boot-7ad06d841c21",
    "https://bezkoder.com/angular-spring-boot-file-upload/",
    "https://www.javatpoint.com/angular-spring-file-upload-example",
    "https://www.devglan.com/spring-boot/angular-multiple-file-upload",
    "https://turreta.com/2018/05/20/upload-multiple-files-with-spring-boot-1-5-10-java-8-and-angular-5/",
    "https://appdividend.com/2019/06/07/angular-8-file-upload-tutorial-with-example-angular-image-upload/",

  ];



  springdataLinks: any[] = [
    "https://www.baeldung.com/spring-data-annotations",
    "https://www.javaguides.net/2018/09/spring-data-jpa-auditing-with-spring-boot2-and-mysql-example.html",
    "https://www.javaguides.net/p/spring-data-jpa-tutorial.html",
    "https://attacomsian.com/blog/spring-data-jpa-composite-primary-key",
    "https://attacomsian.com/blog/spring-data-jpa-composite-primary-key?amp",
    "https://www.amitph.com/spring-data-jpa-embeddedid-partially/",
    "https://www.amitph.com/spring-data-jpa-embeddedid/",
    "https://hellokoding.com/spring-boot/jpa-composite-primary-key/",
    "https://webdev.jhuep.com/~jcs/ejava-javaee/coursedocs/content/html/jpa-entity-compositepk.html#jpa-entity-compositepk-embedded",
    "https://grokonez.com/spring-framework/spring-data/create-composite-primary-key-spring-jpa-mysql",
    "https://youtu.be/qn9SbW44rQ8",
    "https://www.amitph.com/spring-data-jpa-query-methods/",
    "http://zetcode.com/springboot/findbyid/",
  
  ];

  
  constructor() { }

  ngOnInit(): void {
  }

}
