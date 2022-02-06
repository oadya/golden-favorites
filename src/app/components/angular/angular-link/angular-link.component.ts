import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-link',
  templateUrl: './angular-link.component.html',
  styleUrls: ['./angular-link.component.scss']
})
export class AngularLinkComponent implements OnInit {


  othersLinks: any[] = [
    "https://www.digitalocean.com/community/tutorials/angular-query-parameters-fr",
    "https://www.netjstech.com/p/angular-framework-tutorial.html",
    "https://www.netjstech.com/2020/09/angular-cross-component-communication-subject-observable.html",
    "https://www.netjstech.com/2020/09/angular-cross-component-communication-subject-observable.html",
    "https://www.tutorialsteacher.com/typescript/typescript-switch",
    "https://www.tutorialsteacher.com/typescript/typescript-generic-class",
    "https://gkemayo.developpez.com/tutoriels/java/tutoriel-sur-creation-application-web-avec-angular7-et-spring-boot-2/",
    "https://gkemayo.developpez.com/tutoriels/java/tutoriel-sur-creation-application-web-avec-angular7-et-spring-boot-2/?page=creation-du-projet-spring-boot#LIII",
    "https://stackoverflow.com/questions/9011524/regex-to-check-whether-a-string-contains-only-numbers",
    "https://stackoverflow.com/questions/43698032/angular-how-to-update-queryparams-without-changing-route",
    "https://github.com/fknop/angular-pipes/blob/master/src/aggregate/group-by.pipe.ts",
    "https://malcoded.com/posts/angular-ngclass/",
    "https://www.freecodecamp.org/news/everything-you-need-to-know-about-ng-template-ng-content-ng-container-and-ngtemplateoutlet-4b7b51223691/",
    "https://www.tektutorialshub.com/angular/angular-http-error-handling/",
    "https://indepth.dev/posts/1311/the-update-on-option-in-angular-forms",
    "https://alligator.io/angular/",
    "https://www.digitalocean.com/community/tutorials/angular-testing-with-spies",
    "https://ultimatecourses.com/blog/angular-ngif-else-then",
    "https://stackoverflow.com/questions/40176061/two-switch-case-values-in-angular",
    "https://medium.com/bb-tutorials-and-thoughts/retaining-state-of-the-angular-app-when-page-refresh-with-ngrx-6c486d3012a9",
    "https://stackoverflow.com/questions/45226354/conditionally-make-input-field-readonly-in-angular-2-or-4-advice-best-which-w",
    "https://ultimatecourses.com/blog/ng-class-angular-classes",
    "https://codecraft.tv/courses/angular/built-in-directives/ngstyle-and-ngclass/",
    "https://www.concretepage.com/angular-2/angular-2-4-route-guards-canactivate-and-canactivatechild-example",
    "https://www.techiediaries.com/angular/",
    "https://guide-angular.wishtack.io/angular/pipes",
  ];

  ngwizardcomponentLinks: any[] = [
    "https://www.npmjs.com/package/ng-wizard",
    "https://cmdap.github.io/ng-wizard/#/personal",
    "https://github.com/cmdap/ng-wizard",
    "https://angularscript.com/wizard-stepper-component/",
    "https://www.skypack.dev/view/ng-wizard-component?from=pika",

  ];

  uploadLinks: any[] = [
    "https://www.ahmedbouchefra.com/angular-tutorial-example-upload-files-with-formdata-httpclient-rxjs-and-material-progressbar/",
    "https://www.geeksforgeeks.org/angular-file-upload/",
    "https://malcoded.com/posts/angular-file-upload-component-with-express/",
    "https://blog.jscrambler.com/implementing-file-upload-using-node-and-angular/",
    "https://bezkoder.com/angular-10-file-upload/",
    "https://bezkoder.com/angular-multiple-files-upload/",
    "https://stackblitz.com/edit/angular-file-upload",
    "https://stackoverflow.com/questions/53536826/angular-how-to-add-remove-files-in-the-angular",
    "https://medium.com/@chinthakajayatilake98/file-upload-download-as-multipart-file-using-angular-6-spring-boot-7ad06d841c21",
    "https://bezkoder.com/angular-spring-boot-file-upload/",
    "https://www.javatpoint.com/angular-spring-file-upload-example",
    "https://www.devglan.com/spring-boot/angular-multiple-file-upload",
    "https://turreta.com/2018/05/20/upload-multiple-files-with-spring-boot-1-5-10-java-8-and-angular-5/",
    "https://appdividend.com/2019/06/07/angular-8-file-upload-tutorial-with-example-angular-image-upload/",

  ];


  agularRxjsLinks: any[] = [

    "https://makina-corpus.com/blog/metier/2017/premiers-pas-avec-rxjs-dans-angular",
    "https://rxjs.dev/api/operators/flatMap",
    "https://www.learnrxjs.io/learn-rxjs/operators/filtering/take"
  ];

  paginatonLinks: any[] = [
    "https://careydevelopment.us/blog/how-to-display-sort-and-paginate-data-in-an-angular-material-table",
    "https://blog.angular-university.io/angular-material-data-table/",
    "https://stackblitz.com/edit/angular-mat-table-render-rows?file=app%2Ftable-filtering-example.ts",
    "https://qastack.fr/programming/46893164/mat-table-sorting-demo-not-working",
    "https://www.angularjswiki.com/material/mat-table-pagination/",
    "https://www.freakyjolly.com/angular-material-8-adding-multiple-tables-on-single-component-tutorial/",
    "https://code-maze.com/angular-material-table/",
    "https://www.positronx.io/angular-material-8-data-table-pagination-sorting-tutorial/",
    "https://programmersought.com/article/51762678397/",
    "https://stackblitz.com/edit/delete-rows-mat-table?file=app%2Ftable-selection-example.ts",
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
