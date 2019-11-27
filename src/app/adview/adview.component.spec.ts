import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdviewComponent } from './adview.component';

describe('AdviewComponent', () => {
  let component: AdviewComponent;
  let fixture: ComponentFixture<AdviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
