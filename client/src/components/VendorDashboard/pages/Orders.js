import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Form, Input, InputNumber, Button } from 'antd';
import { Table, Switch, Radio, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';


const columns = [
  {
    title: 'Order ID',
    dataIndex: 'orderID',
  },
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
  {
    title: 'Quantity',
    dataIndex: 'Qty',
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: 'Items',
    dataIndex: 'items',
    filters: [
      {
        text: 'potatoes',
        value: '5 KG Potatoes',
      },
      {
        text: 'Carrots',
        value: '2 KG Carrots',
      },
    ],
    onFilter: (value, record) => record.address.indexOf(value) === 0,
  },
  {
    title: 'Action',
    key: 'action',
    sorter: true,
    render: () => (
      <Space size="middle">
        <a>Delete</a>
        <a className="ant-dropdown-link">
          More actions <DownOutlined />
        </a>
      </Space>
    ),
  },
];

const data = [];
for (let i = 1; i <= 10; i++) {
  data.push({
    key: i,
    orderID: '00021',
    name: 'Ali Imran',
    address: `XYZ Flat, ABC Society`,
    Qty: `7`,
    items: '5 KG Potatoes, 2 KG Carrots',
   
    description: `Big potatoes for making fries and red carrots for juice.`,
  });
}

const expandable = { expandedRowRender: record => <p>{record.description}</p> };
const title = () => 'Here is title';
const showHeader = true;
const footer = () => '';
const pagination = { position: 'bottom' };





class Orders extends React.Component{

  state = {
    bordered: false,
    loading: false,
    pagination,
    size: 'default',
    expandable,
    title: undefined,
    showHeader,
    footer,
    rowSelection: {},
    scroll: undefined,
    hasData: true,
    tableLayout: undefined,
    top: 'none',
    bottom: 'bottomRight',
  };

  render(){

    const { xScroll, yScroll, ...state } = this.state;

    const scroll = {};
    if (yScroll) {
      scroll.y = 240;
    }
    if (xScroll) {
      scroll.x = '100vw';
    }

    const tableColumns = columns.map(item => ({ ...item, ellipsis: state.ellipsis }));
    if (xScroll === 'fixed') {
      tableColumns[0].fixed = true;
      tableColumns[tableColumns.length - 1].fixed = 'right';
    }

    return(
      <>
      <Table
          {...this.state}
          pagination={{ position: [this.state.top, this.state.bottom] }}
          columns={tableColumns}
          dataSource={state.hasData ? data : null}
          scroll={scroll}
        />
        </>

    );
  }

}

export default Orders;





// const layout = {
//   labelCol: {
//     span: 4,
//   },
//   wrapperCol: {
//     span: 8,
//   },
// };
// const validateMessages = {
//   required: '${label} is required!',
//   types: {
//     email: '${label} is not validate email!',
//     number: '${label} is not a validate number!',
//   },
//   number: {
//     range: '${label} must be between ${min} and ${max}',
//   },
// };

// const Demo = () => {
//   const onFinish = values => {
//     console.log(values);
//   };

//   return (
//     <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
//       <Form.Item
//         name={['user', 'name']}
//         label="Name"
//         rules={[
//             {
//               required: true,
//             },
//           ]}
//       >
//         <Input />
//       </Form.Item>
//       <Form.Item
//         name={['user', 'email']}
//         label="Email"
//         rules={[
//           {
//             type: 'email',
//             required: true,
//           },
//         ]}
//       >
//         <Input />
//       </Form.Item>
//       <Form.Item name={['user', 'phone']} label="Phone"
//           rules={[
//             {
//               required: true,
//             },
//           ]}
//       >
//         <Input />
//       </Form.Item>
//       <Form.Item name={['user', 'password']} label="Password"
//           rules={[
//             {
//               required: true,
//             },
//           ]}
//       >
//         <Input />
//       </Form.Item>
//       <Form.Item name={['user', 'cnic']} label="Cnic"
//           rules={[
//             {
//               required: true,
//             },
//           ]}
//       >
//         <Input />
//       </Form.Item>
    
//       <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
//         <Button type="primary" htmlType="submit">
//           Add Vendor
//         </Button>
//       </Form.Item>
//     </Form>
//   );
// };

// export default Demo;