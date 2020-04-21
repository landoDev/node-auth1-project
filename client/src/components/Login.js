import React, { useState, useEffect } from 'react';
import { Button } from 'reactstrap';

const Login = () => {
    const [login, setLogin] = useState();

    return (
        <form className='register-form'>
            <label>Username</label>
            <input />
            <label>Password</label>
            <input />
            <Button>Login</Button>
        </form>
    )
}

export default Login;