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

<script lang="ts" setup>
import Label from '~/components/Label.vue'

const props = defineProps({
  text: {
    type: String,
    default: 'null',
  },
})
</script>
