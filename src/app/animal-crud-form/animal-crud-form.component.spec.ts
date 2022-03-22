import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalCrudFormComponent } from './animal-crud-form.component';

describe('AnimalCrudFormComponent', () => {
  let component: AnimalCrudFormComponent;
  let fixture: ComponentFixture<AnimalCrudFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalCrudFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalCrudFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
