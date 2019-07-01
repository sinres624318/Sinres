export default {

  setData(state, cartInfo) {
    console.log(cartInfo);
    state.cartInfo = cartInfo;
  },
  shopCheckHandle(state, sID) {
    let shopCheck = state.cartInfo.cartShopList[sID].productList.every((product, index) => {
      return product.checked == true;
    });
    state.cartInfo.cartShopList[sID].checked = shopCheck;
    let shopAllCheck = state.cartInfo.cartShopList.every((shop, index) => {
      return shop.checked == true;
    });
    state.cartInfo.checked = shopAllCheck;
  },
}
