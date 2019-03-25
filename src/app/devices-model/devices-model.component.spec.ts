import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevicesModelComponent } from './devices-model.component';

describe('DevicesModelComponent', () => {
  let component: DevicesModelComponent;
  let fixture: ComponentFixture<DevicesModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevicesModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevicesModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
