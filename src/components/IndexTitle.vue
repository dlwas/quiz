<template>
  <div
    class="
      my-16
      tracking-wide
      font-main font-extrabold
      text-pink-darken
      dark:text-gold 
      text-center text-5xl
      sm:text-6xl
      uppercase
    ">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexTitle',
  setup() {
    return {}
  },
})
</script>
