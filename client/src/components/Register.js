import React, { useState, useEffect } from 'react';
import { Button } from 'reactstrap';

const Register = () => {
    const [newUser, setNewUser] = useState();

    return (
        <form className='register-form'>
            <label>Username</label>
            <input />
            <label>Password</label>
            <input />
            <Button>Register</Button>
        </form>
    )
}

export default Register;