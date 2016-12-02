import { Injectable } from '@angular/core';

import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Physiological, PatientInfo }    from './physiological';
import { Url }  from './url';

import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/take';
import 'rxjs/add/observable/throw';

@Injectable()
export class GetPhysiologicalInfoService {
    private url = new Url();
    constructor(
      private http: Http
    ) {  }

    getUserList(): Observable<any> {
        // post rest api
        let headers = new Headers({ 'Content-Type': 'application/json', 'Accept': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(
                this.url.userListUrl,
                '',
                options
            )
            .map(
                (res: Response) => res.json()
            ).catch(this.handleError);
    }

    getUserInfo(id: number): Observable<PatientInfo> {
        if ( id ) {
            // post rest api
            let headers = new Headers({
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            });
            let options = new RequestOptions({ headers: headers });
            return this.http.post(
                this.url.userDataUrl,
                {'id': id},
                options
            )
            .map(
                (res: Response) => res.json()
            )
            .catch(this.handleError);
        } else {
            return null;
        }
    }

    getUserPhyInfo(id: number): Observable<Physiological> {
        if ( id ) {
            // post rest api
            let headers = new Headers({
                 'Content-Type': 'application/json',
                 'Accept': 'application/json'
            });
            let options = new RequestOptions({ headers: headers });
            return Observable.interval(3000).concatMap(
                () => this.http.post(
                    this.url.phyDataUrl,
                    {'id': id},
                    options
                ).map(
                    (res: Response) => res.json()
                )
            .catch(this.handleError)
        );
        } else {
            return null;
        }
    }

    private handleError (error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

}
