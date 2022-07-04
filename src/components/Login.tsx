import React from 'react';
import {SyntheticEvent, useState} from 'react';
import axios from 'axios';
import {RouteComponentProps} from 'react-router';
import { setTokenSourceMapRange } from 'typescript';

interface Props {
    history: RouteComponentProps['history']
}
 

const Login = ({history}: Props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const submitHandler = async (e: SyntheticEvent) => {
        e.preventDefault();
    }

    await fetch('https://twentyfiveftfromtherim.herokuapp.com/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        credentials: 'include',
        body: JSON.stringify({
            name, 
            email, 
            password,
        }),
    })

    history.push('/')
}
    return (
        <>
        <h1>Login</h1>
        <form onSubmit={submitHandler}>
            <label>Name</label>
            <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}/>
        </form>
        </>
  
    )
}

export default Login;