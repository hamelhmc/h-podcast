import { apiService } from '@/core/services/api-service'
import { LocalCache } from '@/core/services/local-cache'
import type { PodcastChapters } from '@/podcast/model/podcast-chapters'
import type { PodcastDetail } from '@/podcast/model/podcast-detail'

const podcastChaptersCache = new LocalCache('GET_BY_ID_PODCAST_CHAPTERS')

interface Result {
  wrapperType: string
  kind: string
  artistId?: number
  collectionId: number
  trackId: number
  artistName?: string
  collectionName: string
  trackName: string
  collectionCensoredName?: string
  trackCensoredName?: string
  artistViewUrl: string
  collectionViewUrl: string
  feedUrl: string
  trackViewUrl: string
  artworkUrl30?: string
  artworkUrl60: string
  artworkUrl100?: string
  collectionPrice?: number
  trackPrice?: number
  collectionHdPrice?: number
  releaseDate: string
  collectionExplicitness?: string
  trackExplicitness?: string
  trackCount?: number
  trackTimeMillis: number
  country: string
  currency?: string
  primaryGenreName?: string
  contentAdvisoryRating: string
  artworkUrl600: string
  genreIds?: string[]
  genres: any[]
  closedCaptioning?: string
  episodeGuid?: string
  description?: string
  artistIds?: number[]
  shortDescription?: string
  episodeUrl?: string
  previewUrl?: string
  artworkUrl160?: string
  episodeContentType?: string
  episodeFileExtension?: string
}

interface PodcastResult {
  resultCount: number
  results: Result[]
}

async function fetchByIdPodcastChapters(id: string): Promise<Partial<PodcastDetail>> {
  const url = 'lookup'

  const response = await apiService.get<PodcastResult>(url, {
    params: {
      id,
      entity: 'podcastEpisode',
      limit: '9'
    },
    useCorsProxy: true
  })

  const result = responseToPodcastChapters(response)
  const total = response.results[0].trackCount ?? 0

  return {
    chapters: result,
    totalChapters: total
  }
}

function responseToPodcastChapters(data: PodcastResult): PodcastChapters[] {
  return data.results.slice(1).map((chapter) => ({
    id: chapter.trackId,
    title: chapter.trackName,
    date: chapter.releaseDate,
    duration: chapter.trackTimeMillis,
    description: chapter.description ?? '',
    episode: chapter.episodeUrl ?? ''
  }))
}

export async function getByIdPodcastChapters(id: string): Promise<Partial<PodcastDetail>> {
  const cachedChapters = podcastChaptersCache.get<Partial<PodcastDetail>>(id)

  if (cachedChapters) {
    return cachedChapters
  }

  const response = await fetchByIdPodcastChapters(id)
  podcastChaptersCache.set(id, response)

  return response
}
