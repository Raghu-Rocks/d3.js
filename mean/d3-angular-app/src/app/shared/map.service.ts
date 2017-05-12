import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MapService {
  private url = 'http://localhost:3000/';
  private socket;

  constructor (private _http: Http) { }

  getUsaMapData(): Observable<any> {
    return this._http.get(this.url+"mapUsaData")
      .map(this.extractData)
      .catch(this.handleError);
  }

  getInMapData(): Observable<any> {
    return this._http.get(this.url+"mapInData")
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || {};
  }

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Promise.reject(errMsg);
  }
}
