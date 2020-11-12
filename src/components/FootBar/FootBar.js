import React from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;

function FootBar(props){
  return(
    <div>
      <Footer style={{ textAlign: 'center' ,height:'5px',position:'fixed',bottom:0,width:'100%'}}>Ant Design ©2018 Created by Ant UED</Footer>
    </div>
  );
}
export default FootBar;