import React from 'react';
import { Button} from 'antd';
import './ProductCard.css';

class ProductCard extends React.Component{
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <div  className="card">
        <div className='cardBody'>
          <div className='cardImage'>
            <img className = 'imageid' src={this.props.image} alt="example"/>
          </div>

          <div className='cardDescription' style={{fontweight:'bold',justifyContent: 'space-around'}}>
            <span>only {this.props.stock} left</span>
            <Button type="primary" onClick={()=>this.props.add(this.props.item)}>Add</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductCard;