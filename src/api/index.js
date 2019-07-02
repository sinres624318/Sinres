import axios from './../../utils/request'
import {cartInfo} from "./url";

export const cartInfoHandle = () => {
  axios.post(cartInfo)
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    })
}
