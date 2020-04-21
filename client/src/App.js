import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Register from './components/Register';
import Login from './components/Login';
import { Route, NavLink } from 'react-router-dom';
import { Button, Spinner } from 'reactstrap';
import './App.css'
import  { HeaderDiv }  from './styles/Styled.js';
// v5 of styled looks like it has a react bug.



const App = () => {
  const [usersMounted, setUsersMounted] = useState(false)
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState();

  const handleGetUsers = () =>{
    setLoading(true);
    axios.get('http://localhost:5000/api/users')
    .then(res => {
      console.log(res)
      setLoading(false);
      setUsersMounted(true);
    })
    .catch(err =>{
      console.log(err)
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>SHEILD HQ</h1>
      </header>
      <nav className="navigation">
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/register'>Register</NavLink>
        <NavLink to='/login'>Login</NavLink>
      </nav>
      <Route exact path='/'>
        {!loading ? 
        <div className='grab-users'>
           <Button color="danger" onClick={handleGetUsers}>Get Users</Button> 
           </div>
        : <div className='grab-users'>
          <Spinner color="warning" />
          </div>
        }
        {!usersMounted ? <div></div>
        : users.map(user =>{
          return <h2>{user.username}</h2>
        })
        }
      </Route>
      <Route exact path='/register'>
        <Register />
      </Route>
      <Route path='/login'>
        <Login />
      </Route>
    </div>
  );
}

export default App;
