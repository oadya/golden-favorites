import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-link',
  templateUrl: './angular-link.component.html',
  styleUrls: ['./angular-link.component.scss']
})
export class AngularLinkComponent implements OnInit {


  tableLinks: any[] = [

    "https://stackblitz.com/edit/table-like-mat-accordion?file=app%2Fapp.component.html",
    "https://www.codeply.com/go/C2xLLWAQ6U/bootstrap-angular-table-accordion",
    "https://www.freakyjolly.com/expand-collapse-single-or-multiple-rows-in-angular-98-material-table-multiple-single/#.X-pglNhKjIU",
    "https://medium.com/@jchavez1894/tables-with-dynamic-data-using-angular-and-material-4dbbfa552083",
    "https://stackblitz.com/edit/angular-material-table-multiple-header-rows?file=app%2Ftable-basic-example.html",
    "https://code-maze.com/angular-material-table/",
    "https://code-maze.com/angular-material-error-details-pages/",
    "https://code-maze.com/angular-material-form-validation/",
    "https://code-maze.com/get-started-angular-material/",
    "https://code-maze.com/angular-material-navigation/",
    "https://stackblitz.com/edit/angular-material-table-multiple-header-rows?file=app%2Ftable-basic-example.html",
    "https://careydevelopment.us/blog/how-to-display-sort-and-paginate-data-in-an-angular-material-table",
    "https://medium.com/angular-in-depth/angular-material-pagination-datasource-73080d3457fe",
    "https://medium.com/nerd-for-tech/how-to-sort-table-rows-according-column-in-angular-9-b04fdafb4140",
    "https://stackblitz.com/edit/angular-6-sort-array-of-object-by-date?file=src%2Fapp%2Fdynamicform%2Fdynamicform.component.css",
  ];

  stepperLinks: any[] = [
    "https://indepth.dev/posts/1284/building-a-custom-stepper-using-angular-cdk",
    "https://stackblitz.com/edit/angular-custom-stepper?file=src%2Fapp%2Fapp.component.html",
    "https://stackblitz.com/edit/angular-custom-stepper-evgpmg?file=src%2Fapp%2Fapp.component.html",
    "https://www.npmjs.com/package/ng-wizard",
    "https://cmdap.github.io/ng-wizard/#/personal",
    "https://github.com/cmdap/ng-wizard",
    "https://angularscript.com/wizard-stepper-component/",
    "https://www.skypack.dev/view/ng-wizard-component?from=pika",


  ];


  uploadAndDownloadLinks: any[] = [

    "https://github.com/fknop/angular-pipes/blob/master/src/aggregate/group-by.pipe.ts",
    "https://www.ahmedbouchefra.com/angular-tutorial-example-upload-files-with-formdata-httpclient-rxjs-and-material-progressbar/",
    "https://www.geeksforgeeks.org/angular-file-upload/",
    "https://malcoded.com/posts/angular-file-upload-component-with-express/",
    "https://blog.jscrambler.com/implementing-file-upload-using-node-and-angular/",
    "https://bezkoder.com/angular-10-file-upload/",
    "https://bezkoder.com/angular-multiple-files-upload/",
    "https://stackblitz.com/edit/angular-file-upload",
    "https://stackoverflow.com/questions/53536826/angular-how-to-add-remove-files-in-the-angular",
    "https://roytuts.com/download-file-from-server-using-angular/",
    "https://stackoverflow.com/questions/51952190/how-can-i-download-file-using-angular-5/51952418",
    "https://www.freakyjolly.com/angular-7-8-9-download-pdf-files-in-browser-instead-of-opening-in-new-tab-quick-solution/#.X_tkxthKjIU",
    "https://stackoverflow.com/questions/51952190/how-can-i-download-file-using-angular-5/51952418",


  ];

  menuLinks: any[] = [

    "https://angularscript.com/category/menu-navigation/",
    "https://plugins.codershood.info/#/plugins/ngmm-plugin",
    "https://www.angularjswiki.com/material/menu/",
    "https://www.techiediaries.com/angular-material-navigation-toolbar-sidenav/",
    "https://code-maze.com/angular-material-navigation/",
    "https://www.telerik.com/kendo-angular-ui/components/menus/menu/",
    "https://www.techiediaries.com/angular-material-navigation-toolbar-sidenav/",
    "https://stackblitz.com/edit/example-angular-material-toolbar-menu?file=app%2Fapp.component.html",
    "https://careydevelopment.us/blog/how-to-add-a-responsive-sidebar-navigation-menu-to-your-angular-app",
    "https://mdbootstrap.com/docs/angular/navigation/navbar/",
    "https://stackblitz.com/edit/angular-breadcrumb-demo?file=app%2Fapp.component.ts",
  ];

  datepickerLinks: any[] = [
    "https://appdividend.com/2018/09/16/angular-datepicker-example-tutorial/",
    "https://www.concretepage.com/angular-material/angular-material-datepicker-format",
    "https://itnext.io/choosing-a-highly-scalable-folder-structure-in-angular-d987de65ec7",
    "https://www.techiediaries.com/angular-tutorial-basics/",
    "https://www.techiediaries.com/angular-course/",
    "https://appdividend.com/2019/06/04/angular-8-tutorial-with-example-learn-angular-8-crud-from-scratch/",
    "https://github.com/akveo/ng2-smart-table",
    "https://www.freakyjolly.com/angular-material-datepicker-change-format-of-selected-date/#.YG1gUK8zbcc",
    "https://www.concretepage.com/angular-material/angular-material-datepicker-validation",
    "https://www.angularjswiki.com/material/datepicker/",
    "https://www.freakyjolly.com/angular-material-109-datepicker-range-selection-from-to-dates-with-validation/#.YBb-8uhKjIU",
  ];

  paginationLinks: any[] = [
    "https://www.freakyjolly.com/angular-pagination-example-using-ngx-pagination/#.X9oV7thKjIU",
    "https://www.positronx.io/angular-server-side-pagination-with-ngx-pagination-example/",
    "https://bezkoder.com/ngx-pagination-angular-8/",
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


  formLinks: any[] = [
    "https://ultimatecourses.com/blog/angular-2-form-controls-patch-value-set-value",
    "https://medium.com/@tomaszsochacki/how-to-do-asynchronous-validator-in-angular-7-6e80243a874a",
    "https://material.angular.io/components/form-field/examples",
    "https://www.tektutorialshub.com/angular/angular-child-routes-nested-routes/",
    "https://indepth.dev/posts/1311/the-update-on-option-in-angular-forms",
    "https://fiyazhasan.me/angular-forms-validation-updateon-blur/",
    "https://indepth.dev/posts/1311/the-update-on-option-in-angular-forms",
  ];

  stackblitzLinks: any[] = [

    "https://stackblitz.com/edit/angular6-phone-mask?file=app%2Fphone-mask.directive.ts",
    "https://stackblitz.com/edit/angular-pipe-groupby?file=src%2Fapp%2Fapp.component.html",
    "https://stackblitz.com/edit/angular-groupby?file=src%2Fstyles.css",
    "https://stackblitz.com/edit/angular-6-sort-array-of-object-by-date?file=src%2Fapp%2Fdynamicform%2Fdynamicform.component.css",
    "https://stackblitz.com/edit/ng-autonumeric?file=package.json",
    "https://stackblitz.com/edit/ng-autonumeric?file=src%2Fapp%2Fapp.component.html",
    "https://stackblitz.com/edit/autonumeric",
    "https://stackblitz.com/edit/angular-ivy-qkjohr?file=src%2Fapp%2Fapp.component.html",
    "https://stackblitz.com/edit/angular-custom-stepper?file=src%2Fapp%2Fapp.component.html",
    "https://stackblitz.com/edit/angular-custom-stepper-evgpmg?file=src%2Fapp%2Fapp.component.html",
    "https://stackblitz.com/edit/angular-material-table-multiple-header-rows?file=app%2Ftable-basic-example.html",
    "https://stackblitz.com/edit/table-like-mat-accordion?file=app%2Fapp.component.html",
    "https://stackblitz.com/edit/angular-material-table-multiple-header-rows?file=app%2Ftable-basic-example.html",
    "https://stackblitz.com/edit/angular-material-table-multiple-header-rows?file=app%2Ftable-basic-example.html",
    "https://stackblitz.com/edit/angular-breadcrumb-demo?file=app%2Fapp.component.ts",
    "https://stackblitz.com/edit/example-angular-material-toolbar-menu?file=app%2Fapp.component.html",
    "https://stackblitz.com/edit/angular-ivy-qkjohr?file=src%2Fapp%2Fapp.component.ts"
  ];


  agularRxjsLinks: any[] = [

    "https://makina-corpus.com/blog/metier/2017/premiers-pas-avec-rxjs-dans-angular",
    "https://blog.angular-university.io/rxjs-higher-order-mapping/",
    "https://makina-corpus.com/blog/metier/2017/premiers-pas-avec-rxjs-dans-angular",
    "https://www.learnrxjs.io/learn-rxjs/operators/combination/forkjoin",
    "https://blog.thoughtram.io/angular/2018/03/05/advanced-caching-with-rxjs.html",
    "https://www.npmjs.com/package/ngx-file-drop",
    "https://makina-corpus.com/blog/metier/2017/premiers-pas-avec-rxjs-dans-angular",
    "https://jasonwatmore.com/post/2019/02/07/angular-7-communicating-between-components-with-observable-subject",
    "https://makina-corpus.com/blog/metier/2017/premiers-pas-avec-rxjs-dans-angular",
    "https://rxjs.dev/api/operators/flatMap",
    "https://www.learnrxjs.io/learn-rxjs/operators/filtering/take"
  ];



  routerParametersLinks: any[] = [
    "https://makina-corpus.com/blog/metier/2018/routing-angular-optimisez-le-rendu-au-changement-de-page",
    "https://www.techiediaries.com/angular/angular-9-8-router-tutorial-learn-routing-and-navigation-by-example/",
    "https://www.tektutorialshub.com/angular/angular-pass-url-parameters-query-strings/",
    "https://medium.com/better-programming/angular-6-url-parameters-860db789db85",
    "https://www.digitalocean.com/community/tutorials/angular-query-parameters-fr",
    "https://www.tektutorialshub.com/angular/angular-passing-parameters-to-route/",
    "https://www.digitalocean.com/community/tutorials/angular-query-parameters-frv",
    "https://www.tektutorialshub.com/angular/routerlinkactive-router-outlet-styling/",
    "https://www.ganatan.com/tutorials/routing-with-angular",
    "https://codecraft.tv/courses/angular/routing/nested-routes/",
    "https://guide-angular.wishtack.io/angular/routing/route-guards",
    "https://www.tektutorialshub.com/angular/routerlinkactive-router-outlet-styling/",
    "https://stackoverflow.com/questions/43698032/angular-how-to-update-queryparams-without-changing-route",
    "https://stackblitz.com/edit/angular-ivy-qkjohr?file=src%2Fapp%2Fapp.component.html",
    "https://stackoverflow.com/questions/35431188/how-can-i-conditionally-disable-the-routerlink-attribute/41081981",
    "https://stackblitz.com/edit/dynamic-routes-lazy-loaded?file=app%2Fclasses%2Fdynamic-path.ts",
  ];
  
  directivePipeLinks: any[] = [

    "https://medium.com/@Mdmoin07/sort-pipe-in-angular-6-7-f22475cc4054",
    "https://www.freakyjolly.com/angular-add-star-asterisk-sign-to-required-fields-using-custom-directive-for-bootstrap-form/#.YAlbEOhKjcc",
    "https://ultimatecourses.com/blog/angular-ngfor-template-element",
    "https://grokonez.com/frontend/angular/angular-6/angular-6-ngfor-repeater-directive-loop-over-a-collection",
    "https://medium.com/ng-consultant/custom-input-formatting-with-simple-directives-for-angular-2-ec792082976",
    "https://www.learnrxjs.io/learn-rxjs/operators/transformation/groupby",
    "https://stackblitz.com/edit/angular-pipe-groupby?file=src%2Fapp%2Fapp.component.html",
    "https://stackblitz.com/edit/angular-groupby?file=src%2Fstyles.css",

  ];

  currencyLinks: any[] = [
    "https://www.npmjs.com/package/ngx-currency",
    "https://www.npmjs.com/package/ng2-currency-mask",
    "https://stackblitz.com/edit/ng-autonumeric?file=package.json",
    "https://stackblitz.com/edit/ng-autonumeric?file=src%2Fapp%2Fapp.component.html",
    "https://stackblitz.com/edit/autonumeric",
    "https://github.com/angularfy/autonumeric/releases/tag/1.0.1",

  ];


  pdfViewerLinks: any[] = [
    "https://www.npmjs.com/package/ng2-pdf-viewer",
    "https://www.npmjs.com/package/ngx-extended-pdf-viewer",
    "https://pdfviewer.net/extended-pdf-viewer/getting-started",
    "https://www.beyondjava.net/ngx-extended-pdf-viewer",
    "https://www.npmjs.com/package/ngx-doc-viewer",
    "https://openbase.io/categories/js/best-angular-pdf-viewer-libraries?orderBy=RECOMMENDED&",
  ];

  othersLinks: any[] = [
"https://github.com/oadya/Javascript-Arrays/blob/main/array.js",
    "https://medium.com/@tarekabdelkhalek/how-to-create-a-drag-and-drop-file-uploading-in-angular-78d9eba0b854",
    "https://medium.com/@mariemchabeni/angular-7-drag-and-drop-simple-file-uploadin-in-less-than-5-minutes-d57eb010c0dc",
    "https://www.techtrek.io/Adding-a-Scroll-to-Top-button-in-Angular/",
    "https://www.tutorialsteacher.com/typescript/typescript-switch",
    "https://alligator.io/angular/",
    "https://app.quicktype.io/",
    "https://developer.okta.com/blog/2019/05/13/angular-8-spring-boot-2",
    "https://dzone.com/articles/building-a-web-app-using-spring-boot-angular-6-and",
    "https://github.com/FraktonDevelopers/spring-boot-angular-maven-build",
    "https://vorozco.com/blog/2019/2019-09-11-Packagin-Angular-8-Apps-War.html",
    "https://www.angularjswiki.com/angular/how-to-use-font-awesome-icons-in-angular-applications/",
    "https://www.npmjs.com/package/@fortawesome/angular-fontawesome",
    "https://stackblitz.com/edit/angular6-phone-mask?file=app%2Fphone-mask.directive.ts",
    "https://stackoverflow.com/questions/44234290/how-to-display-using-displaywith-in-autocomplete-material2",
    "https://www.digitalocean.com/community/tutorials/angular-testing-with-spies",
    "https://www.npmjs.com/package/ngx-spinner",
    "https://material.angular.io/components/snack-bar/examples",
    "https://www.npmjs.com/package/ngx-toastr",
    "https://www.freakyjolly.com/angular-material-modal-popup-example/#.X2HC6Ggzbcd",
    "https://dev.to/maurogarcia_19/client-side-caching-with-angular-2i6l",
    "https://www.codeandweb.com/babeledit/tutorials/how-to-translate-your-angular8-app-with-ngx-translate",
    "https://itnext.io/building-a-reusable-dialog-module-with-angular-material-4ce406117918",
    "https://stackoverflow.com/questions/40595276/angular2-material-dialog-css-dialog-size",
    "https://ultimatecourses.com/blog/ng-class-angular-classes",
    "https://codecraft.tv/courses/angular/built-in-directives/ngstyle-and-ngclass/",
    "https://malcoded.com/posts/angular-ngclass/",
    "https://www.digitalocean.com/community/tutorials/angular-component-communication",
    "https://indepth.dev/posts/1191/stop-using-shared-material-module",
    "https://www.freecodecamp.org/news/everything-you-need-to-know-about-ng-template-ng-content-ng-container-and-ngtemplateoutlet-4b7b51223691/",
    "https://www.tektutorialshub.com/angular/angular-http-error-handling/",
    "https://ultimatecourses.com/blog/angular-ngif-else-then",
    "https://stackoverflow.com/questions/40176061/two-switch-case-values-in-angular",
    "https://www.tektutorialshub.com/angular/angular-catcherror/",
    "https://dev.to/rafaelbernard/environment-variables-in-angular-1f1i",
    "https://www.tektutorialshub.com/angular/angular-environment-variables/",
    "https://www.freakyjolly.com/angular-8-add-hover-text-tooltip-module-without-any-dependency-in-angular-web-application/",
    "https://github.com/Ismaestro/ngx-scroll-to-first-invalid",
    "https://stackoverflow.com/questions/40595276/angular2-material-dialog-css-dialog-size",
    "npm install @fortawesome/angular-fontawesome @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons",
    "https://www.digitalocean.com/community/tutorials/angular-custom-svg-icons-angular-material",
    "https://stackoverflow.com/questions/8499633/how-to-display-base64-images-in-html",
    "https://en.wikipedia.org/wiki/Data_URI_scheme#Syntax",
    "https://stackoverflow.com/questions/45226354/conditionally-make-input-field-readonly-in-angular-2-or-4-advice-best-which-w",
    "https://stackoverflow.com/questions/9011524/regex-to-check-whether-a-string-contains-only-numbers",
    "https://medium.com/bb-tutorials-and-thoughts/retaining-state-of-the-angular-app-when-page-refresh-with-ngrx-6c486d3012a9",
    "https://stackoverflow.com/questions/50945978/how-to-get-checkbox-value-in-angular",
    "https://stackoverflow.com/questions/1026069/how-do-i-make-the-first-letter-of-a-string-uppercase-in-javascript",
    "https://stackoverflow.com/questions/222309/calculate-last-day-of-month",
    "https://stackoverflow.com/questions/12856279/border-around-li-tag/12856314",
    "https://stackoverflow.com/questions/12723339/utf-8-encoding-in-jsp-page/12723499",
    "https://www.ambient-it.net/les-10-nouveautes-angular-6/",
    "https://formationjavascript.com/retro-compatibilite-angular/",

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
    "https://stackoverflow.com/questions/44234290/how-to-display-using-displaywith-in-autocomplete-material2",
  ];




  constructor() { }

  ngOnInit(): void {
  }

}
