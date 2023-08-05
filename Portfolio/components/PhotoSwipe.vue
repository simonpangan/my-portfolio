<script setup>
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';
import { onMounted, onUnmounted } from 'vue';


const props = defineProps({
	galleryID: String,
	images: Array | Object
})

let lightbox;
onMounted(() => {
	lightbox = new PhotoSwipeLightbox({
		gallery: '#' + props.galleryID,
		children: 'a',
		pswpModule: () => import('photoswipe'),
	});
	lightbox.init();
})

onUnmounted(() => {
	if (lightbox) {
		lightbox.destroy();
		lightbox = null;
	}
})
</script>

<template>
	<div :id="galleryID">
		<div class="image-container">
			<template v-if="Array.isArray(images)">
				<a v-for="(image, key) in images" :key="key" :href="image.largeURL" :data-pswp-width="image.width"
					:data-pswp-height="image.height" target="_blank" rel="noreferrer">
					<img :src="image.thumbnailURL" :alt="image.alt" />
				</a>
			</template>
			<template v-else>
				<a :href="images.largeURL" :data-pswp-width="images.width"
					:data-pswp-height="images.height" target="_blank" rel="noreferrer">
					<img :src="images.thumbnailURL" :alt="images.alt" />
				</a>
			</template>
		</div>
	</div>
</template>

