import { apiService } from '@/core/services/api-service'
import { LocalCache } from '@/core/services/local-cache'
import type { PodcastModel } from '../model/PodcastModel'

const podcastCache = new LocalCache('GET_ALL_PODCASTS')

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
  summary: Label
}

interface Feed {
  entry: Entry[]
}

interface PodcastResponse {
  feed: Feed
}

async function fetchAllPodcast(): Promise<PodcastModel[]> {
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
    title: podcast['im:name'].label,
    summary: podcast.summary.label
  }))
}

export async function getAllPodcast(): Promise<PodcastModel[]> {
  const cachedPodcasts = podcastCache.get<PodcastModel[]>('ALL')

  if (cachedPodcasts) {
    return cachedPodcasts
  }

  const response = await fetchAllPodcast()
  podcastCache.set('ALL', response)

  return response
}
