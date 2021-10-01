<template>
  <div v-if="stateFetch.loading">Please check your internet connection and try again</div>
  <div
    v-if="!stateFetch.loading && stateFetch.error"
    class="flex flex-col gap-y-6 place-items-center text-center">
    <GameQuestion :question="`${gameData[type]} is ${type} of:`" />
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
        text-white text-left text-md
        capitalize
      ">
      {{ answer }}
    </p>
    <Btn class="w-52" :bg="answerSelected" @click="btnNext">
      {{ $t('button.next') }}
    </Btn>
  </div>
</template>

<script lang="ts">
import { ref, onMounted, defineComponent, watch } from 'vue'
import { useRouter } from 'vue-router'

import { updateProperty } from '../composables/useNavbar'
import { stateFetch, fetchData } from '../composables/useFetch'
import { stateGame } from '../composables/useGame'
import { clearMarks, setNegative, setPositive } from '../composables/useUtils'

import GameQuestion from '../components/GameQuestion.vue'
import Btn from '../components/Btn.vue'

export default defineComponent({
  name: 'game',
  components: { GameQuestion, Btn },
  setup() {
    const router = useRouter()

    const settings = stateGame.game
    const fetchResults: any = ref({})
    const type: any = ref('')
    const round = ref(0)
    const gameData = ref([])
    const answers = ref([])
    const answersElm: any = ref([])
    const answerSelected = ref(false)
    const answerCorrect = ref(null)

    updateProperty('text', `question ${round.value + 1}/${settings.rounds}`)

    onMounted(async () => {
      let defaultUrl: any = null
      if (process.env.NODE_ENV === 'production') {
        defaultUrl = `https://dlwas-quiz-app-backend.herokuapp.com/countries/modes/`
      } else {
        defaultUrl = `http://localhost:3001/countries/modes/`
      }
      const url = new URL(
        `${defaultUrl}${settings.mode}?${new URLSearchParams(settings as keyof object)}`
      )
      const results = await fetchData(url as keyof object) // data, type
      fetchResults.value = results.data
      type.value = results.type
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
      if (settings.rounds != null) {
        if (round.value >= settings.rounds - 1) {
          router.push('score')
        } else {
          clearMarks(answersElm.value)
          answerSelected.value = false
          round.value++

          updateProperty('text', `question ${round.value + 1}/${settings.rounds}`)
        }
      }
    }

    watch(round, () => {
      gameData.value = fetchResults.value[round.value]
      answers.value = fetchResults.value[round.value].answers
      answerCorrect.value = fetchResults.value[round.value].correct
    })

    return {
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
