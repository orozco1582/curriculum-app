import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GITService {

    constructor(private http: HttpClient) {}

    public getReposByUserID(userID: string): Observable<any> {
        // return this.http.get("https://api.github.com/users/"+ userID +"/repos");
        return new Observable(observable => {
            let repos: Array<any> = [];
            this.http.get("https://api.github.com/users/"+ userID +"/repos").subscribe(
                data => {
                    let dataObj = Object.assign(new Array, data);
                    dataObj.forEach(repo => {
                        repos.push(repo);
                    });
                    observable.next(repos);
                    observable.complete();
                },
                error => {
                    let errorMessage = "Error getting the repos for the User: " + userID;
                    console.warn(errorMessage);
                    observable.error(errorMessage);
                    observable.complete();
                }
            );
        });
    }

}
