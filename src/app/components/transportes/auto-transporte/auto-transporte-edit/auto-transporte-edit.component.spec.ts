import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoTransporteEditComponent } from './auto-transporte-edit.component';

describe('AutoTransporteEditComponent', () => {
  let component: AutoTransporteEditComponent;
  let fixture: ComponentFixture<AutoTransporteEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutoTransporteEditComponent]
    });
    fixture = TestBed.createComponent(AutoTransporteEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
