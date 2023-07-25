import { defineStore } from 'pinia'

export const loadingStore = defineStore('loadingStore', {
  state: () => ({
    isLoading: true
  }),
  actions: {
    setLoadingState(state: boolean) {
      this.isLoading = state
    }
  }
})
