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
    const [emailDirty, setEmailDirty] = useState(false);
    const [passwordDirty, setPasswordDirty] = useState(false);
    const [emailError, setEmailError] = useState("Логин не может быть пустым");
    const [passwordError, setPasswordError] = useState("Пароль не может быть пустым");
    const [ formValid, setFormValid] = useState(false);
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

    const blurHandler = (e) => {
      switch(e.currentTarget.name) {
        case 'login':
          setEmailDirty(true)
        break;
        case 'password':
          setPasswordDirty(true)
        break;
        default:
      }
    }

    function loginUser(e) {
      setLogin(e.currentTarget.value)
      const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      if(!re.test(e.target.value)) {
        setEmailError('Некоректный логин')
      } else {
        setEmailError('')
      }
    }

    function passwordUser(e) {
      setPassword(e.currentTarget.value)
      if(e.target.value.length < 6) {
        setPasswordError('Некоректный пароль')
        if(!e.target.value){
          setPasswordError('Пароль не может быть пустым')
        }
      } else {
        setPasswordError('')
      }
    }

    useEffect(() => {
      if(emailError || passwordError) {
        setFormValid(false)
      } else {
        setFormValid(true)
      }
    },[emailError, passwordError])

    return ( <div style={{display: 'flex', justifyContent: 'center',height: '660px', alignItems: 'center'}}>
       
        <Card style={{ width: '18rem' }}>

          <Card.Body>
            <Card.Title style={{textAlign: 'center'}}>Welcome</Card.Title>
            <Card.Text style={{textAlign: 'center'}}>
              Enter your username to sign in
            </Card.Text>
            {(emailDirty && emailError) && <div style={{color: 'red'}}>{emailError}</div> }
            <Form.Control onBlur={e => blurHandler(e)} name='login' value={login} onChange={loginUser} placeholder='Login' className="mb-3" type="email"/>
            {(passwordDirty && passwordError) && <div style={{color: 'red'}}>{passwordError}</div>}
            <Form.Control onBlur={e => blurHandler(e)} name='password' value={password} onChange={passwordUser} placeholder='Password' className="mb-3" type="password"/>
            <Button disabled={!formValid} onClick={userLoginPassword} variant="primary" >Next</Button>
          </Card.Body>
        </Card>
        </div>
      );
}

export default Login