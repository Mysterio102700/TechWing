import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerfiedComponent } from './verfied.component';

describe('VerfiedComponent', () => {
  let component: VerfiedComponent;
  let fixture: ComponentFixture<VerfiedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerfiedComponent]
    });
    fixture = TestBed.createComponent(VerfiedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
