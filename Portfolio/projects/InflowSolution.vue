<template>
	<SimpleGallery galleryID="my-test-gallery" :images="images" />
</template>
  
<script>
import SimpleGallery from '../components/SimpleGallery.vue';

export default {
	name: 'App',
	components: {
		SimpleGallery,
	},
	data() {
		return {
			images: [
				{
					largeURL:
						'../assets/img/flowchart.png',
					thumbnailURL:
						'../assets/img/flowchart.png',
					width: 3500,
					height: 2500,
					alt: 'Flowchart Problem'
				},
			],
		};
	},
};
</script>
  