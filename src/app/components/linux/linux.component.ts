import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-linux',
  templateUrl: './linux.component.html',
  styleUrls: ['./linux.component.scss']
})
export class LinuxComponent implements OnInit {


  linuxLinks: any[] = [
    "https://doc.ubuntu-fr.org/tutoriel/script_shell",
    "http://www.funix.org/fr/unix/",
    "http://www.funix.org/fr/linuxdoc/download.htm",
    "https://cloudfysh.wordpress.com/2011/03/07/find-and-replace-with-sed-and-find/,",
    "https://doc.ubuntu-fr.org/tutoriel/script_shell",
    "https://bash.cyberciti.biz/guide/Main_Page",
    "http://www.quartz-scheduler.org/documentation/quartz-2.x/tutorials/crontrigger.html",

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
