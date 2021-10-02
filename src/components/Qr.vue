<template>
  <qrcode :size="size" :margin="2" background="white" :value="value"></qrcode>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import qrcode from 'qrcode.vue'

export default defineComponent({
  name: 'Qr',
  components: { qrcode },
  props: {
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
  },
  setup() {
    return {}
  },
})
</script>
