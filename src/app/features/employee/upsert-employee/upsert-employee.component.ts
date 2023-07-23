import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Employee } from 'src/app/shared/models/employee';
import { EmployeeManageService } from 'src/app/core/services/employee-manage.service';
import { v4 as uuidv4 } from 'uuid';
import { MessageHelperService } from 'src/app/core/helpers/message.helper.service';

@Component({
  selector: 'app-upsert-employee',
  templateUrl: './upsert-employee.component.html',
  styleUrls: ['./upsert-employee.component.scss']
})
export class UpsertEmployeeComponent implements OnInit {
  @Input() selectedEmployee: Employee | undefined;
  @Output() onCreate = new EventEmitter();
  
  designations = ['Manger', 'IT Manger', 'Developer', 'HR Manager'];

  employeeForm!: FormGroup;
  employeeData!: Employee;
  isEditFlow: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private employeeManageService: EmployeeManageService,
    private messageHelperService: MessageHelperService
  ) {
   }

  ngOnInit(): void {
    this.initForm();
  }

  ngOnChanges(changes: SimpleChanges) {
    if(this.selectedEmployee && this.selectedEmployee?.isUpdate) {
      this.isEditFlow = this.selectedEmployee?.isUpdate;
      this.initForm();
    }
  }

  initForm() {
    this.employeeForm = this.formBuilder.group({
      name: [this.selectedEmployee?.name, Validators.required],
      designation: [this.selectedEmployee?.designation, Validators.required],
      salary: [this.selectedEmployee?.salary, Validators.required]
    });

    this.employeeForm.valueChanges.subscribe((value) => {
      if (this.employeeForm.valid) {
        this.employeeData = value;
      }
    });
  }

  save() {
    if(this.employeeData) {
      if(this.isEditFlow) {
        this.employeeData.id = this.selectedEmployee?.id;
        this.employeeManageService.updateEmployeeData(this.employeeData)
        .then((res) => {
          this.isEditFlow = false;
          this.messageHelperService.showMessage('success', 'Success', res);
          this.onCreate.emit();
          this.reset();
        });
      } else {
        this.employeeData.id = uuidv4();
        this.employeeManageService.setEmployeeData(this.employeeData)
        .then((res) => {
          this.messageHelperService.showMessage('success', 'Success', res);
          this.onCreate.emit();
          this.reset();
        });
      }
    }
  }

  reset() {
    this.employeeForm.reset();
  }
}
