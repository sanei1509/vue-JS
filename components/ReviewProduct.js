app.component("ReviewForm", {
  template:
    /*HTML*/
    `
	<form class="review-form" @submit.prevent="onSubmit">
		<h3>Deja el feedback sobre tu compra aqui</h3>
		<input id="name" v-model="nombre"/>

		<label for="review">Opinion:</label>
		<textarea id="review" v-model="review"></textarea>

		<label for="rating">Valoración:</label>
		<select id="rating" v-model="rating">
			<option>5</option>
			<option>4</option>
			<option>3</option>
			<option>2</option>
			<option>1</option>
		</select>

		<input class="button" type="submit" value="Subir">
	</form>
	`,
  data() {
    return {
      nombre: "",
      review: "",
      rating: null,
    };
  },
  methods: {
    onSubmit() {
      // Guardo los datos obtenidos del formulario
      let productReview = {
        nombre: this.nombre,
        review: this.review,
        rating: this.rating,
      };

      this.$emit("review-enviada", productReview);

      //Despues de enviado LIMPIO para poder volver a enviar
      this.nombre = "";
      this.review = "";
      this.rating = null;
    },
  },
});
