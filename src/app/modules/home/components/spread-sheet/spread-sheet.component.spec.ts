import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpreadSheetComponent } from './spread-sheet.component';

describe('SpreadSheetComponent', () => {
  let component: SpreadSheetComponent;
  let fixture: ComponentFixture<SpreadSheetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpreadSheetComponent]
    });
    fixture = TestBed.createComponent(SpreadSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
