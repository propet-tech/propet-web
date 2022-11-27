import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Page } from "../model/page.model";
import { Pageable } from "../model/pageable";
import { PetShop } from "../model/petshop.service";

@Injectable({
  providedIn: 'root'
})
export class PetShopService {
  
  constructor(
    private http: HttpClient
  ) {}

  public getAll(pageable?: Pageable) {

    const httpParams = new HttpParams();

    if (pageable)
      Object.entries(pageable).forEach(
        ([key, value]) => {
          httpParams.set(key, value)
        }
      );
    
    return this.http.get<Page<PetShop>>(`${environment.api}\service`, {params: httpParams})
  }

  public update(petshop: PetShop) {
    // return this.http.put<void>(`${}`)
  }

  public create() {

  }

  public getById(id: number) {

  }

  public deleteById() {

  }

  public count() {

  }

  public getActive() {

  }
}
