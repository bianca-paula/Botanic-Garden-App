import { Input, Component, OnInit } from '@angular/core';
import { Plant } from '../model/plant';

@Component({
  selector: 'app-plant-details',
  templateUrl: './plant-details.component.html',
  styleUrls: ['./plant-details.component.css']
})
export class PlantDetailsComponent implements OnInit {

  @Input() plant?: Plant;
  
  constructor() { }

  ngOnInit(): void {
  }

}
