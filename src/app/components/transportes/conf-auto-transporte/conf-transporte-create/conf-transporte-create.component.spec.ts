import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfTransporteCreateComponent } from './conf-transporte-create.component';

describe('ConfTransporteCreateComponent', () => {
  let component: ConfTransporteCreateComponent;
  let fixture: ComponentFixture<ConfTransporteCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfTransporteCreateComponent]
    });
    fixture = TestBed.createComponent(ConfTransporteCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
