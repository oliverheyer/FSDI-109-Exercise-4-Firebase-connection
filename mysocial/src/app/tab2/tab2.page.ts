import { Component } from '@angular/core';

import { DataService } from '../services/data.service';
import { SharedService } from '../shared.service';
import { Post } from '../models/post';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  model = new Post();

  constructor(private data: DataService, private sahred : SharedService) {

  }

  sendPost(){
    //validation
    if (!this.model.message && !this.model.imageUrl) return;

    this.model.createdOn = new Date(); // set this moment on time
    this.model.from = this.sahred.userName;
    this.model.from ="Oliver";
    console.log("Post Saved", this.model);

    // save the onject
    this.data.savePost(this.model);

    // clear new model (clear form)
    this.model = new Post();
  }

}

// 1 - Install on your phone: Ionic DevApp
// 2 - Open it and register for a new account  
