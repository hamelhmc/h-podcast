<script setup lang="ts">
import type { PodcastModel } from '@/podcast/model/PodcastModel'
import { computed, ref } from 'vue'

interface Props {
  podcast: PodcastModel
}

const props = defineProps<Props>()

const podcast = ref(props.podcast)

const height = computed(() => `${podcast.value.image.height}px`)

function rutaToDetail(id: string): string {
  return `/podcast/${id}`
}
</script>

<template>
  <article
    class="flex flex-col h-full shadow-md p-4 rounded-md transition-colors duration-200 ease-in-out gap-5">
    <figure
      class="flex justify-center transform transition-transform duration-500 ease-in-out hover:scale-110">
      <router-link v-slot="{ navigate }" :to="rutaToDetail(podcast.id)">
        <img
          class="object-cover shadow-xl object-center border border-gray-300 cursor-pointer"
          :src="podcast.image.url"
          :alt="podcast.title"
          :width="podcast.image.height"
          :height="podcast.image.height"
          @click="navigate" />
      </router-link>
    </figure>
    <hr />
    <figcaption class="text-sm md:text-base flex flex-col gap-2 leading-relaxed">
      <router-link v-slot="{ navigate }" :to="rutaToDetail(podcast.id)">
        <h3 class="font-medium break-words cursor-pointer" @click="navigate">{{
          podcast.title
        }}</h3>
      </router-link>
      <router-link v-slot="{ navigate }" :to="rutaToDetail(podcast.id)">
        <p class="text-xs text-muted-foreground cursor-pointer" @click="navigate">{{
          podcast.autor
        }}</p>
      </router-link>
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
