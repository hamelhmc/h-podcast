<script setup lang="ts">
import type { PodcastModel } from '@/podcast/model/PodcastModel'
import { computed, ref } from 'vue'

interface Props {
  podcast: PodcastModel
}

const props = defineProps<Props>()

const podcast = ref(props.podcast)

const height = computed(() => `${podcast.value.image.height}px`)
</script>

<template>
  <RouterLink
    :to="'/podcastDetail/' + podcast.id"
    class="flex flex-col items-center relative justify-center shadow-md p-4 rounded-md transition-colors duration-200 ease-in-out hover:bg-gray-100 hover:shadow-none"
    :aria-label="'Navigate to details for ' + podcast.title">
    <figure
      class="absolute -top-20 transform transition-transform duration-500 ease-in-out hover:scale-110">
      <img
        class="object-cover rounded-full shadow-xl object-center border border-gray-300"
        :src="podcast.image.url"
        :alt="podcast.title"
        :width="podcast.image.height"
        :height="podcast.image.height" />
    </figure>
    <figcaption class="text-sm mt-20 p-4 text-center flex flex-col gap-3 leading-relaxed">
      <h3 class="font-medium break-words">{{ podcast.title }}</h3>
      <p class="text-xs text-muted-foreground">{{ podcast.autor }}</p>
    </figcaption>
  </RouterLink>
</template>

<style lang="css" scoped>
img {
  height: v-bind('height');
}
</style>
