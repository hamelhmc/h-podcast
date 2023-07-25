<script setup lang="ts">
import { loadingStore } from '@/stores/loadingStore'

const store = loadingStore()
</script>

<template>
  <header class="flex items-center justify-between p-4 shadow-md h-14">
    <router-link v-slot="{ navigate }" to="/">
      <h1 class="text-lg lg:text-2xl font-bold tracking-widest text-blue-400" @click="navigate">
        Podcaster
      </h1>
    </router-link>
    <div v-if="store.isLoading" class="loader ease-linear"></div>
  </header>
  <RouterView></RouterView>
</template>

<style scoped></style>
