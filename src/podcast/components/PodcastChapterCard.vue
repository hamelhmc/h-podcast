<script setup lang="ts">
import { formatearFecha } from '@/core/utils/formatear-fecha'
import type { PodcastChapters } from '@/podcast/model/podcast-chapters'
import { ref } from 'vue'

interface Props {
  chapter: PodcastChapters
}

const props = defineProps<Props>()

const chapter = ref(props.chapter)
</script>

<template>
  <div class="flex flex-col bg-white rounded-lg shadow-md overflow-hidden">
    <div class="px-4 py-6">
      <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center">
        <h2 class="text-sm sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-0">{{
          chapter.title
        }}</h2>
        <span class="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-0">
          {{ formatearFecha(chapter.date) }}</span
        >
      </div>
      <p class="text-xs sm:text-sm text-gray-700 text-left">{{ chapter.description }}</p>
    </div>
    <div class="px-4 py-6">
      <audio class="w-full" controls :src="chapter.episode"></audio>
    </div>
  </div>
</template>
