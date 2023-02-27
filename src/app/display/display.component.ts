import { Component, Input,ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css'],
  encapsulation:ViewEncapsulation.Emulated
})
export class DisplayComponent {
   @Input('customName') person!:{name:string,role:string}

}
