import { Component, OnInit } from '@angular/core';
import { Plant } from '../model/plant';
import { PlantService } from '../plant.service';

@Component({
  selector: 'app-plants',
  templateUrl: './plants.component.html',
  styleUrls: ['./plants.component.css']
})
export class PlantsComponent implements OnInit {
  
  plants : Plant[] = [];
  selectedPlant?: Plant;

  constructor(private plantService: PlantService) { }

  ngOnInit(): void {
    this.getPlants();
  }

  onSelect(plant: Plant): void {
    this.selectedPlant = plant;
    console.log("PLANT: ", this.selectedPlant);
  }

  getPlants(): void {
    this.plantService.getPlants()
        .subscribe(plants => this.plants = plants);
  }
}
