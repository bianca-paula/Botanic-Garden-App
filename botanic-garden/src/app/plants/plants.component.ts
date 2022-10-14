import { Component, OnInit } from '@angular/core';
import { Plant } from '../model/plant';
import { PLANTS } from '../mock-plants';

@Component({
  selector: 'app-plants',
  templateUrl: './plants.component.html',
  styleUrls: ['./plants.component.css']
})
export class PlantsComponent implements OnInit {
  
  plants = PLANTS;
  constructor() { }

  ngOnInit(): void {
  }

}
