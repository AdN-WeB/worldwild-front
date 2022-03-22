import { Component, OnInit, Inject } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Animal } from '../shared/model/animal.model';
import { AnimalService } from '../shared/service/animal.service';
import {MatDialog} from '@angular/material/dialog';
import { AnimalCrudFormComponent } from '../animal-crud-form/animal-crud-form.component';
@Component({
  selector: 'app-animal-crud',
  templateUrl: './animal-crud.component.html',
  styleUrls: ['./animal-crud.component.scss']
})
export class AnimalCrudComponent implements OnInit {
  animals:Animal[];
  animal:Animal | undefined;
  imageUrl:string;

  constructor(
    private animalService: AnimalService,
    private dialog:MatDialog
  ) { 
    this.animals =[];
    this.imageUrl = environment.imagesApiUrl
  }

  ngOnInit(): void {
    this.getAnimals()
  }

  refreshAfterClose(){
    this.dialog.afterAllClosed.subscribe({
      next: () =>{
        this.getAnimals()
      }
    })
  }

  getAnimals(){
    this.animalService.getAnimals().subscribe({
      next: (animals:Animal[]) =>{
        this.animals = animals.reverse();
      }
    })
  }
   openUpdateForm(id:number){
     this.dialog.open(AnimalCrudFormComponent,{
       data:{
         id
       }
     })
     this.refreshAfterClose()
   }

   openCreatedForm(){
     this.dialog.open(AnimalCrudFormComponent);
     this.refreshAfterClose()
   }

   deleteAnimal(id:number){
     if(confirm("La suppression est définitive, supprimer quand même?")){
       this.animalService.delete(id).subscribe({
         next: () =>{
           this.getAnimals
         },
         error: () => {
           alert("Une erreur est survenue")
         }
       })
     }
   }

}


