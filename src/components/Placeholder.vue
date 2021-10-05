<template>
  <div v-if="loading" class="flex w-full justify-center">
    <Icon name="spinner" class="animate-spin w-20 h-20 m-2 text-pink-darken dark:text-gold" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Icon from './Icon.vue'

export default defineComponent({
  name: 'Placeholder',
  components: { Icon },
  props: {
    loading: {
      type: Boolean,
      default: true,
    },
  },
  setup() {
    return {}
  },
})
</script>
