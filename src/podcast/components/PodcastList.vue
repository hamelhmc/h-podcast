<script setup lang="ts">
import PodcastCard from '@/podcast/components/PodcastCard.vue'
import type { PodcastModel } from '@/podcast/model/PodcastModel'
import { computed } from 'vue'

interface Props {
  podcasts: PodcastModel[]
}

const props = defineProps<Props>()

const podcasts = computed(() => props.podcasts)
</script>

<template>
  <main class="grid h-grid-auto-fit gap-y-24 gap-x-8 mt-24 p-4">
    <PodcastCard v-for="podcastItem in podcasts" :key="podcastItem.id" :podcast="podcastItem" />
  </main>
</template>

<style scoped lang="css">
.h-grid-auto-fit {
  grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
}
</style>
