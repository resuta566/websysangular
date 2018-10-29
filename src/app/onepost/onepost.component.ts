import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-onepost',
  templateUrl: './onepost.component.html',
  styleUrls: ['./onepost.component.css']
})
export class OnepostComponent implements OnInit {

  response: any;
  id:number;
  constructor(
    private route: ActivatedRoute,
    private service:PostsService
    ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(rt => {
      this.id = +rt.get('id');
    });

    this.service.getOne(this.id).subscribe(r =>{
      this.response = r.json();
      // console.log(r);
    })
  }

}
