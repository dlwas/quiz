<template>
  <div class="flex flex-col mt-6 gap-y-6 place-items-center text-center">
    <OptionGroup :text="$t('rounds')">
      <Btn
        v-for="round in gameData.rounds"
        class="w-32"
        :bg="gameSetted.rounds == round"
        @click="gameSetted.rounds = round">
        {{ round }}
      </Btn>
    </OptionGroup>
    <OptionGroup :text="$t('difficulty')">
      <Btn
        v-for="difficulty in gameData.difficulty"
        class="w-32"
        :bg="gameSetted.difficulty == difficulty"
        @click="gameSetted.difficulty = difficulty">
        {{ $t(`difficulties.${difficulty}`) }}
      </Btn>
    </OptionGroup>
    <!-- <OptionGroup :text="$t('room')">
      <Btn
        v-for="room in gameData.room"
        class="w-32"
        :bg="gameSetted.room == room"
        @click="gameSetted.room = room">
        {{ $t(`rooms.${room}`) }}
      </Btn>
    </OptionGroup>
    <div class="mt-5" v-if="gameSetted.room == 'frend'">
      <Label> {{ $t('roomid') }} </Label>
      <p class="text-5xl text-white uppercase">AAAA</p>
      <Qr value="AAAA" class="mt-4" />
      <CopyClipboard data="asd" />
    </div> -->
    <Btn class="w-32 mt-5" @click="btnPlay">
      {{ $t(`button.play`) }}
    </Btn>
  </div>
</template>

<script lang="ts" setup>
import { computed, watch, ref } from 'vue'
import { useRouter } from 'vue-router'
import { stateGame, setSettings } from '../composables/useGame'
import OptionGroup from '~/components/OptionGroup.vue'

import Btn from '../components/Btn.vue'

// TODO: backend not ready for multiplayer with friend feature
// import Label from '../components/Label.vue'
// import Qr from '../components/Qr.vue'
// import CopyClipboard from '../components/CopyClipboard.vue'

const router = useRouter()

const gameData = computed(() => stateGame)
const gameSetted = computed(() => stateGame.game)

const btnPlay = () => {
  router.push('game')
}

watch(gameSetted.value, () => {
  setSettings(gameSetted.value)
})
</script>
