import PodcastView from '@/podcast/views/PodcastView.vue'
import { mount } from '@vue/test-utils'
import { createPinia } from 'pinia'
import { describe, expect, it } from 'vitest'

const pinia = createPinia()

describe('PodcastView', () => {
  const wrapper = mount(PodcastView, {
    global: {
      plugins: [pinia]
    }
  })

  it('render', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('SearchBar component', () => {
    expect(wrapper.findComponent({ name: 'SearchBar' })).toBeTruthy()
  })

  it('PodcastList component', () => {
    expect(wrapper.findComponent({ name: 'PodcastList' })).toBeTruthy()
  })
})
