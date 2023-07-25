import type { PodcastModel } from '@/podcast/model/PodcastModel'
import type { PodcastDetail } from '@/podcast/model/podcast-detail'
import { getAllPodcast } from '@/podcast/usecases/get-all-podcast'
import { getByIdPodcastChapters } from '@/podcast/usecases/get-by-id-podcast-chapters'

async function foundByIdPodcast(id: string): Promise<PodcastModel | null> {
  const response = await getAllPodcast()
  const found = response.find((podcast) => podcast.id === id)
  return found ? found : null
}

export async function getByIdPodcast(id: string): Promise<PodcastDetail | null> {
  const [chapters, podcast] = await Promise.all([getByIdPodcastChapters(id), foundByIdPodcast(id)])

  if (podcast && chapters.chapters && chapters.chapters.length > 0) {
    return {
      ...podcast,
      chapters: chapters.chapters,
      totalChapters: chapters.totalChapters ?? 0
    }
  }

  return null
}
