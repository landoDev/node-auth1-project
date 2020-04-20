import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Register from './components/Register';
import { Route } from 'react-router-dom';
import { Button, Spinner } from 'reactstrap';
import { render } from 'react-dom';


function App() {
  const [usersMounted, setUsersMounted] = useState(false)
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState();

  const handleGetUsers = e =>{
    setLoading(true);
    useEffect(()=>{
      axios.get('http://localhost:5000/api/users')
      .then(res => {
        console.log(res)
        setLoading(false);
        setUsersMounted(true);
      })
      .catch(err =>{
        console.log(err)
      })
    }, [])
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>SHEILD HQ</h1>
        <Route exact path='/'>
          {!loading ? <Button color="warning" onClick={handleGetUsers}>Get Users</Button>
          : <Spinner color="warning" />
          }
          {!usersMounted ? <div></div>
          : usersMounted.map(user =>{
            return <h2>{user.username}</h2>
          })
          }
        </Route>
        <Route exact path='/register'>
          <Register />
        </Route>
        <Route exact path='/login'>
          
        </Route>
        
      </header>
    </div>
  );
}

export default App;
