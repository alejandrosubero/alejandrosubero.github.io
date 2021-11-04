import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetemciasComponent } from './competemcias.component';

describe('CompetemciasComponent', () => {
  let component: CompetemciasComponent;
  let fixture: ComponentFixture<CompetemciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompetemciasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetemciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
