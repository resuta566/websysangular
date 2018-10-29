import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'; 

@Component({
  selector: 'app-merch',
  templateUrl: './merch.component.html',
  styleUrls: ['./merch.component.css']
})
export class MerchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm ) {
    //This is where we push into the array or table what we input in the form
    // this.cpus.push(form.value);
    //This is to reset the Form
    form.reset();
   }

}
