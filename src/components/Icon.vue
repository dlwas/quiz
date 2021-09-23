<template>
  <svg aria-hidden="true" class="inline w-4 h-4 m-2">
    <use :xlink:href="symbolId" :fill="color" />
  </svg>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

const props = defineProps({
  prefix: {
    type: String,
    default: 'icon',
  },
  name: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: '#A12568',
  },
})

const symbolId = computed(() => `#${props.prefix}-${props.name}`)
</script>
