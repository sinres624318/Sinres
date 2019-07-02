import {cartInfoHandle} from "../api";
import axios from "../../utils/request";
import {
  cartInfo,
  addProduct,
  minusProduct
} from "../api/url";

export default {
  getCartInfo(context,token) {
    /*发送请求*/
    axios.post(cartInfo,{"token":token})
      .then((data) => {
        console.log(data);
        context.commit('setData', data.data)
      })
      .catch((err) => {
        console.log(err);
      })
  },
  addProduct(sID,pID){
    axios.post(addProduct)
      .then((data) => {
        console.log(data);
        context.commit('setData', data.data)
      })
      .catch((err) => {
        console.log(err);
      })
  },
  minusProduct(sID,pID){
    axios.post(minusProduct)
      .then((data) => {
        console.log(data);
        context.commit('setData', data.data)
      })
      .catch((err) => {
        console.log(err);
      })
  }
}
