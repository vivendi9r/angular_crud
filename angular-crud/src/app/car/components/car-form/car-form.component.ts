import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CarService } from '../../service/car.service';
import { Car } from '../../model/car';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.scss']
})
export class CarFormComponent implements OnInit {
  @Input() car: Car;
  @Output() carListChanged = new EventEmitter<Car>();

  carForm: FormGroup;
  constructor(private fb: FormBuilder, private _carService: CarService) { }
  public onSubmit() {
    if (this.carForm.valid && this.carForm.dirty) {
      this._carService.addCar({name: this.carForm.value.name}).subscribe(x => {
        this.carListChanged.emit(x); });
    }
  }
  ngOnInit() {

    this.carForm =  this.fb.group({
      name: ['' , Validators.required]
    });

  }

}
