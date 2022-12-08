import React from "react";

function Currency({currency}){
    return  <tr>
    <td>{currency.rate}</td>
    <td>{currency.txt}</td>
    <td>{currency.cc}</td>
    </tr>
}

export default Currency