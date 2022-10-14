import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  screenHeight: number = 1200;
  screenWidth: number = 700;

  constructor() {
    this.getScreenSize();
   }

  ngOnInit(): void { 
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?: undefined) {
   this.screenHeight = window.innerHeight;
   this.screenWidth = window.innerWidth;
}

}
