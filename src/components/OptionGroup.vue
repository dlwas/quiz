<template>
  <div class="flex flex-col gap-y-2">
    <div class="text-center">
      <Label> {{ text }} </Label>
    </div>
    <div class="flex flex-wrap justify-center gap-2">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Label from '~/components/Label.vue'

export default defineComponent({
  name: 'OptionGroup',
  components: { Label },
  props: {
    text: {
      type: String,
      default: 'null',
    },
  },
  setup() {
    return {}
  },
})
</script>
