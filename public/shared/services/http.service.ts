import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';

@Injectable()
export class HttpService {

  constructor(private _http: Http) { }

  getAllStats(type: String) {
		var path = 'http://localhost:8000/api/' + type;

    return this._http.get(path)
    					 .map(res => res.json());
  }
}
