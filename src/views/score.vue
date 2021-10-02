<template>
  <div class="h-2/3 flex flex-col gap-y-6 place-items-center place-content-center text-center">
    <ScoreResults>
      <span class="text-7xl sm:text-9xl">{{ scored }}</span>
      <span class="text-2xl sm:text-3xl">/ {{ rounds }}</span>
    </ScoreResults>
    <Button class="w-auto mt-5" @click="btnModes">
      {{ $t(`button.again`) }}
    </Button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import { stateGame } from '../composables/useGame'
import ScoreResults from '../components/ScoreResults.vue'
import Button from '../components/Button.vue'

export default defineComponent({
  name: 'Score',
  components: { ScoreResults, Button },
  setup() {
    const router = useRouter()

    const scored = stateGame.score.scored
    const rounds = stateGame.game.rounds

    const btnModes = () => {
      router.push('modes')
    }

    return {
      btnModes,
      scored,
      rounds,
    }
  },
})
</script>
