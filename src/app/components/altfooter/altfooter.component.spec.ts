import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltfooterComponent } from './altfooter.component';

describe('AltfooterComponent', () => {
  let component: AltfooterComponent;
  let fixture: ComponentFixture<AltfooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltfooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
