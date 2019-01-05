import { Component } from '@angular/core'

@Component({
    selector: 'list-employee',
    templateUrl: './employeeList.Component.html',
    styleUrls:['./employeeList.Component.css']
})
export class EmployeeListComponent {
    employees: any[];

    constructor() {
        this.employees = [
            { code: 'emp01', name: 'Karan', gender: 'Male', annualSalary: 25000, dateOfBirth: '11/14/1990' },
            { code: 'emp02', name: 'Yudhistir', gender: 'Male', annualSalary: 35000, dateOfBirth: '4/08/1992' },
            { code: 'emp03', name: 'Bhim', gender: 'Male', annualSalary: 15000, dateOfBirth: '11/12/1993' },
            { code: 'emp04', name: 'Arjun', gender: 'Male', annualSalary: 17000, dateOfBirth: '12/12/1994' },
            { code: 'emp05', name: 'Nakul', gender: 'Male', annualSalary: 1000, dateOfBirth: '03/13/1995' },
            { code: 'emp06', name: 'Sahadev', gender: 'Male', annualSalary: 12000, dateOfBirth: '06/06/1996' }

        ];
    }

    getEmployees(): void {
        this.employees = [
            { code: 'emp01', name: 'Karan', gender: 'Male', annualSalary: 25000, dateOfBirth: '11/14/1990' },
            { code: 'emp02', name: 'Yudhistir', gender: 'Male', annualSalary: 35000, dateOfBirth: '4/08/1992' },
            { code: 'emp03', name: 'Bhim', gender: 'Male', annualSalary: 15000, dateOfBirth: '11/12/1993' },
            { code: 'emp04', name: 'Arjun', gender: 'Male', annualSalary: 17000, dateOfBirth: '12/12/1994' },
            { code: 'emp05', name: 'Nakul', gender: 'Male', annualSalary: 1000, dateOfBirth: '03/13/1995' },
            { code: 'emp06', name: 'Sahadev', gender: 'Male', annualSalary: 12000, dateOfBirth: '06/06/1996' },
            { code: 'emp07', name: 'Kunti', gender: 'Female', annualSalary: 15000, dateOfBirth: '08/08/1950' },
            { code: 'emp08', name: 'Dropadi', gender: 'Female', annualSalary: 20000, dateOfBirth: '07/12/1997' },
            { code: 'emp09', name: 'Gandhari', gender: 'Female', annualSalary: 28000, dateOfBirth: '12/07/1955' },
            { code: 'emp10', name: 'Duryodhan', gender: 'Male', annualSalary: 35000, dateOfBirth: '06/12/1992' }
        ];
    }

    trackByEmpCode(index: number, employee: any): string {
        return employee.code;
    }

}