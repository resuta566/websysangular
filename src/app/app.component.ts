import { Component } from '@angular/core';
import { Title }     from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public constructor(private titleService: Title ) {
    //Title of the Page
    this.titleService.setTitle( "James Yeonwoolander" );
   }
   address = "SA EARTH! Specifically South Korea dool sa MLD Ent.";
  
   random = "This is a test sentence and Yeonwoo is the most beautiful girl that you'll ever see. Sadly, she is not for you.";
   rating = '5';
   peste = "YAWA OI LETSE!";
   name = "Aubrey";
   name2 = "GAGO";

   max = 100;
   min = 0;
   gago = Math.floor(Math.random()*(this.max-this.min+1)+this.min);
   //This is where I define the Value of the max or min value. This is use in the app file.
   

  //  This code will show on the console on Browsers. This is where the value of the dollar show.
  onChange(eventArgs) {
    //This is the text that will show on th cons
    console.log('The dollar value is ', eventArgs);
  }
}
