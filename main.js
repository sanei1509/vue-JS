const app = Vue.createApp({
  data: function () {
    return {
      cart: 0,
      product: "Socks",
      marca: "Vue JS",
      description: "Medias originales, muy buenas para realizar deporte.",
      // image: "./assets/images/socks_blue.jpg", REFACTOR
      colorSeleccionado: 0,
      url: "https://picsum.photos/200",
      flagStock: 0,
      inventory: {
        socks: 5,
      },
      detalles: ["100% algodón", "30% lana", "20% polyester"],
      colores: [
        {
          id: 1,
          color: "blue",
          image: "./assets/images/socks_blue.jpg",
          cantidad: 10,
          enOferta: true,
        },
        {
          id: 2,
          color: "green",
          image: "./assets/images/socks_green.jpg",
          cantidad: 0,
          enOferta: false,
        },
      ],
      talles: ["S", "M", "L", "XL"],
    };
  },
  methods: {
    addToCart: function () {
      if (this.cart < 9) {
        this.cart += 1;
      }
    },
    removeOfCart: function () {
      if (this.cart > 0) this.cart -= 1;
      else return;
    },
    // updateImage: function (imgUrl) {
    //   this.image = imgUrl;
    // },   REFACTOR -> update NEW
    updateColor(index) {
      this.colorSeleccionado = index;
    },
  },
  computed: {
    title() {
      return this.marca + ", " + this.product;
    },
    image() {
      return this.colores[this.colorSeleccionado].image;
    },
    stock() {
      this.flagStock = this.colores[this.colorSeleccionado].cantidad;
      if (this.flagStock == 0) {
        return false;
      } else return true;
    },
    oferta() {
      return this.colores[this.colorSeleccionado].enOferta;
    },
  },
});
