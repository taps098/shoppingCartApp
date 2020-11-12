// import {GET_DATA, ADD_TO_CART} from '../Actions/Actions';
import * as actions from '../Actions/Actions';
import Axios from "axios";

export const get_data=(data)=>({
  type: actions.GET_DATA,
  payload: data
})
export const addToCart=(item)=>({
    type: actions.ADD_TO_CART,
    item: item,
})

export const gettingData=()=>({
  type: actions.GET_DATA_BEGIN
})


export function getAsynchData(page){
  console.log('page',page);
  return dispatch=>{
    dispatch(gettingData());
      Axios.get('https://5faa6489b5c645001602a7ac.mockapi.io/api/v1/products?page='+page+'&limit=8')
        .then((response)=>{
          let data = response.data;
          //console.log("Ation", data)
          dispatch(get_data(data));
        }).catch(()=>{
          console.log('failing to fetch the data')
      })
  }
}
