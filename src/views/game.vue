<template>
  <div class="flex flex-col gap-y-6 place-items-center text-center">
    <div class="w-72">
      <Icon v-if="withImage" name="card-flag" class="w-full h-52" />
      <h3 class="uppercase text-xl font-bold">which country the flag belongs to</h3>
    </div>
    <p
      v-for="(answer, index) in answers"
      @click="selectAnswer"
      :id="`${index + 1}`"
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

<script lang="ts" setup>
import { ref } from 'vue'
import { getRandomInt } from '../composables/useUtils'
import Btn from '../components/Btn.vue'
import Icon from '../components/Icon.vue'

const answers = ['answer 1', 'answer 2', 'answer 3', 'answer 4']
const answerSelected = ref(false)
const answerCorrect = ref(getRandomInt(1, 4))
const withImage = true

const questions = [
  {
    withImage: true,
    imageSrc: './///',
    question: '',
    answers: ['answer 1', 'answer 2', 'answer 3', 'answer 4'],
    correctAnswer: 3,
  },
  {
    withImage: false,
    imageSrc: '',
    question: '',
    answers: ['answer 1', 'answer 2', 'answer 3'],
    correctAnswer: 2,
  },
]

console.log(answerCorrect.value)

const selectAnswer = (e: any) => {
  const elm = e.srcElement
  const elmID = elm.id

  if (!answerSelected.value) {
    if (answerCorrect.value == elmID) {
      // add green to correct selected answer
      elm.classList.remove('border', 'border-pink')
      elm.classList.add('bg-green-700', 'bg-opacity-60', 'border-1', 'border-white-900')
    } else {
      // add red to wrong selected answer
      elm.classList.remove('border', 'border-pink')
      elm.classList.add('bg-red-700', 'bg-opacity-60', 'border-1', 'border-white-900')
      // add green to correct answer
      document
        .getElementById(`${answerCorrect.value}`)
        ?.classList.add('bg-green-700', 'bg-opacity-70')
    }
  }
  answerSelected.value = true
}

const btnNext = () => {
  console.log('answerSelected')
}
</script>
