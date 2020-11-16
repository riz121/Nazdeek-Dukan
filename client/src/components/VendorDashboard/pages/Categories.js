import React, { Fragment, Component, useState, useContext, useEffect  } from "react";
import { Link, Route } from "react-router-dom";
import "antd/dist/antd.css";
import "./index.css";
import { Card, Button } from "react-bootstrap";
import sampleImage from "../images/Logo2.png";
import Modal from "react-awesome-modal";
import { Form, Input,Upload, message} from "antd";
import Products from "./Products";
import TextArea from "antd/lib/input/TextArea";
import { UploadOutlined } from '@ant-design/icons';
import AlertContext from '../../../context/alert/alertContext';
import AuthContext from '../../../context/auth/authContext';
import Vendor from '../../../context/vendor/vendor'
import Axios from 'axios'

const props = {
  name: 'file',
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};



class Categories extends React.Component {
  

  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      visible: false,
      name: "",
      description: "", 
      published: false,
      submitted: false
    };
    this.state={
      category:[]
    }

  }

  onChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    });
  }
  onSubmit(e) {
    e.preventDefault();
    const obj = {
      name: this.state.name,
      description: this.state.description
      
    };
    Axios.post('/api/merchant/addCategory', obj)
        .then(res => console.log(res.data));
    
    this.setState({
      name: '',
      description:'',
    
    })
  }
  componentDidMount(){
    Axios.get('/api/user/viewAllCategory')
      .then(response => {
        this.setState({ category: response.data });
      })
      .catch(function (error) {
        console.log(error);
      })
  }



      
  openModal() {
    this.setState({
      visible: true,
    });
  }

  closeModal() {
    this.setState({
      visible: false,
    });
  }

  

  render() {
    
    var BtnAddCat = document.getElementById("add-category");
    var BtnItmDetails = document.getElementById("item-Desc-Modal");
    const cardInfo = [
      
      { Cimage: { sampleImage }, title: "Title", text: "Description" },
      { Cimage: { sampleImage }, title: "Title", text: "Description" },
      { Cimage: { sampleImage }, title: "Title", text: "Description" },
      { Cimage: { sampleImage }, title: "Title", text: "Description" },
      { Cimage: { sampleImage }, title: "Title", text: "Description" },
      { Cimage: { sampleImage }, title: "Title", text: "Description" },
    ];
    const rendorCard = (card, index) => {
      return (
        
        <Fragment>  
          <div className="mainCategories">
            <Card style={{ width: "15rem" }} key={index} className="box">
              <Card.Img variant="top" src={sampleImage} alt="Product Image" />
              <Card.Body className="cardDesc">
              <Card.Title></Card.Title>
                <Card.Text>{card.text}</Card.Text>
                <Link to="/Products">
                  <Button variant="primary" text-align="Center">
                    Show Products
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
    \
        </Fragment>
      );
    };

    return (

     

      <Fragment>
        <div className="sticky-container">
          <h3 className="card-title">Product Categories</h3>
          <Link to="./Categories">
            <button
              className="btn btn-success float-right"
              onClick={() => this.openModal()}
            >
              Add Category
            </button>
          </Link>

          <Link to="/cart">
            <button
              className="btn btn-primary float-right"
              style={{ marginRight: "10px" }}
            >
              Extra
            </button>
          </Link>
        </div>

        <div className="grid">{cardInfo.map(rendorCard)}
        </div>

        <div id="add-category" className="Modal-Box">
          <section className="addCategory-popup">
            <Modal
              visible={this.state.visible}
              effect="fadeInRight"
              onClickAway={() => this.closeModal()}
            >
              <div>
                <form className="Modal-form" onSubmit={this.onSubmit}>
                  <h3>Add Category</h3>
                  <Form.Item
                    label="Name "
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Input 
                     type="text" 
                     className="form-control" 
                     value={this.state.name}
                     onChange={this.onChangeName}
                    />
                  </Form.Item>
                  <Form.Item
                    label="Description "
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Input
                    type="text" 
                    className="form-control"
                    value={this.state.description}
                    onChange={this.onChangeDescription}
                    />
                  </Form.Item>
                  <Form.Item
                    label="Image "
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                  <Upload {...props}>
                    <Button>
                      <UploadOutlined /> Click to Upload
                    </Button>
                  </Upload>,
                  </Form.Item>

                  <Form.Item>
                    <Button variant="success" type= "submit"value="Register">Add category</Button>
                    <Button
                      href="javascript:void(0);"
                      variant="danger"
                      onClick={() => this.closeModal()}
                    >
                      Cancel
                    </Button>
                  </Form.Item>
                </form>
              </div>
            </Modal>
          </section>
        </div>
      </Fragment>
    );
  }
}

export default Categories;
