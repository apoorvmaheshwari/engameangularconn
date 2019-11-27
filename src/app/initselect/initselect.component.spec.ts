import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InitselectComponent } from './initselect.component';

describe('InitselectComponent', () => {
  let component: InitselectComponent;
  let fixture: ComponentFixture<InitselectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitselectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitselectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
