import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfTransporteEditComponent } from './conf-transporte-edit.component';

describe('ConfTransporteEditComponent', () => {
  let component: ConfTransporteEditComponent;
  let fixture: ComponentFixture<ConfTransporteEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfTransporteEditComponent]
    });
    fixture = TestBed.createComponent(ConfTransporteEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
