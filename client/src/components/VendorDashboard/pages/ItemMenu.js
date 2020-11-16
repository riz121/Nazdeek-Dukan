import React, { Fragment, Component } from "react";
import { Link, Route } from "react-router-dom";
import "antd/dist/antd.css";
import "./index.css";
import "antd/dist/antd.css";
import { Button, Checkbox, Input } from "antd";
import { Form } from "react-bootstrap";


function editTableItem() {
  console.log("I am clickedd....");
}

class ItemMenu extends React.Component {
  constructor(props) {
    super(props);
    this.setState(
      {
       disabled: true
      }
    );
  }

  render() {
    return (
      <Fragment>
        <div className="divSearch"></div>
        <div className="sticky-container">
          <h3 className="card-title">Your Products</h3>
          <Link to="/Categories">
            <button className="btn btn-success float-right">Categories</button>
          </Link>

          <Link to="/cart">
            <button
              className="btn btn-primary float-right"
              style={{ marginRight: "10px" }}
            >
              Item Sales
            </button>
          </Link>
        </div>

        <div className="MailItemList">
          <Form disabled="true">
            <table name="table table-striped table-bordered" id="itemTable">
              <tbody>
                <tr>
                  <th>S.No.</th>
                  <th>Item Name</th>
                  <th>Quantity</th>
                  <th>Unit Price</th>
                </tr>
                <tr>
                  <th scope="row">1</th>
                  <td className="tabledit-view-mode">
                    <Input
                      className="tabledit-input form-control input-sm"
                      type="text"
                      name="itmName"
                      value="Potatoes"
                    />
                  </td>
                  <td className="tabledit-view-mode">
                    <input
                      className="tabledit-input form-control input-sm fill"
                      type="text"
                      name="itmQty"
                      value="25 KG"
                    />
                  </td>
                  <td className="tabledit-view-mode">
                    <input
                      className="tabledit-input form-control input-sm fill"
                      type="text"
                      name="itmPrice"
                      value="40"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="tableControl" align="Center">
              <Button type="primary" htmlType="submit">
                Save
              </Button>
              <Button type="ghost" name="itmEditBtn" onClick={editTableItem}>
                Edit
              </Button>
            </div>
          </Form>
        </div>
      </Fragment>
    );
  }
}
export default ItemMenu;
