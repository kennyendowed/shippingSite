import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-Tradewelcome',
  templateUrl: './Tradewelcome.component.html',
  styleUrls: ['./Tradewelcome.component.css']
})
export class TradeWelcomeComponent implements OnInit {
  form: any;
  constructor( private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.form = this.route.snapshot['_routerState']['url'].replace("/", '');
    console.log(this.form)
  }

}
