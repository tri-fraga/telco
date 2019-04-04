import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationAddDialogComponent } from './location-add-dialog.component';

describe('LocationAddDialogComponent', () => {
  let component: LocationAddDialogComponent;
  let fixture: ComponentFixture<LocationAddDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationAddDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationAddDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
