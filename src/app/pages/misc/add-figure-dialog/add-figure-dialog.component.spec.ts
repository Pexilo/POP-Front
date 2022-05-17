import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFigureDialogComponent } from './add-figure-dialog.component';

describe('AddFigureDialogComponent', () => {
  let component: AddFigureDialogComponent;
  let fixture: ComponentFixture<AddFigureDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFigureDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFigureDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
