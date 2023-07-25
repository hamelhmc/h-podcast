<script setup lang="ts">
import PodcastList from '@/podcast/components/PodcastList.vue'
import type { PodcastModel } from '@/podcast/model/PodcastModel'
import { getAllPodcast } from '@/podcast/usecases/get-all-podcast'
import SearchBar from '@/share/components/SearchBar.vue'
import { computed, onMounted, ref } from 'vue'

const podcastList = ref<PodcastModel[]>([])
const searchQuery = ref('')

async function loadAllPodcasts() {
  try {
    podcastList.value = await getAllPodcast()
  } catch (error) {
    console.error(error)
  }
}

const filteredPodcasts = computed(() => {
  if (!searchQuery.value) {
    return podcastList.value
  }

  return podcastList.value.filter(
    (podcast) =>
      podcast.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      podcast.autor.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})

onMounted(loadAllPodcasts)
</script>

<template>
  <section class="p-4">
    <SearchBar v-model="searchQuery" :item-count="filteredPodcasts.length" />
    <PodcastList :podcasts="filteredPodcasts"></PodcastList>
  </section>
</template>

<style scoped></style>
