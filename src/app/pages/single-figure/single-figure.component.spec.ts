import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleFigureComponent } from './single-figure.component';

describe('SingleFigureComponent', () => {
  let component: SingleFigureComponent;
  let fixture: ComponentFixture<SingleFigureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleFigureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleFigureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
