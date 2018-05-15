import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { HttpParams } from '@angular/common/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class KeysService {

  result: any

  constructor(private _http: HttpParams) {}
  
  getKeys(typeKey) {
      
    return this._http.get(`api/keys/${typeKey}`)
          .map(result => this.result = result.json().data);
      }
    }