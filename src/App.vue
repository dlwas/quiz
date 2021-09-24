<template>
  <div class="z-1 fixed ">
    <Icon name="bg" class="w-screen h-screen m-0" />
  </div>

  <div class="absolute flex place-content-center w-full h-full">
    <div class="absolute w-full h-full">
      <!-- max-w-screen-sm -->
      <Navbar />
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
import Icon from '~/components/Icon.vue'
import Navbar from '~/components/Navbar.vue'
</script>
