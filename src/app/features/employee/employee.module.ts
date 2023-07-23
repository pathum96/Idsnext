import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { EmployeeRoutingModule } from './employee.routing.modul';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { ManageEmployeeComponent } from './manage-employee/manage-employee.component';
import { UpsertEmployeeComponent } from './upsert-employee/upsert-employee.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
    declarations: [
        EmployeeListComponent,
        ManageEmployeeComponent,
        UpsertEmployeeComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        EmployeeRoutingModule,
    ],
    providers: [],
    exports: [
    ]

})
export class EmployeeModule {
}