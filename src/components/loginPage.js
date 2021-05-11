import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { ActionCreators } from '../action/action';
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../action/action'

function LoginPage({ history }) {

  const [username, setUsername] = useState()

  const [password, setPassword] = useState()

  const dispatch = useDispatch();

  const data = useSelector(state => state)

  function validateForm() {
    if (data.user.user.isAuth == true) {
      history.push('/employementListPage')
      dispatch(login({
        isAuth: false
      }))
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(login({
      username: username,
      password: password,
      isAuth: false
    }))
  }

  return (

    <div className="Login">
      <div class="wrapper">
        <form class="form-signin" onSubmit={(e) => handleSubmit(e)}>
          <Form.Group size="lg" controlId="username">
            <Form.Label>Username :</Form.Label>
            <Form.Control
              autoFocus
              type="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>
          <Form.Group size="lg" controlId="password">
            <Form.Label>Password :</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button className='button' type="submit" onClick={validateForm()} >
            Login
          </Button>
        </form>
      </div>
    </div>

  )
}



export default LoginPage