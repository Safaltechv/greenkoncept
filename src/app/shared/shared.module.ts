import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [
    MatFormFieldModule,
    MatInputModule,
    MatTreeModule,
    MatIconModule,
  ]
})
export class SharedModule { }
