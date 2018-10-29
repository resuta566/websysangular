import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  list =[
    "Appreciate Yeonwoo's existense @ 5:30 AM",
    "Appreciate Yeonwoo's smile @ 5:32 AM",
    "Watch Momoland MV @ 5:45 Am"
  ];
  constructor() { }

  ngOnInit() {
  }

  addTodo(input: HTMLInputElement){
    this.list.push(input.value);
    input.value='';
  }
  
  removeTodo(todo: string){
   const index = this.list.indexOf(todo);
   this.list.splice(index, 1);
  }
}