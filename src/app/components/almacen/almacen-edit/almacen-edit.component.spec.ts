import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlmacenEditComponent } from './almacen-edit.component';

describe('AlmacenEditComponent', () => {
  let component: AlmacenEditComponent;
  let fixture: ComponentFixture<AlmacenEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlmacenEditComponent]
    });
    fixture = TestBed.createComponent(AlmacenEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
