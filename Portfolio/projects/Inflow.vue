<script setup>
import PhotoSwipe from '../components/PhotoSwipe.vue';

defineProps({
	images: Array | Object
})
</script>

<template>
	<PhotoSwipe galleryID="my-test-gallery" :images="images" />
	<p class="image-note">(Select the image to enable fullscreen mode)</p>
</template>

<style scoped>
	.image-note {
		text-align: center;
		margin-top: 0;
	}
</style>


  