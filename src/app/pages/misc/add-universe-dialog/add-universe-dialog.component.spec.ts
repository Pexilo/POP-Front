import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUniverseDialogComponent } from './add-universe-dialog.component';

describe('AddUniverseDialogComponent', () => {
  let component: AddUniverseDialogComponent;
  let fixture: ComponentFixture<AddUniverseDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUniverseDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUniverseDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
