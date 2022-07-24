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
        { id: 1, color: "red", image: "./assets/img/color.png"},
        { id: 2, color: "blue", image: "./assets/img/color.png" },
      ],
      talles: ["S", "M", "L", "XL"],
    };
  },
  methtods: {
    addToCart(){
      this.cart += 1;
    },
    updateImage(variantImage){
      this.image = variantImage
    }
  }
});
