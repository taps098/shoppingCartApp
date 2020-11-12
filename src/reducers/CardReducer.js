import {GET_DATA, ADD_TO_CART, GET_DATA_BEGIN} from '../Actions/Actions';
import {produce} from 'immer';

const InitialState={
  data:[],
  loading:false,
  shoppingCart:{
    cartItems: 0,
    TotalAmount: 0,
    items:[
      // {"id":"1","name":"Gorgeous Granite Sausages","image_url":"http://lorempixel.com/640/480/nightlife","stock":59484,"price":"937.00", quantity: 0},
      // {"id":"2","createdAt":"2020-11-10T13:16:13.510Z","name":"Gorgeous Metal Chicken","image_url":"http://lorempixel.com/640/480/nightlife","stock":32509,"price":"862.00", quantity:2}
    ]
  }
}

const CardReducer=(state=InitialState, action)=>{
  switch(action.type){
    case GET_DATA:
      // let newState = Object.assing({...state, data:action.payload.data}, {loading: false})
      return {...state, data:action.payload.data, loading: false};
    case ADD_TO_CART:

      // let newCartItems = state.shoppingCart.cartItems+1;
      let actionItem = action.item;

      // update total card quantity
      return produce(state, draft => {
        draft.shoppingCart.cartItems++;

        let item = draft.shoppingCart.items.filter(cart_item => {return cart_item.id == actionItem.id})[0]
        let productItem = draft.data.filter(cart_item => {return cart_item.id == actionItem.id})[0]

        if (typeof productItem !== 'undefined'){
          productItem.stock = parseInt(productItem.stock)- 1;
        }
        //debugger
        if(typeof item !== 'undefined' && item !== null && item.length !==0){
          // debugger;
          console.log('item is', item);
          item.quantity = parseInt(item.quantity) +1;
          // item.stock = parseInt(item.stock)-1;
        } else {
          draft.shoppingCart.items.push({...actionItem, quantity: 1 })
        }
      })
    case GET_DATA_BEGIN:
      console.log("setting loading")
      return {
        ...state,
        loading: true
      }
    default:
      return state;
  }
}
export default CardReducer;