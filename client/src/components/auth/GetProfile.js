import React, { Fragment, useContext, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Spinner from '../layout/Spinner';
import Authcontext from '../../context/auth/authContext'

 const GetProfile = () => {
  const Authcontext = useContext(Authcontext);
  const {loadUser}= Authcontext;

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  }, []);

  
  return (
    <div>
      
    </div>
  )
}
export default GetProfile;
