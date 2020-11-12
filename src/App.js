import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import ProductIndex from "./components/ProductIndex/ProductIndex";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import FootBar from "./components/FootBar/FootBar";
import {connect} from 'react-redux';
import * as actionCreator from './ActionCreator/ActionCreator';
import Paging from "./components/Pagination/Pagination";


class App extends React.Component{
  constructor(props) {
    super(props);
    this.state={

    }
  }

  componentDidMount() {
    this.props.dataAction(1);
  }

  render(){
    //debugger;
    //  console.log('shopping cartItems  ', this.state.props.shoppingCartItems);

    return (
      <div>
        <div className='navbar'>
          <NavigationBar
            style={{zIndex:'1'}}
            NumberOfItems={this.state.NumberOfItems}
            cartItems={this.props.cartItems}
            // shoppingCartItems={this.state.props.shoppingCartItems}
          />
        </div>
        {/*{console.log("Loading", this.props.loading)}*/}
        <div className={this.props.loading ? 'container-products loading' : 'container-products' }>
          <ProductIndex cartItems={this.props.data} addToCart={this.props.addToCart}
                        // scrollHandler={this.props.dataAction}
                        // dataCount={this.props.data.length}
          >
            
            {/*pagination component*/}
            <div className='pagination'>
              <Paging page={1} onChange={this.props.dataAction}/>
            </div>
          </ProductIndex>
        </div>

        <div>
          <FootBar/>
        </div>

      </div>
    );
  }
}

const mapStateToProps=(state)=>({
  data: state.cards.data,
  loading: state.cards.loading,
  cartItems: state.cards.shoppingCart.cartItems,
  // shoppingCartItems: state.cards.shoppingCart.items
})

const mapDispatchToProps=(dispatch)=>{
  return{
    dataAction: (page)=>dispatch(actionCreator.getAsynchData(page)),
    addToCart: (item)=>dispatch(actionCreator.addToCart(item)),
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(App);
