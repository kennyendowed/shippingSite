import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.css']
})
export class AuthPageComponent implements OnInit {
  form: any;
  constructor( private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.form = this.route.snapshot['_routerState']['url'].replace("/", '');
  console.log(this.form)
  }

}
