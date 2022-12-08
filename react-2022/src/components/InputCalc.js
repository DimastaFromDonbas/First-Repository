import React, { useState } from "react";
import {Form} from "react-bootstrap";

function InputCalc({currencies}) {
    const [value,setValue] = useState('')
    const [valueSelect, setValueSelect] = useState('')
    const [valueSelect1, setValueSelect1] = useState('')
    const [convert,setConvet] = useState('')

    function convertCurrency(value,select,select1) {
        if(!select) select = valueSelect
        if(!select1) select1 = valueSelect1
        let rate = currencies.filter((currency) => currency.txt === select)[0].rate;
        let rate1 = currencies?.filter((currency) => currency?.txt === select1)[0]?.rate;
        let resultMath = ((rate /rate1)*value).toFixed(2);
        setConvet(resultMath);
    }

    return <> 
        <div className="row">
        <div className="col">
        <Form.Control onChange={e =>{
            convertCurrency(e.currentTarget.value)
            setValue(e.currentTarget.value > 0 ? e.currentTarget.value : '')}}
            className="mb-3"
            type="number"
            id="date"
            value={value}
        />
        </div>
        <div className="col">
        <Form.Control 
            className="mb-3"
            type="text"
            id="date"
            readOnly
            value={convert}
        />
        </div>
        </div> 
        <div className="row">
        <div className="col">
        <Form.Select aria-label="Default select example" onChange={e => {
            setValueSelect(e.currentTarget.value)
            convertCurrency(value,e.currentTarget.value)
            }}>
            <option>Выберите страну</option>
            {currencies.map(currency => <option key={currency.cc}>{currency.txt}</option>)}
        </Form.Select>
        </div>
        <div className="col">
        <Form.Select aria-label="Default select example" onChange={f => {
            setValueSelect1(f.currentTarget.value)
            convertCurrency(value,undefined,f.currentTarget.value)
         }}>
            <option>Выберите страну</option>
            {currencies.map(currency => <option key={currency.cc}>{currency.txt}</option>)}
        </Form.Select>
        </div>
        </div>
        </>
}

export default InputCalc