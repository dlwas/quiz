<template>
  <div class="flex justify-center place-items-end text-pink-darken dark:text-gold">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ScoreResults',
  setup() {
    return {}
  },
})
</script>
