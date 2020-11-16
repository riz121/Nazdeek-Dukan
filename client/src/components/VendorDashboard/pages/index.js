import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  GiftOutlined,
  TagOutlined,
  ReadOutlined,
  BookOutlined ,
  EditOutlined,
  ShoppingCartOutlined
} from "@ant-design/icons";
import Chart from "./chart";
import Profile from "./profileinfo";
import Home from "./ItemMenu";
import Orders from "./Orders";
import Viewuser from "./Viewuser";
import ItemMenu from "./ItemMenu";
import CartItem from "./CartItem";
import Categories from "./Categories";
import Products from "./Products";
import Coupons from "./Coupons";
import Booking from "./Booking";
import Reports from "./Reports";
import logo from "../images/Logo.png";



const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class SiderDemo extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="dashboard-logo">
           <img className="naz-logo" src={logo}/> 
           </div>

          <Menu theme="dark" defaultSelectedKeys={["0"]} mode="inline">
            <Menu.Item key="0" icon={<PieChartOutlined />}>
              <Link to="/"> Dashboard </Link>
            </Menu.Item>

            <Menu.Item key="1" icon={<UserOutlined />}>
              <Link to="/profile"> Profile Info </Link>
            </Menu.Item>

            <Menu.Item key="2" icon={<GiftOutlined />}>
              <Link to="/ItemMenu"> Products </Link>
            </Menu.Item>

          
              <Menu.Item key="3" icon={<ShoppingCartOutlined />}>
                <Link to="/Orders"> Orders </Link>
              </Menu.Item>

              <Menu.Item key="4" icon={<TagOutlined />}>
                <Link to="/Coupons"> Coupons </Link>
              </Menu.Item>

              <Menu.Item key="5" icon={<ReadOutlined />}>
                <Link to="/Reports"> Reports </Link>
              </Menu.Item>
         
              <Menu.Item key="6" icon={<BookOutlined />}>
                <Link to="/Booking"> Booking </Link>
              </Menu.Item>



            <Menu.Item key="7" icon={<EditOutlined />}>
              Change Password
            </Menu.Item>
          </Menu>
        </Sider>

        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: "0 16px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>Vendor</Breadcrumb.Item>
             
            </Breadcrumb>

            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              <Fragment>
                <Switch>
                  <Route exact path="/" component={Chart} />
                  <Route exact path="/profile" component={Profile} />
                  <Route exact path="/ItemMenu" component={ItemMenu} />
                  <Route exact path="/Orders" component={Orders} />
                  <Route exact path="/Booking" component={Booking} />
                  <Route exact path="/Viewuser" component={Viewuser} />
                  <Route exact path="/CartItem" component={CartItem} />
                  <Route exact path="/Categories" component={Categories} />
                  <Route exact path="/Products" component={Products} />
                  <Route exact path="/Coupons" component={Coupons} />
                  <Route exact path="/Reports" component={Reports} />
                  
                </Switch>
              </Fragment>
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Smart Retailing System @2020 Final Year Project
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default SiderDemo;
