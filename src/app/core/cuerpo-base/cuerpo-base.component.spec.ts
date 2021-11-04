import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuerpoBaseComponent } from './cuerpo-base.component';

describe('CuerpoBaseComponent', () => {
  let component: CuerpoBaseComponent;
  let fixture: ComponentFixture<CuerpoBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuerpoBaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuerpoBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
