<template>
  <div class="h-3/4 p-4 flex flex-col justify-between items-center">
    <div
      class="
        my-16
        tracking-wide
        font-main font-extrabold
        text-gold text-center text-5xl
        sm:text-6xl
        uppercase
      ">
      <p>
        {{ $t('title') }}
      </p>
      <p>
        {{ $t('subtitle') }}
      </p>
    </div>
    <Btn class="w-52" @click="btnClick">
      {{ $t('button.challenge') }}
    </Btn>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
import Btn from '~/components/Btn.vue'

const route = useRouter()

const btnClick = () => {
  route.push('/modes')
}
</script>
