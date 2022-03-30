import { Component, OnInit } from '@angular/core';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private user: PostService) { }

  data: any = [];
 p:any;
  ngOnInit(): void {
    this.user.getData().subscribe(data => {
      this.data = data;
    })
  }
  delete(m: any) {
    this.user.deleted(m).subscribe(response => {
      this.data=this.data.filter((items:any)=>items.id!==m.id);
    });
  }
}
