<template>
  <Placeholder :loading="stateFetch.loading" />
  <div
    v-if="!stateFetch.loading && stateFetch.error"
    class="flex flex-col gap-y-6 place-items-center text-center">
    <GameQuestion :question="t('mode', { correct: gameData[type], type: t(`modes.${type}[0]`) })" />
    <p
      v-for="(answer, index) in answers"
      :key="index"
      @click="selectAnswer"
      class="
        answers
        w-72
        pl-6
        py-3
        bg-opacity-0
        border border-pink
        rounded-lg
        text-left text-md text-gray-darken
        dark:text-white
        capitalize
      ">
      {{ answer }}
    </p>
    <Button class="w-52" :bg="answerSelected" @click="btnNext">
      {{ $t('button.next') }}
    </Button>
  </div>
</template>

<script lang="ts">
import { ref, onMounted, defineComponent, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

import { updateProperty } from '../composables/useNavbar'
import { stateFetch, fetchData } from '../composables/useFetch'
import { stateGame } from '../composables/useGame'
import { stateLang } from '../composables/useLang'
import { clearMarks, parseUrlWithArgs, setNegative, setPositive } from '../composables/useUtils'

import GameQuestion from '../components/GameQuestion.vue'
import Button from '../components/Button.vue'
import Placeholder from '../components/Placeholder.vue'

export default defineComponent({
  name: 'game',
  components: { GameQuestion, Button, Placeholder },
  setup() {
    const { t } = useI18n()
    const router = useRouter()
    const settedLang = ref({ lang: stateLang.setted })

    const settings = stateGame.game
    const fetchResults: any = ref({})
    const type: any = ref('')
    const round = ref(0)
    const gameData = ref([])
    const answers = ref([])
    const answersElm: any = ref([])
    const answerSelected = ref(false)
    const answerCorrect = ref(null)

    updateProperty('text', t(`routes.game`, { rounds: `${round.value + 1}/${settings.rounds}` }))

    onMounted(async () => {
      let baseUrl: any = null
      if (process.env.NODE_ENV === 'production') {
        baseUrl = `https://dlwas-quiz-backend.herokuapp.com/countries/modes/`
      } else {
        baseUrl = `http://localhost:3001/countries/modes/`
      }
      const url = parseUrlWithArgs(baseUrl, [settings, settedLang.value])
      const results = await fetchData(url) // data, type

      fetchResults.value = results.data
      type.value = results.mode
      gameData.value = results.data[round.value]
      answers.value = results.data[round.value].answers
      answerCorrect.value = results.data[round.value].correct
    })

    const selectAnswer = (e: any) => {
      const elm = e.srcElement
      answersElm.value = document.querySelectorAll('.answers')
      if (!answerSelected.value) {
        const correctElm: any = Array.from(answersElm.value).find(
          (elm: any) => elm.innerHTML == answerCorrect.value
        )
        if (answerCorrect.value == elm.innerHTML) {
          setPositive(correctElm)
          stateGame.score.scored += 1
        } else {
          setNegative(elm)
          setPositive(correctElm)
        }
      }
      answerSelected.value = true
    }

    const btnNext = () => {
      if (settings.rounds != null && answerSelected.value == true) {
        if (round.value >= settings.rounds - 1) {
          router.push('score')
        } else {
          clearMarks(answersElm.value)
          answerSelected.value = false
          round.value++
          updateProperty(
            'text',
            t(`routes.game`, { rounds: `${round.value + 1}/${settings.rounds}` })
          )
        }
      }
    }

    watch(round, () => {
      gameData.value = fetchResults.value[round.value]
      answers.value = fetchResults.value[round.value].answers
      answerCorrect.value = fetchResults.value[round.value].correct
    })

    return {
      t,
      btnNext,
      selectAnswer,
      answerSelected,
      stateFetch,
      type,
      gameData,
      answers,
    }
  },
})
</script>
