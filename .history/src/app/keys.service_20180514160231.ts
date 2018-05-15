import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import * as _ from 'lodash';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class KeysService {

  result: any

  constructor(private _http: HttpClient) {}
  
  getKeys(typeKey) {
      
    return this._http.get(`api/keys/${typeKey}`).do(console.log)
          .map(result => _.values(result));
      }
    }