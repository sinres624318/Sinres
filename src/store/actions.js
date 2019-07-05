import axios from "../../utils/request";
import {
  cartInfo,
  addProduct,
  minusProduct,
  deleteProduct
} from "../api/url";

export default {
  getCartInfo(context, {token,vue}) {
    /*发送请求*/

    axios.post(cartInfo, {"token": token})
      .then((response) => {
        let data = response.data;
        console.log(data.code);
        if (data.code === 200) {
          console.log(data);
          context.commit('setData', data)
        } else if (data.code === 401) {
          vue.$router.replace({name:'Login'})
        }

      })
      .catch((err) => {
        console.log(err);
      })
  },
  addProduct(context, val) {
    console.log(val);
    let {sID, pID, token} = val;
    let cartShopList = context.state.cartInfo.cartShopList;
    console.log(cartShopList);
    let productID = cartShopList[pID].productList[sID].productID;
    let productNum = ++cartShopList[pID].productList[sID].productNum;
    console.log(productID, productNum);
    /**
     * 400无token
     * 401 token验证失败
     * 200成功
     * 404添加失败
     */
    axios.post(addProduct, {
      "productID": productID,
      "productNum": productNum,
      "token": token
    })
      .then((response) => {
        let data = response.data;
        console.log(data);
        if (data.code === 200) {
          return
        } else if (data.code === 401) {

        } else if (data.code === 404) {
          cartShopList[pID].productList[sID].productNum--;
        }
      })
      .catch((err) => {
        console.log(err);
      })
  },
  minusProduct(context, val) {
    let {sID, pID, token} = val;
    let cartShopList = context.state.cartInfo.cartShopList;
    let productID = cartShopList[pID].productList[sID].productID;
    let productNum = cartShopList[pID].productList[sID].productNum;
    console.log(productID);
    productNum--;
    axios.post(minusProduct, {
      "productID": productID,
      "productNum": productNum,
      "token": token
    })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      })
  },
  deleteProduct(context, val) {
    let {sID, pID, token} = val;
    let cartShopList = context.state.cartInfo.cartShopList;
    let productID = cartShopList[pID].productList[sID].productID;
    console.log(productID);
    axios.post(deleteProduct, {
      "productID": JSON.stringify([productID]),
      "token": token
    })
      .then((data) => {
        console.log(data);
        cartShopList[pID].productList.splice(sID, 1)
      })
      .catch((err) => {
        console.log(err);
      })
  }
}
