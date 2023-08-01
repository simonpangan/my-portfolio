<script setup>
import SimpleGallery from '../components/SimpleGallery.vue';

const images = [
	{
		largeURL:
			'../assets/img/inflow.png',
		thumbnailURL:
			'../assets/img/inflow.png',
		width: 3500,
		height: 2500,
		alt: 'Inflow'
	}
]
</script>

<template>
	<SimpleGallery galleryID="my-test-gallery" :images="images" />
	<p class="image-note">(Select the image to enable fullscreen mode)</p>
</template>

<style scoped>
	.image-note {
		text-align: center;
		margin-top: 0;
	}
</style>


  