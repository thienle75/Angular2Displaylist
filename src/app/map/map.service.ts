import { Injectable, Inject } from '@angular/core';
import { MAP_LIST } from './map.data';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { APP_CONFIG, IAppConfig } from '../app.config';
import { environment } from '../../environments/environment';


@Injectable()
export class MapService {

  
  constructor(private http: Http) { 
     console.log('Production='+ environment.production);

  }

  getMapItems(){
    	return MAP_LIST;
  } 

  getMapitemsbyId(id): Observable<any>{

    	 return this.http.get(environment.baseUrl +'/'+id)
    	 .map(response => response.json())
    	 .catch(this.handleError);
  }

  getMapForecast(): Observable<any[]>{

     return this.http.get(environment.baseUrl)
     .map(response => this.extractData(response))
     .catch(this.handleError);
  }

  private extractData(res: any) {
    let body = res.json();
    return body.list || { };
  }

  private handleError (error: any) {
    let errMsg: string;
      errMsg = error.message ? error.message : error.toString();
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}