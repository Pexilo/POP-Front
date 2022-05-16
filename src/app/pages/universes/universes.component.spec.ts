import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversesComponent } from './universes.component';

describe('UniversesComponent', () => {
  let component: UniversesComponent;
  let fixture: ComponentFixture<UniversesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
