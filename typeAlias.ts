// type alias 
type StringOrNumber = string | number;
type Student = { 
    name: string
    id: StringOrNumber 
}

const studentDetails = (id: StringOrNumber, studentName: string): void => {
    console.log( `Student ${studentName} has id: ${id}` );
}

studentDetails(123, 'henry')
studentDetails('456', 'Son')

const great = ( user: Student ) => console.log( `${user.name} with id ${user.id} say hello` )

great({ name: 'henry', id: 123 })
