const app = Vue.createApp({
  data: function () {
    return {
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
        { id: 1, color: "red" },
        { id: 2, color: "blue" },
      ],
      talles: ["S", "M", "L", "XL"],
    };
  },
});
