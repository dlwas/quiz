<template>
  <div class="flex flex-col gap-y-6 place-items-center place-content-center text-center">
    <ScoreResults class="my-5">
      <span class="text-7xl sm:text-9xl">{{ scored }}</span>
      <span class="text-2xl sm:text-3xl">/ {{ rounds }}</span>
    </ScoreResults>

    <OptionGroup text="mode / difficulty">
      <p class="uppercase font-bold text-pink-darken dark:text-gold">
        {{ `${mode} / ${difficulty}` }}
      </p>
    </OptionGroup>

    <LabelAnswer :answers="selectedAnswers" />

    <Button class="w-auto mb-10" @click="btnModes">
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
import LabelAnswer from '../components/LabelAnswer.vue'
import OptionGroup from '../components/OptionGroup.vue'

export default defineComponent({
  name: 'Score',
  components: { ScoreResults, Button, LabelAnswer, OptionGroup },
  setup() {
    const router = useRouter()

    const scored = stateGame.score.scored
    const rounds = stateGame.game.rounds
    const difficulty = stateGame.game.difficulty
    const mode = stateGame.game.mode
    const selectedAnswers = stateGame.score.selectedAnswers

    const btnModes = () => {
      router.push('modes')
    }

    return {
      btnModes,
      scored,
      rounds,
      selectedAnswers,
      difficulty,
      mode,
    }
  },
})
</script>
