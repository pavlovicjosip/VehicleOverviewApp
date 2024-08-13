import { NgModule } from '@angular/core';
import { TrimPipe } from './pipes/trim.pipe';
import { HeaderModule } from './ui/header/header.module';

@NgModule({
  declarations: [TrimPipe],
  imports: [HeaderModule],
  exports: [TrimPipe],
  providers: [],
})
export class SharedModule {}
