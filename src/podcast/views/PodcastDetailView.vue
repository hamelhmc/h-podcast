<script setup lang="ts">
import ChapterTable from '@/podcast/components/ChapterTable.vue'
import type { PodcastDetail } from '@/podcast/model/podcast-detail'

interface Props {
  podcastDetail: PodcastDetail
}

defineProps<Props>()
</script>

<template>
  <main class="flex flex-col">
    <header class="flex shadow-md p-2 mb-4 sm:rounded-lg justify-between items-center">
      <h1 class="text-2xl font-semibold p-4"> Episodes: {{ podcastDetail.totalChapters }} </h1>
    </header>
    <ChapterTable :podcast-detail="podcastDetail"></ChapterTable>
  </main>
</template>
