<template>
  <div class="z-1 fixed">
    <Icon :name="`bg-${stateTheme.setted}`" class="w-screen h-screen m-0" />
  </div>

  <div class="absolute flex place-content-center w-full h-full">
    <div class="absolute w-full h-full mobile-view">
      <!-- max-w-screen-sm -->
      <Navbar />
      <router-view v-slot="{ Component, route }">
        <transition name="fade" mode="out-in">
          <component :is="Component" :key="route.path" />
        </transition>
      </router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { stateTheme } from './composables/useTheme'

import Icon from '~/components/Icon.vue'
import Navbar from '~/components/Navbar.vue'

export default defineComponent({
  name: 'App',
  components: { Icon, Navbar },
  setup() {
    return {
      stateTheme,
    }
  },
})
</script>
