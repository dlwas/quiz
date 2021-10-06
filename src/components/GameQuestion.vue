<template>
  <div class="w-72">
    <h3 class="uppercase text-xl">
      <span class="font-bold text-pink-darken dark:text-gold">
        {{ correct }}
      </span>
      <span>
        {{ $t(`mode.${type}`) }}
      </span>
    </h3>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'GameQuestion',
  props: {
    correct: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: '',
    },
  },
  setup() {
    return {}
  },
})
</script>
