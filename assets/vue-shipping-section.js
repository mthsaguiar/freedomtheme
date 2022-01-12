

var ShippingBarScope = new Vue({
    el:"#vue-shipping-section",
    delimiters: ['${', '}'],
    data: {
        cart_current: cartDrawerApp.cart_current
    }
})