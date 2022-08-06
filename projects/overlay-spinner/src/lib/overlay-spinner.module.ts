import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OverlaySpinnerComponent } from './overlay-spinner.component';

@NgModule({
  declarations: [OverlaySpinnerComponent],
  exports: [OverlaySpinnerComponent],
  imports: [CommonModule],
})
export class OverlaySpinnerModule {}
