import React from 'react';
import { Card, Button, Form } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../rdx/items/selectors';
import { UserData } from '../rdx/items/actions';
import { useNavigate } from "react-router-dom";


function Login(){

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()

    const dispatch = useDispatch()
    const user = useSelector(selectUser)

    function userLoginPassword(){
        dispatch(UserData({
            login: login,
            password: password,
            id: new Date().getTime,
        }))
        localStorage.setItem('dataKey', JSON.stringify({ 
          login: login,
          password: password,
          id: new Date().getTime,}));
          navigate('/shop')
    }

    useEffect(() => {
      if(user?.login) {
        navigate("/shop")
      }
      let userTest = JSON.parse(localStorage.getItem('dataKey'))
      if(userTest) {
        dispatch(UserData(userTest))
      }
    },[user.login,navigate,dispatch])

    return ( <div style={{display: 'flex', justifyContent: 'center',height: '660px', alignItems: 'center'}}>
       
        <Card style={{ width: '18rem' }}>

          <Card.Body>
            <Card.Title style={{textAlign: 'center'}}>Welcome</Card.Title>
            <Card.Text style={{textAlign: 'center'}}>
              Enter your username to sign in
            </Card.Text>
            <Form.Control value={login} onChange={(e) => setLogin(e.currentTarget.value)} placeholder='Login' className="mb-3" type="email"/>
            <Form.Control value={password} onChange={(e) => setPassword(e.currentTarget.value)} placeholder='Password' className="mb-3" type="password"/>
            <Button onClick={userLoginPassword} variant="primary" >Next</Button>
          </Card.Body>
        </Card>
        </div>
      );
}

export default Login