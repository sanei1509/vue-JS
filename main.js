const app = Vue.createApp({
  data: function () {
    return {
      cart: [],
      pro: true,
    };
  },
  methods: {
    updateCart(id) {
      if (this.cart < 9) this.cart.push(id);
    },
    removeOfCart() {
      this.cart.pop();
    },
  },
});
