import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HraderComponent } from './hrader.component';

describe('HraderComponent', () => {
  let component: HraderComponent;
  let fixture: ComponentFixture<HraderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HraderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HraderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
