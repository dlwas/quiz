<template>
  <p class="mt-5 text-sm text-white uppercase" @click="copy">
    {{ $t('copyLink') }}
  </p>
</template>

<script lang="ts" setup>
const props = defineProps({
  data: {
    type: String,
    default: 'https://github.com/dlwas',
  },
})
const copy = () => {
  navigator.clipboard.writeText(props.data).then(
    function () {
      console.log('Async: Copying to clipboard was successful!')
    },
    function (err) {
      console.error('Async: Could not copy text: ', err)
    }
  )
}
</script>
