import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bases-donnees',
  templateUrl: './bases-donnees.component.html',
  styleUrls: ['./bases-donnees.component.scss']
})
export class BasesDonneesComponent implements OnInit {



  othersLinks: any[] = [

    "https://sql.sh/cours/",
    "http://sql.bdpedia.fr/plsql.html",
    "https://www.academia.edu/38509465/Cours_de_PL_SQL_ETS",
    "https://ramkedem.com/en/oracle-string-concatenation/",
    "https://docs.oracle.com/cd/B19306_01/server.102/b14200/operators003.htm",
    "https://www.essentialsql.com/sql-tutorial/sql-subquery-tutorial/",
    "https://www.essentialsql.com/get-ready-to-learn-sql-server-22-using-subqueries-in-the-from-clause/",
    "https://www.sqlshack.com/a-step-by-step-walkthrough-of-sql-inner-join/",
    "https://www.geeksengine.com/database/subquery/",

  ];



  plsqlLinks: any[] = [

    "https://sheikyerbouti.developpez.com/pl_sql/",
    "https://sheikyerbouti.developpez.com/pl_sql/#L0",
    "https://oracle.developpez.com/cours/",
    "https://sql.developpez.com/",
    "https://waytolearnx.com/2018/09/difference-entre-vue-et-vue-materialisee.html",
    "https://waytolearnx.com/2018/09/difference-entre-group-by-et-order-by.html",
    "https://dba.stackexchange.com/questions/118138/how-to-call-a-stored-procedure-in-an-oracle-scheduler-job",
    "https://www.oracletutorial.com/oracle-basics/oracle-alter-table-modify-column/",
    "https://www.oracletutorial.com/oracle-basics/oracle-alter-table-modify-column/",
    "https://www.oracletutorial.com/oracle-basics/oracle-varchar2/",
    "https://stackoverflow.com/questions/11531785/how-to-query-group-by-month-in-a-year/11532489",
    "https://stackoverflow.com/questions/5964094/sql-group-by-year",
    "https://stackoverflow.com/questions/16871367/java-text-parseexception-unparseable-date",
    "https://www.oracletutorial.com/oracle-date-functions/",

    "https://waytolearnx.com/2018/09/difference-entre-vue-et-vue-materialisee.html      "]


  constructor() { }

  ngOnInit(): void {
  }

}
