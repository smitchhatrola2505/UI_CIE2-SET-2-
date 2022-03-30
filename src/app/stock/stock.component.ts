import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  constructor() { }
  p: any;
  stocks = [
    { name: "Rice", qty: 50 },
    { name: "Wheat", qty: 100 },
    { name: "Gram", qty: 60 },
    { name: "Daal", qty: 40 },
    { name: "Bajara", qty: 70 },
    { name: "Corn", qty: 20 },
  ]



  ngOnInit(): void {

  }

}
