import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'litse',
  templateUrl: './minmax.component.html',
  styleUrls: ['./minmax.component.css']
})
export class MinmaxComponent implements OnInit {
  // This is the minimum number this is where I call and put the Input property
  @Input('min') min = 0;
  // This is the maximum number this is where I call and put the Input property
  @Input('max') max = 9999;
  // This is the minmax value this where the value that can be seen on the html 
  // In this code It will generate random number from the min to max
  minmax = Math.floor(Math.random()*(this.max-this.min+1)+this.min);

  constructor() {  }

  ngOnInit() {
  }
  // This is the click or onClick happen this will change the value of minmax or the number that is choosen
  // between the min and max values.
  onClick() {

  this.minmax = Math.floor(Math.random()*(this.max-this.min+1)+this.min);
  
}

}
