import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Register from './components/Register';
import { Route, NavLink } from 'react-router-dom';
import { Button, Spinner } from 'reactstrap';
import Login from './components/Login';



function App() {
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
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/register'>Register</NavLink>
        <NavLink to='/login'>Login</NavLink>
        <Route exact path='/'>
          {!loading ? <Button color="warning" onClick={handleGetUsers}>Get Users</Button>
          : <Spinner color="warning" />
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
        
      </header>
    </div>
  );
}

export default App;
