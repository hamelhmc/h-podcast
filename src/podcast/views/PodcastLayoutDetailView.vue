<script setup lang="ts">
import PodcastCardDetail from '@/podcast/components/PodcastCardDetail.vue'
import type { PodcastDetail } from '@/podcast/model/podcast-detail'
import { getByIdPodcast } from '@/podcast/usecases/get-by-id-podcast'
import { loadingStore } from '@/stores/loadingStore'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const store = loadingStore()

const id = ref<string>(route.params.id as string)
const podcastDetail = ref<PodcastDetail | null>()

async function loadGetByIdPodcast(id: string) {
  store.setLoadingState(true)
  const response = await getByIdPodcast(id)
  store.setLoadingState(false)
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
  <section v-if="store.isLoading" class="flex justify-center items-center min-h-screen">
    <div class="loader ease-linear mb-4"></div>
  </section>
  <section
    v-else-if="podcastDetail"
    class="flex flex-col justify-center md:flex-row p-4 gap-4 md:gap-16">
    <PodcastCardDetail :podcast="podcastDetail"></PodcastCardDetail>
    <main class="flex flex-col">
      <RouterView :podcast-detail="podcastDetail"></RouterView>
    </main>
  </section>
</template>
