import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pet } from '../model/pet.model';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  constructor( private http: HttpClient) {}

  create(pet: Pet){
    return this.http.post<Pet>(`${environment.api}/pet`, pet)
  }

  getAll(){
    return this.http.get<any[]>(`${environment.api}/pet?page=${0}&size=${10}`, )
  }

  delete(id:number){
    return this.http.delete(`${environment.api}/pet/${id}`)
  }
  getCountPet(){
    return this.http.get<number>(`${environment.api}/pet/count`)
  }
  getBreed(){
    return this.http.get<number>(`${environment.api}/breed`)
  }
}
