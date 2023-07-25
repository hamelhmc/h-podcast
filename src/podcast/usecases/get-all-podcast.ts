import { apiService } from '@/core/services/api-service'
import type { PodcastModel } from '../model/PodcastModel'

interface Label {
  label: string
}

interface EntryImage extends Label {
  attributes: {
    height: string
  }
}

interface EntryID extends Label {
  attributes: {
    'im:id': string
  }
}

interface Entry {
  'im:name': Label
  'im:image': EntryImage[]
  'im:artist': Label
  title: Label
  id: EntryID
}

interface Feed {
  entry: Entry[]
}

interface PodcastResponse {
  feed: Feed
}

async function getAll(): Promise<PodcastModel[]> {
  const url = 'us/rss/toppodcasts/limit=100/genre=1310/json'
  const response = await apiService.get<PodcastResponse>(url)
  const result = responseToPodcastModel(response)
  return result
}

function responseToPodcastModel(response: PodcastResponse): PodcastModel[] {
  return response.feed.entry.map((podcast) => ({
    id: podcast.id.attributes['im:id'],
    autor: podcast['im:artist'].label,
    image: {
      url: podcast['im:image'][2].label,
      height: podcast['im:image'][2].attributes.height
    },
    title: podcast['im:name'].label
  }))
}

function getCachedPodcasts(): PodcastModel[] | null {
  const lastFetchDate = localStorage.getItem('lastFetchDate')
  const cachedPodcasts = localStorage.getItem('podcasts')

  if (
    cachedPodcasts &&
    lastFetchDate &&
    new Date().getTime() - Number(lastFetchDate) < 24 * 60 * 60 * 1000
  ) {
    return JSON.parse(cachedPodcasts)
  }

  return null
}

function savePodcastsToCache(podcasts: PodcastModel[]) {
  localStorage.setItem('podcasts', JSON.stringify(podcasts))
  localStorage.setItem('lastFetchDate', String(new Date().getTime()))
}

export async function getAllPodcast(): Promise<PodcastModel[]> {
  const cachedPodcasts = getCachedPodcasts()

  if (cachedPodcasts) {
    return cachedPodcasts
  }

  const response = await getAll()
  savePodcastsToCache(response)

  return response
}
