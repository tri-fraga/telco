import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationAssignDialogComponent } from './location-assign-dialog.component';

describe('LocationAssignDialogComponent', () => {
  let component: LocationAssignDialogComponent;
  let fixture: ComponentFixture<LocationAssignDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationAssignDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationAssignDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
