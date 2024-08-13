import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { VEHICLES } from './mock/vehicle.constants';
import { VehicleModel } from '../../../shared/models/vehicle.model';


@Injectable({
  providedIn: 'root',
})
export class VehicleService {
  constructor() {}

  public getVehicles(): Observable<VehicleModel[]> {
    return of(VEHICLES);
  }
}
