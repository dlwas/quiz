<template>
  <div
    class="
      button
      cursor-pointer
      font-second
      flex
      justify-center
      items-center
      px-6
      py-3
      text-sm
      uppercase
      bg-gray-200
      dark:bg-gray-darken
      rounded-full
    "
    :class="{ 'bg-gradient-to-tr from-pink-darken to-pink': props.bg, 'text-white': props.bg }">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Button',
  props: {
    bg: {
      type: Boolean,
      default: true,
    },
  },
  setup(props) {
    return { props }
  },
})
</script>
