import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationSearchDialogComponent } from './location-search-dialog.component';

describe('LocationSearchDialogComponent', () => {
  let component: LocationSearchDialogComponent;
  let fixture: ComponentFixture<LocationSearchDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationSearchDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationSearchDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
