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
        // console.log(data.code);
        // if (data.code === 200) {
        console.log(data);
        context.commit('setCartData', data)
        // } else if (data.code === 401) {
        //   vue.$router.replace({name: 'Login'})
        // }
      })
      .catch((err) => {
        console.log(err);
      })
  },
  /*获取用户信息*/
  getUserInfo(context, {token, vue}) {
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
  /*购物车添加商品*/
  addProduct(context, val) {
    let {sID, pID, token, vue} = val;
    console.log(vue);
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
          vue.$router.replace({name: 'Login'})
        } else if (data.code === 404) {
          cartShopList[pID].productList[sID].productNum--;
        }
      })
      .catch((err) => {
        console.log(err);
      })
  },
  /*购物车减少商品*/
  minusProduct(context, val) {
    let {sID, pID, token, vue} = val;
    console.log(vue);
    let cartShopList = context.state.cartInfo.cartShopList;
    let productID = cartShopList[pID].productList[sID].productID;
    let productNum = --cartShopList[pID].productList[sID].productNum;
    console.log(productID);
    axios.post(minusProduct, {
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
          vue.$router.replace({name: 'Login'})
        } else if (data.code === 404) {
          cartShopList[pID].productList[sID].productNum++;
        }
      })
      .catch((err) => {
        console.log(err);
      })
  },
  /*购物车删除商品*/
  deleteProduct(context, val) {
    let {productID, token, vue} = val;
    let cartShopList = context.state.cartInfo.cartShopList;
    console.log(cartShopList);

    axios.post(deleteProduct, {
      "productID": JSON.stringify(productID),
      "token": token
    })
      .then((data) => {
        console.log(data);
        if (data.data.code === 200) {
          for (let i = 0; i < cartShopList.length; i++) {
            for (let j = 0; j < cartShopList[i].productList.length; j++) {
              if (productID.indexOf(cartShopList[i].productList[j].productID) > -1) {
                if (cartShopList[i].productList.length <= 1) {
                  cartShopList.splice(i, 1);
                  i--;
                  break;
                } else {
                  cartShopList[i].productList.splice(j, 1);
                  j--;
                }
              }
            }
          }
        } else if (data.data.code === 401) {
          vue.$router.replace({name: 'Login'})
        }
      })
      .catch((err) => {
        console.log(err);
      })
  }
}
