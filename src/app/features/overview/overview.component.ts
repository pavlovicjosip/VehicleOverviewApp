import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {
  BehaviorSubject,
  combineLatest,
  map,
  Observable,
  of,
  startWith,
} from 'rxjs';
import { VehicleService } from '../../core/services/vehicle/vehicle.service';
import { VehicleModel } from '../../shared/models/vehicle.model';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent {
  vehicles$: Observable<VehicleModel[]> = of([]);
  filteredVehicles$: Observable<VehicleModel[]> = of([]);
  filterForm: FormGroup;

  private filterSubject = new BehaviorSubject<string>('');

  constructor(private vehicleService: VehicleService, private fb: FormBuilder) {
    this.filterForm = this.fb.group({
      search: [''],
    });
  }

  ngOnInit(): void {
    this.vehicles$ = this.vehicleService.getVehicles();

    this.filterForm
      .get('search')
      ?.valueChanges.pipe(startWith(''))
      .subscribe(this.filterSubject);

    this.filteredVehicles$ = combineLatest([
      this.vehicles$,
      this.filterSubject.asObservable(),
    ]).pipe(
      map(([vehicles, filterString]) =>
        vehicles.filter((vehicle) => this.matchesFilter(vehicle, filterString))
      )
    );
  }

  private matchesFilter(vehicle: VehicleModel, filterString: string): boolean {
    const filter = filterString.toLowerCase();
    return (
      vehicle.name.toLowerCase().includes(filter) ||
      vehicle.manufacturer.toLowerCase().includes(filter) ||
      vehicle.model.toLowerCase().includes(filter) ||
      vehicle.year.toString().includes(filter) ||
      vehicle.type.toLowerCase().includes(filter) ||
      vehicle.fuelType.toLowerCase().includes(filter) ||
      vehicle.price.toString().includes(filter) ||
      vehicle.licensePlate.toLowerCase().includes(filter)
    );
  }
}
