import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trade-header',
  templateUrl: './trade-header.component.html',
  styleUrls: ['./trade-header.component.css']
})
export class TradeHeaderComponent implements OnInit {
  public isCollapsed = true;
  constructor() { }

  ngOnInit(): void {
  }

}
