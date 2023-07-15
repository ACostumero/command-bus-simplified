import { Component, Input } from '@angular/core';
import {IColorResource} from '@app-core/interfaces/color-resource.interface';

@Component({
  selector: 'app-color-resource',
  templateUrl: './color-resource.component.html',
  styleUrls: ['./color-resource.component.scss']
})
export class ColorResourceComponent {

  @Input() resource?: IColorResource;

}
