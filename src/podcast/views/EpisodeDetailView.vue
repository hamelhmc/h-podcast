<script setup lang="ts">
import PodcastChapterCard from '@/podcast/components/PodcastChapterCard.vue'
import type { PodcastDetail } from '@/podcast/model/podcast-detail'
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const chapterId = ref<string>(route.params.episodeId as string)

interface Props {
  podcastDetail: PodcastDetail
}

const props = defineProps<Props>()

const chapterDetail = computed(() => {
  const response = props.podcastDetail.chapters.find(
    (chapter) => chapter.id === Number(chapterId.value)
  )
  if (!response) return null
  return [response]
})
</script>

<template>
  <main v-if="chapterDetail && chapterDetail.length > 0" class="flex flex-col">
    <PodcastChapterCard :chapter="chapterDetail[0]"></PodcastChapterCard>
  </main>
</template>
