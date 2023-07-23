import { Injectable } from "@angular/core";
import { Employee } from "src/app/shared/models/employee";

@Injectable({
  providedIn: 'root'
})
export class EmployeeManageService {

  constructor(
  ) { }

  setEmployeeData(data: Employee): Promise<string> {
    return new Promise((resolve, reject) => {
      let employees = [];
      let storedData = localStorage.getItem('employees');
      if(storedData)
        employees = JSON.parse(storedData);
      employees.push(data);
      let newData = JSON.stringify(employees);
      localStorage.setItem('employees', newData);
      resolve('Emplloyee successfully added!');
    });
  }

  updateEmployeeData(data: Employee): Promise<string> {
    return new Promise((resolve, reject) => {
      let employees = [];
      let storedData = localStorage.getItem('employees');
      if(storedData) {
        employees = JSON.parse(storedData);
        let newEmpArray = employees.filter((employee: { id: string | undefined; }) => employee.id != data?.id);
        newEmpArray.push(data);
        let newData = JSON.stringify(newEmpArray);
        localStorage.setItem('employees', newData);
        resolve('Emplloyee successfully updated!');
      }
    });
  }

  deleteEmployeeData(id: String): Promise<string> {
    return new Promise((resolve, reject) => {
      let employees = [];
      let storedData = localStorage.getItem('employees');
      if(storedData) {
        employees = JSON.parse(storedData);
        let newEmpArray = employees.filter((employee: { id: string | undefined; }) => employee.id != id);
        let newData = JSON.stringify(newEmpArray);
        localStorage.setItem('employees', newData);
        resolve('Emplloyee successfully deleted!');
      }
    });
  }

  getAllEmployeeData(): Promise<Employee[]> {
    return new Promise((resolve, reject) => {
      let employees = [];
      let storedData = localStorage.getItem('employees');
      if(storedData) {
        employees = JSON.parse(storedData);
      }
      resolve(employees);
    });
  }
}