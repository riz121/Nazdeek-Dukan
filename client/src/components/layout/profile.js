import React, { Fragment, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
import ContactContext from '../../context/contact/contactContext';

const profile = () => {
  const authContext = useContext(AuthContext);
  const contactContext = useContext(ContactContext);

  const { isAuthenticated, logout, user, loadUser } = authContext;
  const { clearContacts } = contactContext;

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  }, []);







  return (
    <div className="content-wrapper">
      {/* Content Header (Page header) */}
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0 text-dark">User Profile</h1>
            </div>
            {/* /.col */}
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item active">Vendor</li>
              </ol>
            </div>
            {/* /.col */}
          </div>
          {/* /.row */}
        </div>
        {/* /.container-fluid */}
      </div>
      {/* /.content-header */}
      {/* Main content */}
      
      


      <div className="content">
      <Menu mode="horizontal">
          <Menu.Item icon={<SkeletonImage/>} >
            Personal Information
          </Menu.Item>
          
          
      </Menu>

          <div className="container-fluid">
              
      <div className="Personal-Info" id='1'>
        <br/>
        <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 10,
        }}
        layout="horizontal"
        initialValues={{
          
        }}
        
        
      >
        {/* <Form.Item label="Form Size" name="size">
          <Radio.Group>
            <Radio.Button value="small">Small</Radio.Button>
            <Radio.Button value="default">Default</Radio.Button>
            <Radio.Button value="large">Large</Radio.Button>
          </Radio.Group>
        </Form.Item> */}
  
     
        <Form.Item label="First Name ">
       {/* <Input>{user && user.name}</Input>  */}
        </Form.Item>
        <Form.Item label="Last Name ">
          <Input/>
        </Form.Item>

        <Form.Item label="Date of Birth">
          <DatePicker />
        </Form.Item>

        <Form.Item label="Phone Number">
          <Input type="Number" />
        </Form.Item>

        <Form.Item label="Personal Email ">
          <Input/>
        </Form.Item>

        <Form.Item label="Photo ">
          <Button color="Blue">Change Photo</Button>
        </Form.Item>

        <Form.Item label="Gender ">
          <Select>
            <Select.Option value="Male">Male</Select.Option>
            <Select.Option value="Female">Female</Select.Option>
            <Select.Option value="Other">Chakka</Select.Option>
          </Select>
        </Form.Item>

        {/* <Form.Item label="Qualification">
          <TreeSelect
            treeData={[
              {
                title: 'Intermediate',
                value: 'Intermediate',
                children: [
                  {
                    title: 'Pre-Engineering',
                    value: 'Pre-Engineering',
                  },
                  {
                    title: 'Pre-Medical',
                    value: 'Pre-Medical',
                  },
                ],
              },
            ]}
          />
        </Form.Item> */}


        <Form.Item label="Qualification">
          <Cascader
            options={[
              {
                value: 'Secondary',
                label: 'Secondary',
              },
              {
                value: 'Matriculated',
                label: 'Matriculated',
                children: [
                  {
                    value: 'Biology',
                    label: 'Biology',
                  },
                ],
              },
              {
                value: 'Intermediate',
                label: 'Intermediate',
                children: [
                  {
                    value: 'Pre-Engineering',
                    label: 'Pre-Engineering',
                  },
                  {
                    value: 'Pre-Medical',
                    label: 'Pre-Medical',
                  },
                  {
                    value: 'Computer Science',
                    label: 'Computer Science',
                  },
                ],
              },
              {
                value: 'Bachelors',
                label: 'Bachelors',
                children: [
                  {
                    value: 'Computer Science',
                    label: 'Computer Science',
                  },
                  {
                    value: 'Software Engineering',
                    label: 'Software Engineering',
                  },
                  
                ],
              },

            ]}
          />
        </Form.Item>

       <Form.Item label="Marital Status">
         Non-Married    <Switch />    Married
        </Form.Item>

        <Form.Item >
          <Button color="Blue">Done</Button>
        </Form.Item>
        
      </Form>
  </div>

  
          {/* /.row */}
        </div>
        {/* /.container-fluid */}
      </div>
      {/* /.content */}
    
      <ul>{isAuthenticated ? authLinks : guestLinks}</ul>
      </div>
  );
};


export default profile;
