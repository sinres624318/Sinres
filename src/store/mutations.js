function shopAllCheck(state) {
  let shopAllCheck = state.cartInfo.cartShopList.every((shop, index) => {
    return shop.checked == true;
  });
  state.cartInfo.checked = shopAllCheck;
}

Number.prototype.mul = function (arg) {
  var m = 0, s1 = this.toString(), s2 = arg.toString();
  try {
    m += s1.split(".")[1].length
  } catch (e) {
  }
  try {
    m += s2.split(".")[1].length
  } catch (e) {
  }
  return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m)
};
Number.prototype.add = function (arg) {
  var r1, r2, m;
  try {
    r1 = this.toString().split(".")[1].length
  } catch (e) {
    r1 = 0
  }
  try {
    r2 = arg.toString().split(".")[1].length
  } catch (e) {
    r2 = 0
  }
  m = Math.pow(10, Math.max(r1, r2))
  return (this * m + arg * m) / m
};

function countPrice(state, cartInfo) {
  let totalPrice = 0;
  let productNum = 0;
  for (let i = 0; i < cartInfo.cartShopList.length; i++) {
    let productList = cartInfo.cartShopList[i].productList;
    for (let j = 0; j < productList.length; j++) {
      if (productList[j].checked) {
        totalPrice = totalPrice.add(parseFloat(productList[j].price).mul(Number(productList[j].productNum)));
        productNum += Number(productList[j].productNum);
      }
    }
  }
  let priceString = String(totalPrice);
  if (priceString.indexOf('.') > -1) {
    totalPrice = priceString.substring(priceString.indexOf('.') + 1).length > 1 ? totalPrice : priceString + '0';
  }else{
    totalPrice = priceString + '.00';
  }
  state.cartTotalPrice = String(totalPrice);
  state.cartProductNum = String(productNum);
}

export default {
  setCartData(state, cartInfo) {
    countPrice(state, cartInfo);
    state.cartInfo = cartInfo;
  },
  setUserData(state, userInfo){
    state.userInfo = userInfo;
  },
  /**
   * 购物车选择商品
   * @param state
   * @param id
   */
  productCheckHandle(state, id) {
    let {sID, pID} = id;
    state.cartInfo.cartShopList[sID].productList[pID].checked = !state.cartInfo.cartShopList[sID].productList[pID].checked;
    let shopCheck = state.cartInfo.cartShopList[sID].productList.every((product, index) => {
      return product.checked == true;
    });
    state.cartInfo.cartShopList[sID].checked = shopCheck;
    shopAllCheck(state);
    countPrice(state, state.cartInfo);
  },
  /**
   * 选择全部
   * @param state
   */
  allCheckHandle(state) {
    let check = !state.cartInfo.checked;
    state.cartInfo.checked = check;
    state.cartInfo.cartShopList.forEach((shop, index) => {
      shop.checked = check;
      shop.productList.forEach((product, index) => {
        product.checked = check;
      })
    });
    countPrice(state, state.cartInfo);
  },
  /**
   * 选择店铺
   * @param state
   * @param sID
   */
  shopAllCheckHandle(state, sID) {
    let currentChecked = !state.cartInfo.cartShopList[sID].checked;
    state.cartInfo.cartShopList[sID].checked = currentChecked;
    state.cartInfo.cartShopList[sID].productList.forEach((product, index) => {
      product.checked = currentChecked
    });
    shopAllCheck(state);
    countPrice(state, state.cartInfo);
  }
}
