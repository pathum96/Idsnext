import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    InputTextModule,
    DropdownModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    InputTextModule,
    DropdownModule,
    InputNumberModule,
    ButtonModule,
    TableModule,
    ToastModule
  ]
})
export class SharedModule { }