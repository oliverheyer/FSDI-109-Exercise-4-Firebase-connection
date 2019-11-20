import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { Post } from '../models/post';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
 postsToShow: Post[] = [];
constructor(private data : DataService) {

  this.data.getAllPosts().subscribe(res =>{
    this.postsToShow = []; // clear the data

    this.postsToShow = res;
    console.log("Event occured");
      
  });
    
  }



}
