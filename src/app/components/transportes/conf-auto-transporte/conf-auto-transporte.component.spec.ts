import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfAutoTransporteComponent } from './conf-auto-transporte.component';

describe('ConfAutoTransporteComponent', () => {
  let component: ConfAutoTransporteComponent;
  let fixture: ComponentFixture<ConfAutoTransporteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfAutoTransporteComponent]
    });
    fixture = TestBed.createComponent(ConfAutoTransporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
