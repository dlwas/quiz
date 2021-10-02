<template>
  <div class="w-72">
    <h3 class="uppercase text-xl font-bold">
      {{ question }}
    </h3>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'GameQuestion',
  components: {},
  props: {
    question: {
      type: String,
      default: '',
    },
  },
  setup() {
    return {}
  },
})
</script>
