import React from 'react';
import Card from "../ProductCard/ProductCard";
import ProductCard from "../ProductCard/ProductCard";
import './ProductIndex.css';
import InfiniteScroll from "react-infinite-scroll-component";


class ProductIndex extends React.Component{
  constructor(props) {
    super(props);
  }
  // handleAdd=(e)=> {
  //   console.log('inside handleAdd');
  // }

  render(){
    console.log('productIndex: ', this.props.cartItems);
    const allProductItems = this.props.cartItems.map((item)=>{
      //debugger
      return(
        <ProductCard
          id={item.id}
          image={item.image_url}
          stock={item.stock}
          add={this.props.addToCart}
          item={item}
        />
      );
    })
    return(
      <div className='productIndex' >
        {/*<InfiniteScroll*/}
        {/*  dataLength={this.props.dataCount}*/}
        {/*  next={this.props.scrollHandler}*/}
        {/*  hasMore={true}*/}
        {/*  loader={<h4>Loading...</h4>}*/}
        {/*>*/}
        {allProductItems}
        {/*</InfiniteScroll>*/}
        {this.props.children}
      </div>
    );
  }

}
export default ProductIndex;