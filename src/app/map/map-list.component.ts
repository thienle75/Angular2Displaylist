import { Component, OnInit, Input} from '@angular/core';
import { Map } from './Map';
import { MapService } from './map.service';

@Component({
  selector: 'map-list',
  templateUrl: './map-list.component.html',
  styleUrls: ['./map-list.component.css'],
  providers: [MapService]
})
export class MapListComponent implements OnInit {
  @Input('MapForecastList') map: any;
  errorMessage: string;

  constructor(private _mapService: MapService){

  }

  ngOnInit():any {

  }

}
