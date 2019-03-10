import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

const SHARED_MODULES = [ReactiveFormsModule];

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [],
  exports: [...SHARED_MODULES],
})
export class SharedModule {}
