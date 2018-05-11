import { Component, OnInit } from '@angular/core';
import { KeysService } from './keys.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'The Scale Certainty Application';
  typeKey = '';
  keys: Array<any>;

  constructor(private keysService: KeysService) {}

  

  getKeyClass(typeKey) {
    this.keysService.getKeys(typeKey).subscribe(data => this.typeKey = data);
    
  }

  keySpelling = this.getKeyClass(this.typeKey);
    
}
