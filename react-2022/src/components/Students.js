import React from "react";
import Student from "./Student";

function Students() {
    let students = [{name: 'Dima', mark: 3, isAdmin: true},
        {name: 'Denis', mark: 2.5, isAdmin: false},
        {name: 'Helen', mark: 4.3, isAdmin: true}]
    return <ul>
        { students.map(student => <Student key={student.name + student.mark}
                                           student={student}/>) }
    </ul>
}



export default Students;