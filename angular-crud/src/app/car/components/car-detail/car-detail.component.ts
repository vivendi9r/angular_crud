import { Component, OnInit, Input } from "@angular/core";
import { CarService } from "../../service/car.service";
import { Car } from "../../model/car";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: "app-car-detail",
  templateUrl: "./car-detail.component.html",
  styleUrls: ["./car-detail.component.scss"]
})
export class CarDetailComponent implements OnInit {
  constructor(private _carService: CarService, private route: ActivatedRoute, private router: Router) {}
  public id: number;
  public car: Car;

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params["id"];
      this._carService.getCar(this.id).subscribe(model => {
        this.car = model;
      });
    });
  }

  back() {
    this.router.navigate(['']);

  }
  // displayedColumns: string[] = ["id", "name", "model", "year", ""];
}
