import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatTableModule,
  MatPaginatorModule,
  MatSidenavModule,
  MatToolbarModule,
  MatSnackBarModule,
  MatBottomSheetModule,
  MatGridListModule,
  MatDialogModule
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    FlexLayoutModule,

    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSidenavModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatBottomSheetModule,
    MatGridListModule,
    MatDialogModule
  ],
  exports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    FlexLayoutModule,

    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSidenavModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatBottomSheetModule,
    MatGridListModule,
    MatDialogModule
  ]
})
export class MaterialModule { }
