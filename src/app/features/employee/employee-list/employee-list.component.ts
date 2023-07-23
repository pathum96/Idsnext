import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Employee } from 'src/app/shared/models/employee';
import { EmployeeManageService } from 'src/app/core/services/employee-manage.service';
import { MessageHelperService } from 'src/app/core/helpers/message.helper.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  @Output() onSelect = new EventEmitter();

  employees: Employee[] = [];
  loading: boolean = false;
  isHideTable: boolean = false;

  constructor(
    private employeeManageService: EmployeeManageService,
    private messageHelperService: MessageHelperService
  ) { }

  ngOnInit(): void {
    this.getAllData();
  }

  getAllData() {
    this.loading = true;
    this.employeeManageService.getAllEmployeeData()
    .then((employees) => {
      this.employees = employees;
      this.loading = false;
    });
  }

  edit(employee: Employee) {
    employee.isUpdate = true;
    this.onSelect.emit(employee);
  }

  delete(employee: Employee) {
    if(employee?.id) {
      this.loading = true;
      this.employeeManageService.deleteEmployeeData(employee?.id)
      .then((res) => {
        this.getAllData();
        this.messageHelperService.showMessage('success', 'Success', res);
        this.loading = false;
      });
    }
  }
}
