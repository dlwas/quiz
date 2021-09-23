<template>
  <qrcode :size="size" :margin="2" background="white" :value="value"></qrcode>
</template>

<script lang="ts" setup>
import qrcode from 'qrcode.vue'

const props = defineProps({
  size: {
    type: Number,
    default: 200,
  },
  margin: {
    type: Number,
    default: 3,
  },
  value: {
    type: String,
    default: 'https://github.com/dlwas',
  },
})
</script>
