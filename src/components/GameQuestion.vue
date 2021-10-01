<template>
  <div class="w-72">
    <h3 class="uppercase text-xl font-bold">
      {{ question }}
    </h3>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  question: {
    type: String,
    default: '',
  },
})
</script>
