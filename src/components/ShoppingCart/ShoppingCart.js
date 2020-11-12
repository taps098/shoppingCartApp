import React from 'react';
import { Layout, Menu, Breadcrumb,Dropdown} from 'antd';
import {ShoppingCartOutlined,DownOutlined} from '@ant-design/icons';
import {connect} from 'react-redux';


class ShoppingCart extends React.Component{
  constructor(props) {
    super(props);
  }
  render() {
  console.log('in shopping cart name : ',this.props.shoppingItems.items);
    // const menu = (
    //   <Menu>
    //     <Menu.Item>
    //       <img style={{width: '40px',height: '40px', margin:'10px'}} src={this.props.shoppingItems.items[0].image_url} alt=""/>
    //       <span style={{margin:'10px'}}>{this.props.shoppingItems.items[0].name}</span>
    //       <span style={{margin:'10px'}}>{this.props.shoppingItems.items[0].quantity}</span>
    //       <button style={{margin:'10px', fontWeight:'bold'}}>+</button>
    //       <button style={{margin:'10px', fontWeight:'bold'}}>-</button>
    //     </Menu.Item>
    //   </Menu>
    // );
    const newArr = this.props.shoppingItems.items.map((item)=>{
      return (
        <Menu.Item>
          <img style={{width: '40px',height: '40px', margin:'10px'}} src={item.image_url} alt=""/>
          <span style={{margin:'10px'}}>{item.name}</span>
          <span style={{margin:'10px'}}>{item.quantity}</span>
          <button style={{margin:'10px', fontWeight:'bold'}}>+</button>
          <button style={{margin:'10px', fontWeight:'bold'}}>-</button>
        </Menu.Item>
      );
    });
    const menu = (
      <Menu>
        {newArr}
      </Menu>
    );

    return(
      <div>
        <ShoppingCartOutlined style={{ fontSize: '25px' }} />
        <Dropdown overlay={menu}>
          <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
            <span style={{padding:'5px',fontSize:'20px', fontWeight:'bold',color:'white'}}>{this.props.NumberOfItems}</span> <DownOutlined />
          </a>
        </Dropdown>
        {/*<span style={{background:'#FF707C', borderRadius:'50%',padding:'5px'}}>{this.props.NumberOfItems}</span>*/}
      </div>
    );
  }
}
const mapStateToProps=(state)=>({
  shoppingItems: state.cards.shoppingCart,
})
export default connect(mapStateToProps,null)(ShoppingCart);