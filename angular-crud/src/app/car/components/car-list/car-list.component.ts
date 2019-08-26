import { Component, OnInit } from '@angular/core';
import { CarService } from '../../service/car.service';
import { Car } from '../../model/car';
import { Router } from '@angular/router';


@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent implements OnInit {

  constructor(private _carService: CarService,  private router: Router) { }

  public cars: Car[];
  public editing: boolean = false;
  // public adding: boolean = false;
  ngOnInit() {
    this._carService.getCars().subscribe(model => {
      this.cars = model;
    });
  }

  onEdit(car: Car) {
    this.editing = !this.editing;
  }

  onRemove(id: number) {
    this._carService.deleteCar(id).subscribe(model=> this.cars = this.cars.filter(x => x.id != id));

 }

 onAdd() {
  this.editing = !this.editing;
}

onDetail(id: number) {
  this.router.navigate(['', id]);
}

public changedCarList(car: Car) {
  this.cars = [ ...this.cars, car];

}

  displayedColumns: string[] = ['name', 'model', 'year', 'action'];
}
