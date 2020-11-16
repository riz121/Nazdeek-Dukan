import React, { Profiler, Fragment,useContext, useEffect } from "react";
import AdminProfile from './AdminProfile.js'
import ReactDOM, { render } from 'react-dom';
import 'antd/dist/antd.css';
import { Menu, Skeleton } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import SkeletonButton from "antd/lib/skeleton/Button";
import SkeletonImage from "antd/lib/skeleton/Image";
import AuthContext from '../../context/auth/authContext'
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
} from 'antd';
import Password from "antd/lib/input/Password";
import { Route } from "react-router-dom";
import PrivateRoute from "../routing/PrivateRoute.js";
import { Context } from "express-validator/src/context";

const { SubMenu } = Menu;

const Content=()=> {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, logout, user, loadUser } = authContext;
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
                <li className="breadcrumb-item active">Admin</li>
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
    <Fragment>
      <div className="Personal-Info" id='1'>
        <br/>
        <Form id="adminForm"
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
         Hello {user && user.name}
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

  </Fragment>
          {/* /.row */}
        </div>
        {/* /.container-fluid */}
      </div>
      {/* /.content */}
      
    </div>
      
  );

  
}
export default Content;
