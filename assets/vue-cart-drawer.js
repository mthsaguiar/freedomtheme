
    var cartDrawerApp = new Vue({
        el: '#cart-drawer',
        delimiters: ['${', '}'],
        filters: {
            money: function (value, sign = "R$") {
                return sign + ' ' + (value / 100).toFixed(2);
            }
        },
        data: {
            cart_current: variables.cart,
            load_ring: [],
            counter: []
        },
        beforeMount() {
            let count = 0;
            for (let index = 0; index < this.cart_current.items.length; index++) {
                if (index <= 3) {
                    count++;
                    this.counter[index] = count;
                } else {
                    count = 0
                    this.counter[index] = count
                }
    
            }
        },
        methods: {
            increaseItem: function (itemId, quantity, index) {
                this.updateCartItem(itemId, index, ++quantity)
            },
            decreaseItem: function (itemId, quantity, index) {
                this.updateCartItem(itemId, index, --quantity)
            },
            updateItem: function (event, itemId, index) {
                this.updateCartItem(itemId, index, event.target.value)
            },
            removeItem: function (itemId, index) {
                this.updateCartItem(itemId, index, 0)
            },
            updateTotalPrice: function (index, quantity) {
                let total_price = 0;
                this.cart_current.items.forEach((element, count) => {
                    if (count == index) {
                        element.final_line_price = element.final_price * quantity
                    }
                    total_price += element.final_line_price
                });
                this.cart_current.total_price = total_price;
            },
            updateCartItem: async function (itemId, index, quantity) {
                const updates = {}
                updates[itemId] = quantity
                const options = {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        updates
                    })
                }
                this.$set(this.load_ring, index, true)
                try {
                    const response = await fetch('/cart/update.js', options)
                    this.cart_current.items[index].quantity = quantity;
                    this.updateTotalPrice(index, quantity)
                    this.$set(this.load_ring, index, false)
                    this.getCartCount(this.cart_current)
                } catch (e) {
                    console.log(e)
                }
            },
            getCartCount: function (cart) {
                let itemCount = 0
                cart.items.forEach((element) => {
                    itemCount = itemCount + element.quantity
                })
                this.cart_current.item_count = itemCount
                document.querySelector('#cart-drawer_icon span').textContent = itemCount;
            },
            sendToCheckout: function (e) {
                fakeClick(e);
            }
        }
    })
    
    window.addEventListener('DOMContentLoaded', () => {
        document.getElementById('cart-drawer_icon').addEventListener('click', function () {
            document.getElementById('full-page__overlay').classList.add("is-visible");
            document.getElementById('cart-drawer').classList.add('cart-drawer__opened')
            document.querySelector('html').classList.add('overflow-hidden')
    
        })
        document.getElementById('full-page__overlay').addEventListener('click', function () {
            document.getElementById('full-page__overlay').classList.remove("is-visible");
            document.getElementById('cart-drawer').classList.remove('cart-drawer__opened')
            document.querySelector('html').classList.remove('overflow-hidden')
        })
    })
