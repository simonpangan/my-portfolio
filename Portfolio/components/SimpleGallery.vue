<template>
	<div :id="galleryID">
		<div class="image-container">
			<a v-for="(image, key) in imagesData" :key="key" :href="image.largeURL" :data-pswp-width="image.width"
				:data-pswp-height="image.height" target="_blank" rel="noreferrer">
				<img :src="image.thumbnailURL" :alt="image.alt" />
				<div class="click-icon">Click to view</div>
			</a>
		</div>
	</div>
</template>
  
<script>
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';

export default {
	name: 'SimpleGallery',
	props: {
		galleryID: String,
		images: Array,
	},
	setup(props) {
		return {
			imagesData: props.images,
		};
	},
	mounted() {
		if (!this.lightbox) {
			this.lightbox = new PhotoSwipeLightbox({
				gallery: '#' + this.$props.galleryID,
				children: 'a',
				pswpModule: () => import('photoswipe'),
			});
			this.lightbox.init();
		}
	},
	unmounted() {
		if (this.lightbox) {
			this.lightbox.destroy();
			this.lightbox = null;
		}
	},
	methods: {},
};
</script>
  
<style scoped>
/* Style the image container */
.image-container {
	position: relative;
	display: inline-block;
	/* Add any other styles you want for the image container */
}

/* Style the click icon */
.click-icon {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background-color: rgba(0, 0, 0, 0.7);
	color: #fff;
	padding: 8px 16px;
	border-radius: 4px;
	font-size: 14px;
	cursor: pointer;
	opacity: 0;
	/* Initially hide the icon */
	transition: opacity 0.3s;
}

/* Show the click icon on hover */
.image-container:hover .click-icon {
	opacity: 1;
}
</style>