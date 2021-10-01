<template>
  <div
    class="
      btn
      cursor-pointer
      font-second
      flex
      justify-center
      items-center
      px-4
      py-2
      text-sm
      uppercase
      bg-grey-darken
      rounded-full
    "
    :class="{ 'bg-gradient-to-tr from-pink-darken to-pink': props.bg }">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'Btn',
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
