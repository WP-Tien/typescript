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

class ITDepartment extends Department {
    admins: string[];

    constructor(id: string, admins: string[]) {
        super( id, 'IT')
        this.admins = admins;
    }
}

class AccountingDepartment extends Department {
    constructor(id: string, private reports: string[]) {
        super( id, 'Accounting')
    }

    addReport(text: string) {
        this.reports.push(text);
    }

    getReports() {
        console.log( this.reports );
    }
}

// const accounting = new ITDepartment( '321', 'Accounting');
const it = new ITDepartment('d1', ['Max']);

it.addEmployee('Max');
it.addEmployee('Vincent');

// accounting.employees[2] = 'Anna';

it.describe();
it.name = "NEW NAME";
it.printEmployeeInformation();

const accounting = new AccountingDepartment('c1', []);
accounting.addReport('Something report here...');
accounting.getReports();