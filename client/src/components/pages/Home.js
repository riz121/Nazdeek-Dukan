import React from 'react';
import Contacts from '../contacts/Contacts';
import ContactForm from '../contacts/ContactForm';
import ContactFilter from '../contacts/ContactFilter';
import Menu from '../Vendor/Menu'

const Home = () => {
  return (
    <div className='grid-2'>
      <div>
      <Menu />
      </div>
      
      <div>
        <ContactForm />
      </div>
      <div>
        <ContactFilter />
        <Contacts />
      </div>
    </div>
    
  );
};

export default Home;