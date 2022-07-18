import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-global-link',
  templateUrl: './global-link.component.html',
  styleUrls: ['./global-link.component.scss']
})
export class GlobalLinkComponent implements OnInit {


  bestSitesLinks: any[] = [

"https:://www.baeldung.com/",
"https:://dzone.com/",
"https:://www.guru99.com/",
"https:://javarevisited.blogspot.com/",
"https:://www.netjstech.com/",
"https:://www.javaguides.net/",
"https:://www.journaldev.com/",
"https:://howtodoinjava.com/",
"https:://mkyong.com/",
"https:://beginnersbook.com/",
"https:://www.concretepage.com/",
"http://tutorials.jenkov.com/",
"https:://www.codejava.net/all-tutorials",
"https:://www.tutorialspoint.com/i",
"https:://www.petrikainulainen.net/tutorials/",
"https://alligator.io/angular/",
"https://www.vogella.com/tutorials/",
"https://www.javatpoint.com/",
"https://www.geeksforgeeks.org/",
"http://www.java2s.com/",

  ];


  backVideoLinks: any[] = [
"https:://www.youtube.com/c/JavaBrainsChannel/",
"https:://www.youtube.com/c/DefogTech/videos",
"https:://www.youtube.com/c/JavaTechie/videos",
"https:://www.youtube.com/c/KKJavaTutorials/videos",
"https:://www.youtube.com/c/xavki-linux/videos",
"https:://www.youtube.com/c/DailyCodeBuffer/videos",
"https:://www.youtube.com/user/mohamedYoussfi/videos",
  ];



  frontVideoLinks: any[] = [

"https://www.youtube.com/c/EasyTutorialsVideo/videos",
"https://www.youtube.com/c/Freecodecamp/videos",
"https://www.youtube.com/c/Academind/videos",
"https://www.youtube.com/c/WebDevSimplified/videos",
"https://www.youtube.com/kepowob/videos",
"https://www.youtube.com/c/TraversyMedia/videos",
"https://www.youtube.com/c/grafikart/videos",
"https://www.youtube.com/c/FollowAndrew/videos",

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
