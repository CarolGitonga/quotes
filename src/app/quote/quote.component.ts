import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes = [
    new Quote("NM", "Nelson Mandela", "It always seems impossible until it's done."),
    new Quote("Life", "Aristotle", "Happiness depends upon ourselves ")
  ]
    

  addQuote(chosenQuote: Quote) {
    this.quotes.push(chosenQuote)
  }

  upvote(i: number) {
    this.quotes[i].upvotes ++;
  }
  downvote(i: number) {
    this.quotes[i].downvotes  ++;
  }
  delQuote(i: number) {
    this.quotes.splice(i, 1)
  }
  preNum!: number;
  lastNum!: number;
  counter!: number;

  highestUpvote(){
    this.preNum = 0
    this.lastNum = 0

    for(this.counter=0 ; this.counter < this.quotes.length; this.counter++) {
      this.lastNum = this.quotes[this.counter].upvotes;
      if(this.lastNum > this.preNum){this.preNum = this.lastNum}
    }
    return  this.preNum
  }

  constructor() { }

  ngOnInit(): void {
  }

}
