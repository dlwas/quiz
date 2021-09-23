<template>
  <div id="mdoes" class="grid grid-cols-2 md:grid-cols-3 place-content-start w-full px-2">
    <div
      @click="selectMode(modeName)"
      v-for="modeName in modes"
      class="card flex h-48 sm:h-60 md:h-80 pb-4 place-items-center place-content-center">
      <Icon :name="`card-${modeName}`" class="my-0 mx-0 w-full h-full" />
      <div class="absolute text-center uppercase">
        <h3 class="font-main font-extrabold text-gold text-xl sm:text-xl">
          {{ $t(`modes.${modeName}[0]`) }}
        </h3>
        <p class="font-second font-medium text-white text-tiny sm:text-xs">
          {{
            modeName == 'random'
              ? `${$t(`modes.${modeName}[1]`)} ${$t(`modeSubtitles[0]`)}`
              : `${$t(`modeSubtitles[1]`)} ${$t(`modes.${modeName}[1]`)}`
          }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import Icon from '../components/Icon.vue'

const store = useStore()
const router = useRouter()

const modes = computed(() => store.getters['game/getModes'])

console.log({ router })

const selectMode = (selectedMode: string) => {
  store.commit('game/setGamemode', selectedMode)
  router.push('/gamesettings')
}
</script>
