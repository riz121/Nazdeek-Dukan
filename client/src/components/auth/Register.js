import React, { useState, useContext, useEffect, Link } from 'react';
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';

const Register = props => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;
  const { register, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/');
    }

    if (error === 'User already exists') {
      setAlert(error, 'danger');
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const { name, email, password, password2 } = user;

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (name === '' || email === '' || password === '') {
      setAlert('Please enter all fields', 'danger');
    } else if (password !== password2) {
      setAlert('Passwords do not match', 'danger');
    } else {
      register({
        role:'user',
        name,
        email,
        password,
        phone: 1234567890
      });
    }
  };

  return (
    // <div className='form-container'>
    //   <h1>
    //     Account <span className='text-primary'>Register</span>
    //   </h1>
    //   <form onSubmit={onSubmit}>
    //     <div className='form-group'>
    //       <label htmlFor='name'>Name</label>
    //       <input
    //         id='name'
    //         type='text'
    //         name='name'
    //         value={name}
    //         onChange={onChange}
    //         required
    //       />
    //     </div>
    //     <div className='form-group'>
    //       <label htmlFor='email'>Email Address</label>
    //       <input
    //         id='email'
    //         type='email'
    //         name='email'
    //         value={email}
    //         onChange={onChange}
    //         required
    //       />
    //     </div>
    //     <div className='form-group'>
    //       <label htmlFor='password'>Password</label>
    //       <input
    //         id='password'
    //         type='password'
    //         name='password'
    //         value={password}
    //         onChange={onChange}
    //         required
    //         minLength='6'
    //       />
    //     </div>
    //     <div className='form-group'>
    //       <label htmlFor='password2'>Confirm Password</label>
    //       <input
    //         id='password2'
    //         type='password'
    //         name='password2'
    //         value={password2}
    //         onChange={onChange}
    //         required
    //         minLength='6'
    //       />
    //     </div>
    //     <input
    //       type='submit'
    //       value='Register'
    //       className='btn btn-primary btn-block'
    //     />
    //   </form>
    // </div>

    <div class="register-form">
      <h3>
        Account <span>Register</span>
      </h3>
      <form onSubmit={onSubmit}>
        <div class='reg-form-group'>
         <i class="fas fa-user"></i>
          <input
            id='name'
            type='text'
            placeholder="User Name"
            name='name'
            value={name}
            onChange={onChange}
            required
          />
        </div>
        <div class='form-group'>
         <i class="fas fa-envelope"></i>

          <input
            id='email'
            type='email'
            name='email'
            placeholder="Email"
            value= {email}
            onChange={onChange}
            required
          />
        </div>
        <div class='form-group'>
         <i class="fas fa-lock"></i>

          <input
            id='password'
            type='password'
            name='password'
            placeholder="Password"
            value={password}
            onChange={onChange}
            required
            minLength='6'
          />
        </div>
        <div class='form-group'>
         <i class="fas fa-lock"></i>

          <input
            id='password2'
            type='password'
            name='password2'
            placeholder="Confirm Password"
            value={password2}
            onChange={onChange}
            required
            minLength='6'
          />
        </div>
        <input
          type='submit'
          value='Register'
          class='registerbtn'
        />
        <Link>
          <div class="link">
                <a>Have An Account?</a>
        </div>
        </Link>
      </form>
    </div>

  );
};

export default Register;
