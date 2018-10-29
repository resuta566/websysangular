import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnepostComponent } from './onepost.component';

describe('OnepostComponent', () => {
  let component: OnepostComponent;
  let fixture: ComponentFixture<OnepostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnepostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnepostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
