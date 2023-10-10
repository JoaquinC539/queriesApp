import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportCSVComponent } from './export-csv.component';

describe('ExportCSVComponent', () => {
  let component: ExportCSVComponent;
  let fixture: ComponentFixture<ExportCSVComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExportCSVComponent]
    });
    fixture = TestBed.createComponent(ExportCSVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
