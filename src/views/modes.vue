<template>
  <div id="mdoes" class="flex flex-wrap place-content-center w-full px-2">
    <div
      @click="bntSelectMode(modeName)"
      v-for="modeName in modes"
      class="
        card
        flex
        w-36
        sm:w-44
        h-44
        sm:h-56
        md:h-52
        pb-4
        place-items-center place-content-center
      ">
      <Icon :name="`card-${modeName}`" class="my-0 mx-0 w-full h-full" />
      <div class="absolute text-center uppercase">
        <h3 class="font-main font-extrabold text-gold text-sm sm:text-lg">
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

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useRouter } from 'vue-router'
import { stateGame, setGameMode } from '../composables/useGame'
import Icon from '../components/Icon.vue'

export default defineComponent({
  name: 'modes',
  components: { Icon },
  props: {},
  setup() {
    const router = useRouter()

    const modes = computed(() => stateGame.modes)

    const bntSelectMode = (selectedMode: string) => {
      setGameMode(selectedMode)
      router.push('/gamesettings')
    }

    return { modes, bntSelectMode }
  },
})
</script>
