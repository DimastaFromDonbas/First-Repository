import axios from 'axios';
import React, { useEffect, useState } from'react';
import { Card, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { inputName } from '../rdx/items/actions';
import { inputAllName, selectUser } from '../rdx/items/selectors';

function Input(){

    const dispatch = useDispatch();
    const artAll = useSelector(inputAllName);
    const [name, setName] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
    const [fetching, setFetching] = useState(true)

    const user = useSelector(selectUser)
    const navigate = useNavigate()
  
    useEffect(() => {
      if(!user?.login) {
        navigate("/")
      }
    },[user.login,navigate])

    function getName(e) {
        if(fetching) {
            source.cancel('huy')
        }
        setName(e.currentTarget.value);
        setFetching(true)
    }
   
    let source = axios.CancelToken.source();
    useEffect(() => {
        if(fetching && name) { 
            axios.get(`https://jsonplaceholder.typicode.com/photos?_limit=10&_page=${currentPage}`,{ cancelToken: source.token} ).then(res => {
                dispatch(inputName([...artAll, ...res.data]));
                setCurrentPage(prev => prev + 1)
            })
            .catch((err) => {
               console.log(err)
            })
            .finally(() => setFetching(false))
        }
    // eslint-disable-next-line
    },[fetching,currentPage,name ])

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

    let picFilter = artAll.filter(art => name ? art.title.includes(name) : false)

    return <>
        <Form.Control value={name} onChange={getName} className="mb-3" placeholder="Search" type="text" />

        { picFilter.map((el, index) =><div key={index}> <Card.Img key={el.title} style = {{width: '150px' , heigth: '150px'}} variant="top" src={el.thumbnailUrl} /></div>)}
        
    </>
}

export default Input