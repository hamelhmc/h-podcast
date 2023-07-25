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
    <div class="p-6">
      <div class="flex justify-between">
        <h2 class="text-lg font-semibold text-gray-900 mb-2">{{ chapter.title }}</h2>
        <span class="text-sm text-gray-600"> {{ formatearFecha(chapter.date) }}</span>
      </div>
      <p class="text-gray-700 w-[75ch] text-left">{{ chapter.description }}</p>
    </div>
    <div class="p-6">
      <audio class="w-full" controls :src="chapter.episode"></audio>
    </div>
  </div>
</template>
