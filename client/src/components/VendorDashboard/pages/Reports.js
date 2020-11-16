import React, { Fragment, Component } from "react";
import { Link, Route } from "react-router-dom";
import "antd/dist/antd.css";
import "./index.css";
import "antd/dist/antd.css";
import { Statistic, Row, Col, Button } from "antd";
import { LikeOutlined } from '@ant-design/icons';

class Reports extends React.Component {
  render() {
    return (
      <Fragment>
        <Row gutter={16}>
          <Col span={12}>
            <Statistic title="Active Users" value={112893} />
          </Col>
          <Col span={12}>
            <Statistic
              title="Account Balance (CNY)"
              value={112893}
              precision={2}
            />
            <Button style={{ marginTop: 16 }} type="primary">
              Recharge
            </Button>
          </Col>
        </Row>
        <br/><br/>
        <Row gutter={16}>
          <Col span={12}>
            <Statistic
              title="Feedback"
              value={1128}
              prefix={<LikeOutlined />}
            />
          </Col>
          <Col span={12}>
            <Statistic title="Unmerged" value={93} suffix="/ 100" />
          </Col>
        </Row>
        ,
      </Fragment>
    );
  }
}

export default Reports;
