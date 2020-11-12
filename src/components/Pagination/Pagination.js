import React from 'react'
import { Pagination } from 'antd';

class Paging extends React.Component{
  constructor(props) {
    super(props);
  }
  // onChange = page => {
  //   console.log(page);
  //   this.setState({
  //     current: page,
  //   });
  // };

  render() {
    return <Pagination current={this.props.page} onChange={this.props.onChange} total={50} />;
  }

}

export default Paging;