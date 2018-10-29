import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LeedabinComponent } from './leedabin.component';

describe('LeedabinComponent', () => {
  let component: LeedabinComponent;
  let fixture: ComponentFixture<LeedabinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeedabinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeedabinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
