import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoTransporteComponent } from './auto-transporte.component';

describe('AutoTransporteComponent', () => {
  let component: AutoTransporteComponent;
  let fixture: ComponentFixture<AutoTransporteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutoTransporteComponent]
    });
    fixture = TestBed.createComponent(AutoTransporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
