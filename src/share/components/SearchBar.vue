<script setup lang="ts">
import { computed } from 'vue'

type Props = {
  modelValue: string
  itemCount: number
}

const props = defineProps<Props>()

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const value = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  }
})
</script>

<template>
  <div class="flex justify-end items-center gap-4">
    <div class="">
      <p class="text-gray-800">{{ itemCount }}</p>
    </div>
    <form class="w-full max-w-sm">
      <div class="relative">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            class="w-5 h-5 text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <input
          id="default-search"
          v-model="value"
          type="search"
          class="w-full pl-10 pr-4 py-2 rounded-lg shadow-md bg-white text-sm text-gray-700 focus:outline-none"
          placeholder="Buscar podcast por título o autor..."
          autocomplete="off" />
      </div>
    </form>
  </div>
</template>
