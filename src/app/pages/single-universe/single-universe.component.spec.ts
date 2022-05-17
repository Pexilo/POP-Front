import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleUniverseComponent } from './single-universe.component';

describe('SingleUniverseComponent', () => {
  let component: SingleUniverseComponent;
  let fixture: ComponentFixture<SingleUniverseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleUniverseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleUniverseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
