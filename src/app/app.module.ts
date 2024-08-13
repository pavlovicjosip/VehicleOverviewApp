import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VehicleService } from './core/services/vehicle/vehicle.service';
import { OverviewModule } from './features/overview/overview.module';
import { HeaderModule } from './shared/ui/header/header.module';
import { CardModule } from 'primeng/card';
import { LoginModule } from './features/login/login.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    HeaderModule,
    OverviewModule,
    HttpClientModule,
  ],
  providers: [VehicleService],
  bootstrap: [AppComponent],
})
export class AppModule {}
