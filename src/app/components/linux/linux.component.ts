import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-linux',
  templateUrl: './linux.component.html',
  styleUrls: ['./linux.component.scss']
})
export class LinuxComponent implements OnInit {


  linuxLinks: any[] = [
    "https://www.tutoriels-video.fr/category/ubuntu/ubuntu-tutoriel-video/",
    "https://crontab.guru/",
    "https://doc.ubuntu-fr.org/tutoriel/script_shell",
    "http://www.funix.org/fr/unix/",
    "http://www.funix.org/fr/linuxdoc/download.htm",
    "https://doc.ubuntu-fr.org/tutoriel/script_shell",
    "https://bash.cyberciti.biz/guide/Main_Page",

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
