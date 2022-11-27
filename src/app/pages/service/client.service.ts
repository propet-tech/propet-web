import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Client } from "../model/client.model";
import { Page } from "../model/page.model";

@Injectable({
    providedIn: 'root'
})
export class ClientService {

    constructor(
        private http: HttpClient
    ) {}

    public getAll(params?: Params): Observable<Page<Client>> {
        let httpParams = new HttpParams();

        if (params)
            Object.entries(params).forEach(
                ([key, value]) => {
                    httpParams.set(key, value)
                }
            );

        return this.http.get<Page<Client>>(`${environment.api}/client`, {params: httpParams});
    }   
}

export interface Params {
    size?: number,
    page?: number
}

