import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthskinComponent } from './authskin.component';

describe('AuthskinComponent', () => {
  let component: AuthskinComponent;
  let fixture: ComponentFixture<AuthskinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthskinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthskinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
