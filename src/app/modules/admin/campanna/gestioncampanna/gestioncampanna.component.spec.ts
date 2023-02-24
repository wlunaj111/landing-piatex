import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestioncampannaComponent } from './gestioncampanna.component';

describe('GestioncampannaComponent', () => {
  let component: GestioncampannaComponent;
  let fixture: ComponentFixture<GestioncampannaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestioncampannaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestioncampannaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
