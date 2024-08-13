import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ButtonModule } from 'primeng/button';
import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [HeaderComponent],
  imports: [BrowserModule, ButtonModule],
  exports: [HeaderComponent],
  providers: [],
})
export class HeaderModule {}
