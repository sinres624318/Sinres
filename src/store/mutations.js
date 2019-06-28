// import {CART_INFO} from './mutation_types'

export default {
  // [CART_INFO](state, {cartInfo}) {
  //   state.cartInfo = cartInfo;
  // }
  setData(state, cartInfo){
    console.log(cartInfo);
    state.cartInfo = cartInfo;
  }
}
