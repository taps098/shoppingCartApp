import React from 'react';
import { Layout, Menu, Breadcrumb,Dropdown} from 'antd';
import { DownOutlined } from '@ant-design/icons';
import './NavigationBar.css';
import ShoppingCart from '../ShoppingCart/ShoppingCart';


const { Header, Content, Footer } = Layout;


class NavigationBar extends React.Component{
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <>
        <Layout className="layout">
          <Header>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
              <Menu.Item key="1" style={{fontSize:'15px', fontWeight:'bold'}}>Home</Menu.Item>
              <Menu.Item stylr={{float:'right'}} key="2"><ShoppingCart NumberOfItems={this.props.cartItems}/></Menu.Item>
            </Menu>
          </Header>
        </Layout>
      </>
    );
  }
}
export default NavigationBar;