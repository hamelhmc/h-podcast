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
  <article
    class="flex flex-col h-full shadow-md p-4 rounded-md transition-colors duration-200 ease-in-out gap-5">
    <figure
      class="flex justify-center transform transition-transform duration-500 ease-in-out hover:scale-110">
      <img
        class="object-cover shadow-xl object-center border border-gray-300"
        :src="podcast.image.url"
        :alt="podcast.title"
        :width="podcast.image.height"
        :height="podcast.image.height" />
    </figure>
    <hr />
    <figcaption class="text-sm md:text-base flex flex-col gap-2 leading-relaxed">
      <h3 class="font-medium break-words">{{ podcast.title }}</h3>
      <p class="text-xs text-muted-foreground">{{ podcast.autor }}</p>
      <hr />
      <p class="text-xs md:text-sm text-muted-foreground w-full md:w-[30ch] break-words">{{
        podcast.summary
      }}</p>
    </figcaption>
  </article>
</template>

<style lang="css" scoped>
img {
  height: v-bind('height');
}
</style>
