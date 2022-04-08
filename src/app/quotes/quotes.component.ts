import { Component, OnInit } from '@angular/core';
import { Quote } from '../qoute';
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  public quotes: Quote[] =[
    new Quote(1, 'First Quote', 1, 0),
    new Quote(2, 'Second Quote', 3, 0),
    new Quote(3, 'Third Quote', 0, 0)
    
  ]
  arr: number[] = this.quotes.map(quote=>quote.upvotes)
  highest = Math.max(...this.arr)
  

  constructor() { }

  ngOnInit(): void {
  }

}
