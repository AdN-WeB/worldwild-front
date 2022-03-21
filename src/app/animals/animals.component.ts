import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Animal } from '../shared/model/animal.model';
import { AnimalService } from '../shared/service/animal.service';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.scss']
})
export class AnimalsComponent implements OnInit {

  images:any[]=[];
  animals:Animal[];
  imageUrl:any;

  constructor(private animalService:AnimalService) {
    this.animals = [];
    this.imageUrl = environment.imagesApiUrl
   }

  ngOnInit(): void {
    this.animalService.getAnimals().subscribe({
      next: (animals:Animal[]) =>{
        animals.forEach((animal:Animal) =>{
          this.animals.push(animal)
        })
      }
    });
  }

}
