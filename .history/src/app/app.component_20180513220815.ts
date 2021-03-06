import { Component, OnInit } from '@angular/core';
import { KeysService } from './keys.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Observer } from 'rxjs/Observer';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'The Scale Certainty Application';

  typeKey: '';
  dataPassed = false;
  test: '';
  
  constructor(private keysService: KeysService) {}

  getKeyClass(typeKey) {
    if (this.test !== null) {
      this.dataPassed = true
    };
    this.keysService.getKeys(typeKey)
      .subscribe(test => {
        this.test = test;
        Object.keys(this.test).map(i => this.test[i]);
        this.test = test;
      });
  }
   ngOnInit(){   
   }
 }
