import React, {useEffect, useState} from "react";
import axios from "axios";
import {Table} from "react-bootstrap";
import Country from './Country';
import SearchCountry from "./SearchCountry";

import { useSelector, useDispatch } from 'react-redux'
import { setCountries } from "../rdx/items/actions";
import { selectAllCountries } from "../rdx/items/selectors";

function Countries() {
    const countries = useSelector(selectAllCountries)
    const dispatch = useDispatch()

    const [filteredCountries ,setFilteredCountries] = useState([])
    const [seachCountry, setSeachCountry] = useState('')

    function processSearch(e){
        let search = e.currentTarget.value.toLowerCase().trim()
        setSeachCountry(search)
        setFilteredCountries (countries.filter(country => country.name.toLowerCase().trim().includes(search)))
    }


    useEffect(() => {
        axios('https://restcountries.com/v2/all').then(res => {
            dispatch(setCountries(res.data));
        });
    }, [dispatch])

    return <>
        <SearchCountry processSearch={processSearch}/>
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>Name</th>
                <th>Capital</th>
                <th>Area</th>
                <th>Population</th>
            </tr>
            </thead>
            <tbody>
            {
            (filteredCountries.length || seachCountry ? filteredCountries : countries)
            .map(country => <Country country={country} key={country.alpha3Code}/>)
            }
            {!filteredCountries.length && seachCountry ? <h2 style={{textAlign:'center'}}>Sorry not found :(</h2> : ' '}
            </tbody>


        </Table>
    </>
    
}

export default Countries;