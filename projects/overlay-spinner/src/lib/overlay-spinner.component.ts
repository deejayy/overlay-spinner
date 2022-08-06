import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'overlay-spinner',
  templateUrl: './overlay-spinner.component.html',
  styleUrls: ['./overlay-spinner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OverlaySpinnerComponent {
  @Input() public title: string = 'Please wait';
  @Input() public loading: boolean = false;
  @Input() public fullPage: boolean = false;
  @Input() public imagePath: string = '';
}
