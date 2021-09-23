<template>
  <span class="font-second text-grey text-xs text-center uppercase">
    {{ text }}
  </span>
</template>

<script lang="ts" setup>
const props = defineProps({
  text: {
    type: String,
    default: 'null',
  },
})
</script>
