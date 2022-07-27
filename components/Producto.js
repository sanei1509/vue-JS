app.component("Producto", {
  props: {
    pro: {
      // validation de la propiedad
      type: Boolean,
      required: true,
    },
  },
  template: `<div class="product-container">
	<div class="product-image">
	  <!-- Y asi agrego la imagen como una etiqueta más -->
	  <img v-bind:src="image" />
	</div>
	<div class="product-info">
		         
		<p class="oferta-tag" v-show="oferta">Hoy en oferta!</p>
		<br>
		<p class="stock-tag">Envío: {{ envio }}</p>
	  <h1>{{ title }}</h1>
	  <p>{{ description }}</p>

	  <!-- VERIFICACIÓN DE STOCK -->
	  <div class="stock-container">            
		<p class="stock-tag" v-if="stock">Hay stock</p>
		<p class="pocas-unidades-tag" v-if="stock && inventory.socks <= 5">Pocas unidades</p>
	  </div>
	  <p class="no-stock-tag" v-if="!stock">No Hay stock</p>
	  <p v-if="None">Consultar Stock</p>
	  
	  
  	<ProductoDetalles :detalles="detalles"></ProductoDetalles>
	
	<!-- COLORES DEL PRODUCTO -->
	<div class="color-container">
		<div 
			v-for="(color, index) in colores" 
			:style="{backgroundColor: color.color}" 
			:key="color.id" 
			class="color-circle" 
			v-on:click="updateColor(index)"
			>
		</div>
	</div>

	  <ul style="display:flex">
		<!-- voy a mostrar detalles del producto -->
		<li class="talles-tag" v-for="talle in talles">{{ talle }}</li>
	  </ul>
	  <!-- AGREGAR AL CARRITO (BUTTON) -->
	  <button :class="{disabledButton: !stock}" class="button" v-on:click="addToCart()">Agregar al carrito</button>
	  <!-- CHALLENGE 2 -->
	</div>
  </div>
  `,
  data: function () {
    return {
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
          image: "../assets/images/socks_blue.jpg",
          cantidad: 10,
          enOferta: true,
        },
        {
          id: 2,
          color: "green",
          image: "../assets/images/socks_green.jpg",
          cantidad: 0,
          enOferta: false,
        },
      ],
      talles: ["S", "M", "L", "XL"],
    };
  },
  methods: {
    addToCart: function () {
      this.$emit("add-to-cart", this.colores[this.colorSeleccionado].id);
    },
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
    envio() {
      if (this.pro) {
        return "Gratis";
      } else {
        return "$200";
      }
    },
  },
});
