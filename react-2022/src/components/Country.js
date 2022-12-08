import React from "react";

function Country({country}) {

    return <tr >
        <td>{country.name}</td>
        <td>{country.capital}</td>
        <td>{country.area}</td>
        <td>{country.population}</td>
    </tr>
}

export default Country;