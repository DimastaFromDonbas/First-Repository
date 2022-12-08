import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import InputDate from "./InputDate";
import InputCalc from "./InputCalc";
import Currency from "./Currency";
import { useDispatch, useSelector } from "react-redux";
import { selectAllCurrencies } from "../rdx/items/selectors";
import { setAllCurrencies } from "../rdx/items/actions";


function Calc(){
    const currencies = useSelector(selectAllCurrencies)
    const dispatch = useDispatch()

    const [toDate, setToDate] = useState('20221010')

    function renderDate(e){
        let date = e.currentTarget.value
        setToDate(date)
    }

    useEffect(() => {
        axios(
        `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=${toDate.replaceAll(
        "-",
        "")}&json`
          ).then(res => {
            dispatch(setAllCurrencies(res.data));
        });
    }, [toDate, dispatch])
    return <div>
    <InputDate renderDate={renderDate} /> 
    <Table striped bordered hove>
            <thead>
                <tr>
                    <th>Price</th>
                    <th>Name</th>
                    <th>Cod</th>
                </tr>
                </thead>
                <tbody>
                {currencies.map(currency => <Currency currency={currency} key={currency.cc}/>)}
                </tbody>
        </Table>
         
        <InputCalc currencies={currencies}/>

        </div>

}

export default Calc;