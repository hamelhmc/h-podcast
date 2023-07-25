<script setup lang="ts">
import ChapterTable from '@/podcast/components/ChapterTable.vue'
import PodcastCardDetail from '@/podcast/components/PodcastCardDetail.vue'
import type { PodcastDetail } from '@/podcast/model/podcast-detail'
import { getByIdPodcast } from '@/podcast/usecases/get-by-id-podcast'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const id = ref<string>(route.params.id as string)
const podcastDetail = ref<PodcastDetail | null>()
const isLoading = ref<boolean>(false)

async function loadGetByIdPodcast(id: string) {
  isLoading.value = true
  const response = await getByIdPodcast(id)
  isLoading.value = false
  return response
}

onMounted(() =>
  loadGetByIdPodcast(id.value)
    .then((data) => {
      podcastDetail.value = data
    })
    .catch((error) => {
      console.error('🐛 ➜ loadGetByIdPodcast ➜ error:', error)
    })
)
</script>

<template>
  <section v-if="isLoading" class="flex justify-center items-center min-h-screen">
    <div
      class="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
  </section>
  <section
    v-else-if="podcastDetail"
    class="flex flex-col justify-center md:flex-row p-4 gap-4 md:gap-16">
    <PodcastCardDetail :podcast="podcastDetail"></PodcastCardDetail>
    <main class="flex flex-col">
      <header class="flex shadow-md p-2 mb-4 sm:rounded-lg justify-between items-center">
        <h1 class="text-2xl font-semibold p-4"> Episodes: {{ podcastDetail.totalChapters }} </h1>
      </header>
      <ChapterTable :podcast-detail="podcastDetail"></ChapterTable>
    </main>
  </section>
</template>
