<template>
  <div class="h-3/4 p-4 flex flex-col justify-between items-center">
    <div
      class="
        my-16
        tracking-wide
        font-main
        text-center
        sm:text-6xl
        ip:text-5xl
        uppercase
      "
    >
      <p>
        {{ $t('notFound')}}
      </p>
      <p>404</p>
    </div>
    <Btn :bg="false" @click="btnClick">
      <Icon name="arrow" color="white" />
      <span class="mx-2">
        {{ $t('backHome')}}
      </span>
    </Btn>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import Icon from '~/components/Icon.vue'
import Btn from '~/components/Btn.vue'

const props = defineProps({
  all: {
    type: Array,
    default: '404',
  },
})

const route = useRouter()

const btnClick = () => {
  route.push('/modes')
}
</script>
