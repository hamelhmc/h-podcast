<script setup lang="ts">
interface Props {
  name?: string
}

withDefaults(defineProps<Props>(), {
  name: ''
})
</script>

<template>
  <section></section>
</template>

<style lang="css" scoped>
section {
  color: v-bind('name');
}
</style>
