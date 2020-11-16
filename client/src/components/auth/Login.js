import React, { useState, useContext, useEffect, Link } from 'react';
import AuthContext from '../../context/auth/authContext';
import AlertContext from '../../context/alert/alertContext';
import loginLogoImage from '../VendorDashboard/images/Logo.png';

const Login = props => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;
  const { login, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/');
    }

    if (error === 'Invalid Credentials') {
      setAlert(error, 'danger');
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  const { email, password } = user;

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (email === '' || password === '') {
      setAlert('Please fill in all fields', 'danger');
    } else {
      login({
        role:'merchant',
        email,
        password
      });
    }
  };

  return (
   
    <div class="form">
      {/* <img className="logoLogin" src={loginLogoImage}/> */}
      
      <h1>
         Login As Vendor
      </h1>
      <form onSubmit={onSubmit}>
        <div class='form-group'>
         <i class="fas fa-envelope"></i>
           <input className='txtEmail'
            id='email'
           
            name='email'
            placeholder="Email"
            value={email}
            onChange={onChange}
            required
          />
        </div>
        <div class='form-group'>
           <i class="fas fa-lock"></i>
          <input className='txtPassword'
            id='password'
            type="password"
            name='password'
            placeholder="Password"
            value={password}
            onChange={onChange}
            required
          />
        </div>
        <input
          type='submit'
          value='Login'
          className='loginBtn'
        />
        <div class="link">
          <a href="#">Forget password</a> 
          <br/>
        
        </div>
        
      </form>
    </div>
    



  );
};

export default Login;
