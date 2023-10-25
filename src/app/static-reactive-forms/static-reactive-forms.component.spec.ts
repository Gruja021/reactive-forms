import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticReactiveFormsComponent } from './static-reactive-forms.component';

describe('StaticReactiveFormsComponent', () => {
  let component: StaticReactiveFormsComponent;
  let fixture: ComponentFixture<StaticReactiveFormsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StaticReactiveFormsComponent]
    });
    fixture = TestBed.createComponent(StaticReactiveFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
