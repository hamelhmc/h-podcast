<script setup lang="ts">
import { formatearDuracion } from '@/core/utils/formatear-duracion'
import { formatearFecha } from '@/core/utils/formatear-fecha'
import type { PodcastDetail } from '@/podcast/model/podcast-detail'

interface Props {
  podcastDetail: PodcastDetail
}

defineProps<Props>()
</script>

<template>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg bg-white">
    <table class="min-w-full divide-y divide-gray-200">
      <thead class="">
        <tr>
          <th scope="col" class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
            Title
          </th>
          <th scope="col" class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
            Date
          </th>
          <th scope="col" class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
            Duration
          </th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-gray-200">
        <router-link
          v-for="chapter in podcastDetail.chapters"
          :key="chapter.id"
          :to="`/podcast/${podcastDetail.id}/episode/${chapter.id}`"
          custom>
          <template #default="{ href, navigate }">
            <tr
              class="cursor-pointer hover:odd:bg-gray-100 hover:even:bg-slate-100 odd:bg-white even:bg-slate-50"
              :href="href"
              @click="navigate">
              <td class="px-6 py-4 whitespace-normal break-words">
                <div class="text-sm font-medium text-gray-900">
                  {{ chapter.title }}
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-500">
                  {{ formatearFecha(chapter.date) }}
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {{ formatearDuracion(chapter.duration) }}
              </td>
            </tr>
          </template>
        </router-link>
      </tbody>
    </table>
  </div>
</template>
