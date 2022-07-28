app.component("ReviewLists", {
  props: {
    reviews: {
      type: Array,
      required: true,
    },
  },
  template:
    /*HTML*/
    `
	<div class="review-container">
	<h3>Comentarios:</h3>
		<ul>
			<li v-for="(review, index) in reviews" :key="index">
				{{ review.nombre }} ha dado {{ review.rating }} estrellas a la compra

				<br>
				"{{ review.review }}"
			</li>
		</ul>
	</div>
	`,
});
