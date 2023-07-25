import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/podcast/views/PodcastView.vue')
    },
    {
      path: '/podcast/:id',
      component: () => import('@/podcast/views/PodcastDetailView.vue')
    },
    {
      path: '/podcast/:podcastId/episode/:episodeId',
      component: () => import('@/podcast/views/EpisodeDetailView.vue')
    }
  ],
  scrollBehavior(to, _from, _savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }
  }
})

export default router
