<template>
  <div class="h-2/3 flex flex-col gap-y-6 place-items-center place-content-center text-center">
    <div class="flex justify-center place-items-end text-gold">
      <span class="text-7xl sm:text-9xl">{{ scored }}</span>
      <span class="text-2xl sm:text-3xl">/ {{ rounds }}</span>
    </div>
    <Btn class="w-32 mt-5" @click="btnModes">
      {{ $t(`button.again`) }}
    </Btn>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import { stateGame } from '../composables/useGame'
import Btn from '../components/Btn.vue'

export default defineComponent({
  name: 'Score',
  components: { Btn },
  setup() {
    const router = useRouter()

    const btnModes = () => {
      router.push('modes')
    }

    const scored = stateGame.score.scored
    const rounds = stateGame.game.rounds

    return {
      btnModes,
      scored,
      rounds,
    }
  },
})
</script>
