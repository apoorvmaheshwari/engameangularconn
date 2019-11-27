import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginreguserComponent } from './loginreguser.component';

describe('LoginreguserComponent', () => {
  let component: LoginreguserComponent;
  let fixture: ComponentFixture<LoginreguserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginreguserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginreguserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
