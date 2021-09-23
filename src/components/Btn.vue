<template>
  <div
    class="
      btn
      cursor-pointer
      font-second
      flex
      justify-center
      items-center
      px-6
      py-2
      text-base
      uppercase
      bg-grey-darken
      rounded-full
    "
    :class="{ 'bg-gradient-to-tr from-pink-darken to-pink': bg }"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  bg: {
    type: Boolean,
    default: true,
  },
})
</script>
