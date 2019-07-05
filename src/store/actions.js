import axios from "../../utils/request";
import {
  cartInfo,
  addProduct,
  minusProduct,
  deleteProduct,
  userInfo
} from "../api/url";

export default {
  getCartInfo(context, {token, vue}) {
    /*发送请求*/
    axios.post(cartInfo, {"token": token})
      .then((response) => {
        let data = response.data;
        console.log(data.code);
        if (data.code === 200) {
          console.log(data);
          context.commit('setCartData', data)
        } else if (data.code === 401) {
          vue.$router.replace({name: 'Login'})
        }
      })
      .catch((err) => {
        console.log(err);
      })
  },
  getUserInfo(context,{token, vue}) {
    axios.post(userInfo, {"token": token})
      .then((response) => {
        let data = response.data;
        if (data.code === 200) {
          console.log(data.data);
          context.commit('setUserData', data.data)
        } else if (data.code === 401) {
          vue.$router.replace({name: 'Login'})
        }
      })
      .catch((error) => {
        console.log(error);
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
    let {productID, token} = val;
    let cartShopList = context.state.cartInfo.cartShopList;
    console.log(cartShopList, productID);
    axios.post(deleteProduct, {
      "productID": JSON.stringify(productID),
      "token": token
    })
      .then((data) => {
        console.log(data);
        if (data.data.code === 200) {
          for (let i = 0; i < cartShopList.length; i++) {
            for (let j = 0; j < cartShopList.productList.length; j++) {
              console.log(cartShopList[i].productList[j].checked);
              if (cartShopList[i].productList[j].checked) {
                if (cartShopList[i].productList.length <= 1) {
                  cartShopList.splice(i, 1);
                } else {
                  cartShopList[i].productList.splice(j, 1);
                }
              }
            }
          }
        }
      })
      .catch((err) => {
        console.log(err);
      })
  }
}
