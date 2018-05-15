import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/Rx';

import { KeysService } from './keys.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'The Scale Certainty Application';
  


  
  
  constructor(private keysService: KeysService) {
  }

  typeKey: '';
  dataPassed = false;
  test: '';
  

  getKeyClass(typeKey) {
    if (this.test !== null) {
      this.dataPassed = true
    };
    this.keysService.getKeys(typeKey)
      .subscribe(test => {
        this.test = test;
        }       
      );    
    }
  }
