app.component("ProductoDetalles", {
  props: {
    detalles: {
      type: Array,
      require: false,
    },
  },
  template:
    /*HTML*/
    `
	<!-- DETALLES PRODUCTO -->
	<ul>
	  <!-- voy a mostrar detalles del producto -->
	  <li v-for="detalle in detalles">{{ detalle }}</li>
	</ul>
	`,
});
