import { Component } from '@angular/core'

@Component({
    selector: 'my-employee',
    templateUrl: './employee.component.html'
})
export class EmployeeComponent {
    firstName: string = 'Sam';
    lastName: string = 'Holding';
    gender: string = 'Male';
    age: number = 25;
    showDetails: boolean = false;

    toggleDetails(): void {
        this.showDetails = !this.showDetails;
    }
}