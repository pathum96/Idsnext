import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeListComponent } from '../employee-list/employee-list.component';
import { Employee } from 'src/app/shared/models/employee';

@Component({
  selector: 'app-manage-employee',
  templateUrl: './manage-employee.component.html',
  styleUrls: ['./manage-employee.component.scss']
})
export class ManageEmployeeComponent implements OnInit {
  @ViewChild(EmployeeListComponent) employeeListComponent: EmployeeListComponent | undefined;

  selectedEmployee: Employee | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  onCreate() {
    this.employeeListComponent?.getAllData();
  }

  onSelect(event: Employee) {
    this.selectedEmployee = event;
  }
}
