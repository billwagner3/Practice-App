import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class KeysService {

  result: any
  
  constructor(private _http: Http) {}
  
  getKeys(typeKey) {
    
      return this._http.get(`/api/keys/:key${typeKey}`)
         .map(result => this.result = result.json().data);
    
  }

   
}