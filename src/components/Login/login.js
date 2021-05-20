import { useState } from 'react';
import PropTypes from 'prop-types';
import './login.css'

async function loginUser(credentials){
    return fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
    .then(data => data.json())
}


export default function Login({ setToken }) {
    const [username, setUserName] =useState();
    const [Password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
            username,
            Password
        });
        setToken(token);
    }
    return(
        <div>
            <div className="login-wrapper">
              <h2>Please Log In</h2>
                <form onSubmit = {handleSubmit} className = 'form'>
                    <label className='username'>
                        <p>Username</p>
                        <input className="input" type="text" onChange={e => setUserName(e.target.value)}/>
                    </label>
                    <label className='password'>
                        <p>Password</p>
                        <input className="input" type="password" onChange={e => setPassword(e.target.value)} />
                    </label>
                    <div > 
                        <button type="submit" className='button'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
        
    )
    
}


Login.propTypes = {
    setToken: PropTypes.func.isRequired
}