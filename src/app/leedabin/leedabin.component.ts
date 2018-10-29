import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {NgModel} from '@angular/forms';
@Component({
  selector: 'leedabin',
  templateUrl: './leedabin.component.html',
  styleUrls: ['./leedabin.component.css']
})
export class LeedabinComponent implements OnInit {
  // This is to set if the circle would be have a bacground color or just the border
  @Input('solid') solid = false;
  // This is the Output parameter and the EventEmitter 
  @Output('rndm') rndm = new EventEmitter;
  //The Max and Min value Input
  @Input('min') min = 0;
  @Input('max') max = 9999;
  //The minmax data
  minmax: number;
  constructor() { }

  ngOnInit() {
  }
  // This is where the real Magic Happen
  onClick() {
    this.solid = !this.solid;
    // Every Click the minmax vale will change base on the min and max value it will choose between them.
    this.minmax = Math.floor(Math.random()*(this.max-this.min+1)+this.min);
    //This is where the EvenEmitter happen
    this.rndm.emit({
      //This is where you see in the console which show the number.
      is: this.minmax,
    });
  }
}
