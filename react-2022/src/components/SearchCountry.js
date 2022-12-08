import React from "react";
import { Form } from "react-bootstrap";

function SearchCountry({processSearch}){

    return  <Form.Control
    className="mb-3"
    placeholder="Search"
    type="text"
    onKeyUp={processSearch}
 />
}

export default SearchCountry