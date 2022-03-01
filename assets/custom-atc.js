window.addEventListener('load', ()=>{
    const formElement = document.querySelector('.custom__atc')
    formElement.addEventListener('submit', (e)=>{
        e.preventDefault();
        const config = fetchConfig('javascript');
        config.body = JSON.stringify({
            ...JSON.parse(serializeForm(e.target))
          });
        fetch(`${routes.cart_add_url}`, config)
        .then((response) => response.json())
        .then((response) => {
          if (response.status) {
            return;
          }
        })
        .catch((e) => {
          console.error(e);
        })
        .finally(() => {
  
          fetch('/cart.js')
          .then(response => response.json())
          .then(data => {
            cartDrawerApp.cart_current = data;
            ShippingBarScope.cart_current = data;
            document.getElementById('full-page__overlay').classList.add("is-visible");
            document.getElementById('cart-drawer').classList.add('cart-drawer__opened')
            document.querySelector('html').classList.add('overflow-hidden')
            document.querySelector('#cart-drawer_icon span').textContent = data.item_count
        });
        });
    })
    
})