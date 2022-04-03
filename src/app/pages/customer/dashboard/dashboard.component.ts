import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'selector-dashboard',
    templateUrl: 'dashboard.component.html'
})

export class DashboardComponent implements OnInit {
    form: any;
  constructor( private route: ActivatedRoute) { }

    ngOnInit() :void { 
        this.form = this.route.snapshot['_routerState']['url'].replace("/", '');
        console.log(this.form)
    }
}