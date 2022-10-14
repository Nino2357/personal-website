import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  model: any = {};

  constructor(
    private http: HttpClient,
    public snackbar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  onSubmit(name: any, subject: any, email: any, message: any) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.http.post('https://formspree.io/f/myyvpvjq',
      { name: name, subject: subject, replyto: email, message: message },
      { 'headers': headers }).subscribe(
        response => {
          this.snackbar.open('Email sent', '', {
            duration: 3000
          });
        }
      );
  }
}
