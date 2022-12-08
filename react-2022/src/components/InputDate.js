import React, { useState } from "react";
import { Form } from "react-bootstrap"

function InputDate({renderDate}) {
    const [dateValue,setDateValue] = useState('2022-10-10')
    return <Form.Control 
    className="mb-3"
    type="date"
    id="date"
    onChange={(e) => {
        renderDate(e)
        setDateValue(e.currentTarget.value)
    }}
    value = {dateValue}
  />

}

export default InputDate;