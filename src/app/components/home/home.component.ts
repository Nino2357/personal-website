import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  downloadResume() {
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'https://drive.google.com/file/d/1EarIwQIoPbbNkO4rHBjR9W_h_rYXqlVR/view?usp=sharing');
    link.setAttribute('download', `CV Nino Delien.pdf`);
    document.body.appendChild(link);
    link.click();
    link.remove();
  }
}
