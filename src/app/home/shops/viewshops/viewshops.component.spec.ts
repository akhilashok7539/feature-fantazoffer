import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewshopsComponent } from './viewshops.component';

describe('ViewshopsComponent', () => {
  let component: ViewshopsComponent;
  let fixture: ComponentFixture<ViewshopsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewshopsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewshopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
