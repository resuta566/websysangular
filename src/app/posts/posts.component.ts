import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  response:any;
  constructor(private service: PostsService) { }

  ngOnInit() {
    this.service.getPaginatedPosts().subscribe(r => {
      this.response = r.json();
      // console.log(r);
    })
 }

 changePage(xurl){
   this.service.getPaginatedPosts(xurl).subscribe(r => {
     this.response = r.json();
   })
 }
}
