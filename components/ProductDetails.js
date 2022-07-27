app.component("ProductoDetalles", {
  props: {
    detalles: {
      type: Array,
      require: true,
    },
  },
  template: `
	<!-- DETALLES PRODUCTO -->
	<ul>
	  <!-- voy a mostrar detalles del producto -->
	  <li v-for="detalle in detalles">{{ detalle }}</li>
	</ul>
	`,
});
