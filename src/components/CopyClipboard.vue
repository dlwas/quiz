<template>
  <p class="mt-5 text-sm text-white uppercase" @click="btnCopy">
    {{ $t('copyLink') }}
  </p>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CopyClipboard',
  components: {},
  props: {
    data: {
      type: String,
      default: 'https://github.com/dlwas',
    },
  },
  setup(props) {
    const btnCopy = () => {
      navigator.clipboard.writeText(props.data).then(
        function () {
          console.log('Async: Copying to clipboard was successful!')
        },
        function (err) {
          console.error('Async: Could not copy text: ', err)
        }
      )
    }
    return { btnCopy }
  },
})
</script>
