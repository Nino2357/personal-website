import { AfterViewInit, Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger("myAnimationTrigger", [
      state('shown', style({
        transform: 'translateY(0%)'})
      ), state('hidden', style({
        transform: 'translateY(100%)', display:'none', opacity: 0})
      ), transition('shown => hidden', [
        animate('0.5s')
      ]),
    ])
  ]
})
export class AppComponent implements AfterViewInit{
  title = 'personalWebsite';
  
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('fr');
  }

  state = 'shown';

  ngAfterViewInit() {
   setTimeout( () => {
   this.state = 'hidden';
   }, 200);
 }
}
