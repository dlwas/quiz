<template>
  <div id="navbar" class="p-4 flex mb-4">
    <div class="flex flex-none cursor-pointer w-10">
      <Icon @click="leftClick" :name="data.leftIcon" class="w-6 h-6 m-2" />
    </div>
    <span
      class="flex flex-grow justify-center items-center font-second uppercase text-xl text-gold">
      {{ routeName }}
    </span>
    <div class="flex flex-none cursor-pointer w-10">
      <Icon @click="rightClick" :name="data.rightIcon" class="w-6 h-6 m-2" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { stateNavbar } from '../composables/useNavbar'
import Icon from '~/components/Icon.vue'

const router = useRouter()

const data = computed(() => stateNavbar.data)
const routeName = computed(() => stateNavbar.data.text)

const leftClick = () => router.push(data.value.leftPath ? String(data.value.leftPath) : '')
const rightClick = () => router.push(data.value.rightPath ? String(data.value.rightPath) : '')
</script>
