import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GotoCartComponent } from './goto-cart.component';

describe('GotoCartComponent', () => {
  let component: GotoCartComponent;
  let fixture: ComponentFixture<GotoCartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GotoCartComponent]
    });
    fixture = TestBed.createComponent(GotoCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
