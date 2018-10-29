import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'gago',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  @Input('isFavorite') isFavorite = false;
  constructor() { }

  ngOnInit() {
  }
 
  onClick(){
    this.isFavorite = !this.isFavorite;
  }
}
