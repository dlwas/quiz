<template>
  <div>
    <div v-for="(answer, index) in answers" :key="index" class="mb-5">
      <OptionGroup :text="`${answer.item}  ${$t(`mode.${answer.type}`)}`">
        <p
          v-if="answer.correct"
          class="
            w-72
            pl-6
            py-3
            border border-pink
            bg-green-700 bg-opacity-60
            text-left text-md text-gray-darken
            dark:text-white
            rounded-lg
            capitalize
          ">
          {{ answer.correct }}
        </p>
        <p
          v-if="answer.negative"
          class="
            w-72
            pl-6
            py-3
            border border-pink
            bg-red-700 bg-opacity-60
            text-left text-md text-gray-darken
            dark:text-white
            rounded-lg
            capitalize
          ">
          {{ answer.negative }}
        </p>
      </OptionGroup>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import OptionGroup from '../components/OptionGroup.vue'
import GameQuestion from '../components/GameQuestion.vue'

import { SelectedAnswersItem } from '../types/game'

export default defineComponent({
  name: 'LabelAnswer',
  components: { OptionGroup, GameQuestion },
  props: {
    answers: [] as any,
  },
  setup() {
    return {}
  },
})
</script>
