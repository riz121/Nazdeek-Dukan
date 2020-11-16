import React, { Fragment, Component } from "react";
import { Link, Route } from "react-router-dom";
import "antd/dist/antd.css";
import "./index.css";
import { Card, Button } from "react-bootstrap";
import sampleImage from "../images/Logo2.png";
import Modal from "react-awesome-modal";
import { Form, Input,Upload, message } from "antd";
import { UploadOutlined } from '@ant-design/icons';
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


class Products extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
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
    var BtnAddCat = document.getElementById('add-category');
    var BtnItmDetails = document.getElementById('item-Desc-Modal');
    const cardInfo = [
      { Cimage: { sampleImage }, title: "Product Title", text: "Product Description" },
      { Cimage: { sampleImage }, title: "Product Title", text: "Product Description" },
      { Cimage: { sampleImage }, title: "Product Title", text: "Product Description" },
      { Cimage: { sampleImage }, title: "Product Title", text: "Product Description" },
      { Cimage: { sampleImage }, title: "Product Title", text: "Product Description" },
      { Cimage: { sampleImage }, title: "Product Title", text: "Product Description" },
      { Cimage: { sampleImage }, title: "Product Title", text: "Product Description" },
    ];
    const rendorCard = (card, index) => {
      return (
        <Fragment>
          <div className="mainCategories">
            <Card style={{ width: "15rem" }} key={index} className="box">
              <Card.Img variant="top" src={sampleImage} alt="Product Image" />
              <Card.Body className="cardDesc">
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>{card.text}</Card.Text>
                
                <Button variant="primary" text-align="Center">
                  Details
                </Button>
              </Card.Body>
            </Card>
          </div>
        </Fragment>
      );
    };


    return (
      <Fragment>
        <div className="sticky-container">
          <h3 className="card-title">List of Products</h3>
          <Link to="./Products">
            <button
              className="btn btn-success float-right"
              onClick={() => this.openModal()}
            >
              Add Product
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

        <div className="grid">{cardInfo.map(rendorCard)}</div>

        <div id="add-product" className="Modal-Box">
          <section className="addProduct-popup">
            <Modal 
              visible={this.state.visible}
              effect="fadeInRight"
              onClickAway={() => this.closeModal()}
            >
              <div>
                <Form className="Modal-form">
                  <h3>Add Product</h3>
                  <Form.Item
                    label="Name "
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Input  />
                  </Form.Item>
                  <Form.Item
                    label="Description "
                    rules={[
                      {
                        required: false,
                      },
                    ]}
                  >
                    <Input  />
                  </Form.Item>
                  <Form.Item
                    label="Quantity "
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Input  />
                  </Form.Item>

                  <Form.Item
                    label="Unit Price "
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Input  />
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

                  <Form.Item >
                    <Button variant="success" >
                      Add Product
                    </Button>
                    <Button href="javascript:void(0);" variant="danger" onClick={() => this.closeModal()} >
                      Cancel
                    </Button>
                  </Form.Item>
                  
                </Form>
              </div>
            </Modal>
          </section>
       </div>
      </Fragment>
    );
  }
}

export default Products;
