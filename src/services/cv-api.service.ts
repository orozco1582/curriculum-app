import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CVService {

    constructor(private http: HttpClient) {}

    public getCVInfo(): Observable<any> {
        return this.http.get("https://raw.githubusercontent.com/orozco1582/curriculum-app/master/src/mocks/carlos-orozco-CV.json");
    }

}
