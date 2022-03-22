import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Animal } from '../shared/model/animal.model';
import { AnimalService } from '../shared/service/animal.service';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-animal-crud-form',
  templateUrl: './animal-crud-form.component.html',
  styleUrls: ['./animal-crud-form.component.scss'],
})
export class AnimalCrudFormComponent implements OnInit {
  imageUrl: string;
  image: string| undefined
  imageDownload: File | undefined;
  animal: Animal | undefined;
  animalForm = this.fb.group({
    name: ['', [Validators.required, Validators.maxLength(100)]],
    race: ['', [Validators.required, Validators.maxLength(100)]],
    size: ['', [Validators.required, Validators.maxLength(100)]],
    weight: ['', [Validators.required, Validators.maxLength(100)]],
    life: ['', [Validators.required, Validators.maxLength(100)]],
    feed: ['', [Validators.required, Validators.maxLength(100)]],
    wikiLink: ['', [Validators.required, Validators.maxLength(255)]],
  });
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private animalService: AnimalService,
    private route : Router
  ) {
    this.imageUrl = environment.imagesApiUrl;
  }

  ngOnInit(): void {
    if (this.data != undefined) {
      this.animalService.getOne(this.data.id).subscribe({
        next: (animal:Animal) =>{
          this.animal= animal;
          this.animalForm = this.fb.group({
            name: [
              this.animal.name,
              [Validators.required, Validators.maxLength(100)],
            ],
            race: [
              this.animal.race,
              [Validators.required, Validators.maxLength(100)],
            ],
            size: [
              this.animal.size,
              [Validators.required, Validators.maxLength(100)],
            ],
            weight: [
              this.animal.weight,
              [Validators.required, Validators.maxLength(100)],
            ],
            life: [
              this.animal.life,
              [Validators.required, Validators.maxLength(100)],
            ],
            feed: [
              this.animal.feed,
              [Validators.required, Validators.maxLength(100)],
            ],
            wikiLink: [
              this.animal.wikiLink,
              [Validators.required, Validators.maxLength(255)],
            ],
          });
          this.imageUrl = this.animal.imageUrl
        },
        error: () => {
          alert('Une erreur est survenue')
        }
      })
    }
  }

  submitForm(){
    const formData = new FormData();
    formData.append('name', this.animalForm.value.name);
    formData.append('race',this.animalForm.value.race);
    formData.append('size', this.animalForm.value.size);
    formData.append('weight', this.animalForm.value.weight);
    formData.append('life', this.animalForm.value.life);
    formData.append('feed', this.animalForm.value.feed);
    formData.append('wikiLink', this.animalForm.value.wikiLink);
    if(this.animal != undefined){
      if(this.imageDownload !== undefined)
      formData.append('file', this.imageDownload, this.imageDownload.name);
      this.animalService.updateAnimal(this.animal.id,formData).subscribe({
        next: () => {
          this.route.navigate(['/dashboard']);
        }
      })
    }else{
      if(this.imageDownload !== undefined){
        formData.append('file', this.imageDownload, this.imageDownload.name)
      }
      this.animalService.postAnimal(formData).subscribe({
        next: () => {
          this.route.navigate(['/dashboard']);
        }
      })
    }
  }

  uploadFile(event:Event){
    const element = event.currentTarget as HTMLInputElement;
    const fileList: FileList | null = element.files;
    if(fileList){
      this.imageDownload = fileList[0];
      if(this.imageDownload.size > 1000000){
        this.imageDownload = undefined;
        return;
      }
      if(this.image != undefined) this.image = this.imageDownload.name;
    }else return;
  }

}


