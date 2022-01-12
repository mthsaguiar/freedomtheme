Vue.component('vue-shipping-component', {
    template: '#shipping-template',
    delimiters: ['${', '}'],
    props:['cart'],
    computed: {
        shipping_message: function(){
            const shipping_default = parseInt(
                this.free_shipping_value
                .replace(/[^0-9,]/g, '')
            )
            const total_price = (this.cart.total_price/100).toFixed(2)

            const missing_value = (
                shipping_default - total_price
                
            ).toFixed(2);
            
            if (total_price >=  shipping_default){
                return `<b>${this.free_shipping_message}</b>`
            } else if(this.cart.total_price == 0){
                return `<b>${this.shipping_message_1}</b> ${this.free_shipping_value} ${this.shipping_message_2}`
            }else{
                return `${this.missing_value_message_before}
                <b>R$${missing_value}</b>
                ${this.missing_value_message_after}`
            }
        }
    },
    data() {
      return {
        free_shipping_value: variables.free_shipping_value,
        shipping_message_1: variables.shipping_message_1,
        shipping_message_2: variables.shipping_message_2,
        free_shipping_message: variables.free_shipping_message,
        missing_value_message_before: variables.missing_value_message_before,
        missing_value_message_after: variables.missing_value_message_after,
      }
    }
});