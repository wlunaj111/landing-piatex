import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionanuncioComponent } from './gestionanuncio.component';

describe('GestionanuncioComponent', () => {
  let component: GestionanuncioComponent;
  let fixture: ComponentFixture<GestionanuncioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionanuncioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionanuncioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
