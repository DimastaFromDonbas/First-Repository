import React from "react";

function Student({student}) {
    return <li className={student.isAdmin ? 'active' : ''}
    style={{borderTopLeftRadius: '.5rem', padding: '.3rem'}}>
        {student.name} {student.mark} {student.isAdmin ? <b>Admin</b> : <span>---</span>}    
    </li>
}
//Virtual DOM
//Virtual Tree of Elements

export default Student;