import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampannaComponent } from './campanna.component';

describe('CampannaComponent', () => {
  let component: CampannaComponent;
  let fixture: ComponentFixture<CampannaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampannaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CampannaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
