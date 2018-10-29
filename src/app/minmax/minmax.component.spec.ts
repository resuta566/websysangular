//There is nothing here that I edit

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinmaxComponent } from './minmax.component';

describe('MinmaxComponent', () => {
  let component: MinmaxComponent;
  let fixture: ComponentFixture<MinmaxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinmaxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinmaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
