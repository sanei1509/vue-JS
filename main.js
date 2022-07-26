const app = Vue.createApp({
  data: function () {
    return {
      cart: 0,
      product: "Socks",
      description: "Medias originales, muy buenas para realizar deporte.",
      image: "./assets/images/socks_blue.jpg",
      url: "https://picsum.photos/200",
      stock: true,
      oferta: true,
      inventory: {
        socks: 5,
      },
      detalles: ["100% algodón", "30% lana", "20% polyester"],
      colores: [
        { id: 1, color: "blue", image: "./assets/images/socks_blue.jpg" },
        { id: 2, color: "green", image: "./assets/images/socks_green.jpg" },
      ],
      talles: ["S", "M", "L", "XL"],
    };
  },
  methods: {
    addToCart: function () {
      this.cart += 1;
    },
    removeOfCart: function () {
      if (this.cart > 0) this.cart -= 1;
      else return;
    },
    updateImage: function (imgUrl) {
      this.image = imgUrl;
    },
  },
});
