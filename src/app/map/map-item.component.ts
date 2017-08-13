import { Component, Input } from '@angular/core';
import { Map } from './map';

@Component({
	selector: 'map-item',
  templateUrl: './map-item.component.html'        
})
export class MapItemComponent {
    @Input('MapItem') map: Map;

}