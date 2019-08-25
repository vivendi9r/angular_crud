import { Injectable } from '@angular/core';
import { Car } from '../model/car';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
const PATH = 'http://localhost:3000/cars';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  public getCars(): Observable<Car []> {
    return this.http.get<Car []>(PATH);
  }

  public updateCar(car: Car) {
    return this.http.put(PATH, car);
  }
  public addCar(car: Car): Observable<Car> {
    return this.http.post<Car>(PATH, car);
  }

  public getCar(id: number): Observable<Car > {
    return this.http.get<Car>(`${PATH}/${id}`);
  }

  public deleteCar(id: number)  {
    return this.http.delete(`${PATH}/${id}`);
  }
  constructor(private http: HttpClient) { }

}
