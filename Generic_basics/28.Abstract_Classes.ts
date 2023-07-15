abstract class Department {
    static fiscalYear = 2020;

    // public name: string;
    // private id: string;
    protected employees: string[] = []; // protected method

    constructor(protected id: string, public name: string) { // shortcut
        // this.id = id;
        // this.name = n;
        console.log( Department.fiscalYear );
    }

    static createEmployee(name: string) {
        return { name: name };
    }

    abstract describe(this: Department) :void;

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

    describe() {
        console.log('IT Department - ID:' + this.id );
    }
}

class AccountingDepartment extends Department {
    private lastReport: string;

    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }

        throw new Error('No report found.');
    }

    describe() {
        console.log('IT Department - ID:' + this.id );
    }

    set mostRecentReport( value: string ) {
        if (!value) {
            throw new Error('Please pass in a valid value!');
        }
        this.addReport(value);
    }

    constructor(id: string, private reports: string[]) {
        super( id, 'Accounting')
        this.lastReport = reports[0];
    }

    addReport(text: string) {
        this.reports.push(text);
        this.lastReport = text;
    }

    addEmployee(name: string) {
        if ( name === 'Max' ) {
            return;
        }

        this.employees.push(name); // Overriding
    }

    getReports() {
        console.log( this.reports );
    }
}

const employee1 = Department.createEmployee('Max');
console.log( employee1, Department.fiscalYear );

// const accounting = new ITDepartment( '321', 'Accounting');
const it = new ITDepartment('d1', ['Max']);

it.addEmployee('Max');
it.addEmployee('Vincent');

// accounting.employees[2] = 'Anna';
it.describe();
it.name = "NEW NAME";
it.printEmployeeInformation();

const accounting = new AccountingDepartment('c1', []);

// POST
accounting.mostRecentReport = 'Year End Report';
// GET
console.log( accounting.mostRecentReport );
accounting.addReport('Something report here...');
accounting.getReports();

accounting.addEmployee('Max');
accounting.addEmployee('Vincent');
accounting.printEmployeeInformation();