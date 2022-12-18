import axios from 'axios';
import React, { useEffect, useState } from'react';
import { Card, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { inputName } from '../rdx/items/actions';
import { inputAllName } from '../rdx/items/selectors';

function Input(){

    const dispatch = useDispatch();
    const artAll = useSelector(inputAllName);
    const [name, setName] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
    const [fetching, setFetching] = useState(true)

    function getName(e) {
        setName(e.currentTarget.value);
    }

    useEffect(() => {
        if(fetching) {
            console.log("Loading")
            axios(`https://jsonplaceholder.typicode.com/photos?_limit=10&_page=${currentPage}`).then(res => {
                dispatch(inputName([...artAll, ...res.data]));
                setCurrentPage(prev => prev + 1)
            })
            .finally(() => setFetching(false))
        }
    },[fetching,dispatch, currentPage])

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler)
        return () => {
            document.removeEventListener('scroll', scrollHandler)
        }
    },[])

    function scrollHandler(e) {
        if(e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
            setFetching(true)
        }
    }

    return <>
        <Form.Control value={name} onChange={getName} className="mb-3" placeholder="Search" type="text" />

        { artAll.filter(art => name ? art.title.includes(name) : false).map(el =><div> <Card.Img key={el.title} style = {{width: '150px' , heigth: '150px'}} variant="top" src={el.thumbnailUrl} /></div>)}
        
    </>
}

export default Input