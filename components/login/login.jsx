import React, { useState } from 'react';
import Router from 'next/router';
import cookie from 'js-cookie';

const axios = require('axios');

const Login = () => {
  const [loginError, setLoginError] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    // call api

    axios.post('http://localhost:3001/login/', { email: '@prontonmail.com', password: '123456' })
      .then((response) => {
        console.log(response);
      }, (error) => {
        console.log(error);
      });
  }
  return (
    <form onSubmit={handleSubmit}>
      <p>Login</p>
      <input
        name="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        name="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input type="submit" value="Submit" />
      {loginError && <p style={{ color: 'red' }}>{loginError}</p>}
    </form>
  );
};

export default Login;
