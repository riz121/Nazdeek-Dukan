import React ,{Component} from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Card, Col, Row } from 'antd';

class card extends Component{
   render(){

    return(
      <div className="site-card-wrapper ">
        <label>ORDERS</label>
      <Row gutter={6}>
        <Col span={4} >
          <Card title="On Hold" bordered={false} className="one">
            10
          </Card>
        </Col>
        <Col span={4}>
          <Card title="Completed" bordered={false} className="two">
            64
          </Card>
        </Col>
        <Col span={4}>
          <Card title="Processing" bordered={false} className="three">
            05
          </Card>
        </Col>
        <Col span={4}>
          <Card title="Dispatched" bordered={false} className="four">
            08
          </Card>
        </Col>
        <Col span={4}>
          <Card title="Delivered" bordered={false} className="five">
            48
          </Card>
        </Col>
        <Col span={4}>
          <Card title="Total" bordered={false} className="six">
           135 
          </Card>
        </Col>
      </Row>
    </div>
 
    )
   }
}
 export default card;