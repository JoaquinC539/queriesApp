import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoTransporteCreateComponent } from './auto-transporte-create.component';

describe('AutoTransporteCreateComponent', () => {
  let component: AutoTransporteCreateComponent;
  let fixture: ComponentFixture<AutoTransporteCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutoTransporteCreateComponent]
    });
    fixture = TestBed.createComponent(AutoTransporteCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
