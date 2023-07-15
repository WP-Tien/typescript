class Department {
    // public name: string;
    // private id: string;
    private employees: string[] = [];

    constructor(private id: string, public name: string) { // shortcut
        // this.id = id;
        // this.name = n;
    }

    describe(this: Department) {
        console.log( `Department (${this.id}): ${this.name}` );
    }

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

const accounting = new Department( '321', 'Accounting');

accounting.addEmployee('Max');
accounting.addEmployee('Vincent');

// accounting.employees[2] = 'Anna';

accounting.describe();
accounting.name = "NEW NAME";
accounting.printEmployeeInformation();