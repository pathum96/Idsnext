import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ManageEmployeeComponent } from "./manage-employee/manage-employee.component";

const routes: Routes = [
    {
        path: '',
        component: ManageEmployeeComponent,
    },
];

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(routes)
    ]
})
export class EmployeeRoutingModule { }