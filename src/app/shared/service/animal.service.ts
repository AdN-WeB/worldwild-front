import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from 'src/environments/environment';
import { Animal } from '../model/animal.model';

@Injectable({
    providedIn: 'root',
  })
export class AnimalService {
    constructor(private http:HttpClient){}

    public postAnimal(formData: FormData):Observable<Animal>{
        return this.http.post<Animal>(environment.apiUrl + "animals",formData);
    }

    public getAnimals(): Observable<Animal[]>{
        return this.http.get<Animal[]> (environment.apiUrl + "animals")
    }

    public updateAnimal(id:number, formData:FormData):Observable<Animal>{
       return this.http.put<Animal>(environment.apiUrl + 'animals/' + id, formData) 
    }

    public getOne(id:number):Observable<Animal>{
        return this.http.get<Animal>(environment.apiUrl + 'animals/' + id)
    }
    public delete(id:number):Observable<any>{
        return this.http.delete<any>(environment.apiUrl + 'animals/' + id)
    }

}