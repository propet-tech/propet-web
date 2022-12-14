import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Client } from "../model/client.model";
import { Page } from "../model/page.model";
import { Pageable } from "../model/pageable";

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(
    private http: HttpClient
  ) { }

  public getAll(params?: Pageable): Observable<Page<Client>> {
    let httpParams = new HttpParams();

    if (params)
      Object.entries(params).forEach(
        ([key, value]) => {
          httpParams = httpParams.set(key, value)
        }
      );

    return this.http.get<Page<Client>>(`${environment.api}/client`, { params: httpParams });
  }

  getCount(): Observable<number> {
    return this.http.get<number>(`${environment.api}/client/count`)
  }
  createUser(user: any){
      return this.http.post<any>(`${environment.api}/client`, user)
  }
  updateUser(user: any){
    return this.http.put<any>(`${environment.api}/client`, user)
}
  getByID(id: any){
    return this.http.get<any>(`${environment.api}/client/${id}`)
}

  getPetCount(clientId: number) {
    return this.http.get<number>(`${environment.api}/client/${clientId}/pet/count`)
  }

  delete(id: number) {
    return this.http.delete<void>(`${environment.api}/client/${id}`)
  }
}
