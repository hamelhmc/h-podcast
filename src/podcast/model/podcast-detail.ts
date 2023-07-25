import type { PodcastChapters } from '@/podcast/model/podcast-chapters'
import type { PodcastModel } from '@/podcast/model/PodcastModel'

export interface PodcastDetail extends PodcastModel {
  chapters: PodcastChapters[]
  totalChapters: number
}
