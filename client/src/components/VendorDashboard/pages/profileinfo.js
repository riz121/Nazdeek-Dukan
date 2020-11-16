import React, { Fragment, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import AuthContext from "../../../context/auth/authContext";
import ContactContext from "../../../context/contact/contactContext";
import "antd/dist/antd.css";
import "./index.css";
import { Form, Input, InputNumber, Button, Label } from "antd";
import ClearableLabeledInput from "antd/lib/input/ClearableLabeledInput";
import FormItem from "antd/lib/form/FormItem";

const Demo = () => {
  const authContext = useContext(AuthContext);
  const contactContext = useContext(ContactContext);

  const { isAuthenticated, logout, user, loadUser } = authContext;
  const { clearContacts } = contactContext;

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  }, []);

  const onLogout = () => {
    logout();
    clearContacts();
  };
  const layout = {
    labelCol: {
      span: 4,
    },
    wrapperCol: {
      span: 8,
    },
  };
  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not validate email!",
      number: "${label} is not a validate number!",
    },
    number: {
      range: "${label} must be between ${min} and ${max}",
    },
  };
  const onFinish = (values) => {
    console.log(values);
  };

  // function editInfo(record){
  //   const editable = isEditing(record);

  // }
  // this.state = {value: ''};
  // this.handleChange = this.handleChange.bind(this);

  const editingKey = "true";
  const authLinks = (
    <Fragment>
      <Form
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
      >
        {isAuthenticated}
        <div className="G-Form-Container">
        <h1>Your Information</h1>
      <div className="G-Form-Group">
        <label>Your Name </label>
        <Input type="text" name="name" value={user && user.name} />
        <label>Email Address </label>
        <Input type="email" name="email" value={user && user.email} />
        <label>Phone Number</label>
        <Input type="number" name="phone" value={user && user.phone} />
        <label>NIC Number </label>
        <Input type="text" name="cnic" value={user && user.cnic} />

      <div className="G-Form-Button">
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit">
            UpdateInfo
          </Button>
          <Button type="ghost">Edit</Button>
        </Form.Item>
        </div>
        </div>
        </div>
      </Form>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </Fragment>
  );

  return (
    <div>
      <ul>{isAuthenticated ? authLinks : guestLinks}</ul>
    </div>
  );
};

export default Demo;
