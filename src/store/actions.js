// import {CART_INFO} from './mutation_types'
import {cartInfoHandle} from "../api";
import axios from "../../utils/request";
import {cartInfo} from "../api/url";

export default {
  getCartInfo(context) {
    /*发送请求*/
    /*console.log("aaa");
    const result = await cartInfoHandle()
    console.log(result);
    context.commit('setData', result)*/
    axios.post(cartInfo)
      .then((data) => {
        console.log(data);
        context.commit('setData', data.data)
      })
      .catch((err) => {
        console.log(err);
      })
  }

}
