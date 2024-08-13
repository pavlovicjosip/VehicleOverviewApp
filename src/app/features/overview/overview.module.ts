import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ButtonModule } from 'primeng/button';
import { OverviewComponent } from './overview.component';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [OverviewComponent],
  imports: [
    BrowserModule,
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    CardModule,
  ],
  exports: [OverviewComponent],
  providers: [],
})
export class OverviewModule {}
