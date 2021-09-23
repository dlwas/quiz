<template>
  <div id="mdoes" class="grid grid-cols-2 justify-items-center sm:px-8 ip:px-4">
    <div v-for="card in cards" class="mb-6 w-32 h-36 sm:w-44 sm:h-48 ">
      <Icon :name="`card-${card}`" class="mx-0 my-0 w-full h-full" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Icon from '../components/Icon.vue'
const cards = ['random', 'currency', 'boundaries', 'capitals', 'flags']
</script>
