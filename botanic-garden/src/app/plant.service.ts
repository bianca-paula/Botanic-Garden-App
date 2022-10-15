import { Injectable } from '@angular/core';
import { Plant } from './model/plant';
import { PLANTS } from './mock-plants';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class PlantService {

  constructor(private messageService: MessageService) { }

  getPlants(): Observable<Plant[]> {
    const plants = of(PLANTS);
    return plants;
  }
}
