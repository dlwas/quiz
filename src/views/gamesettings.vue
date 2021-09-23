<template>
  <div class="flex flex-col mt-6 gap-y-6 place-items-center text-center">
    <OptionGroup :text="$t('rounds')">
      <Btn
        v-for="round in rounds"
        class="w-32"
        :bg="game.rounds == round"
        @click="gameSettings.rounds = round">
        {{ round }}
      </Btn>
    </OptionGroup>
    <OptionGroup :text="$t('difficulty')">
      <Btn
        v-for="difficulty in difficulties"
        class="w-32"
        :bg="game.difficulty == difficulty"
        @click="gameSettings.difficulty = difficulty">
        {{ $t(`difficulties.${difficulty}`) }}
      </Btn>
    </OptionGroup>
    <!-- <OptionGroup :text="$t('room')">
      <Btn
        v-for="room in rooms"
        class="w-32"
        :bg="game.room == room"
        @click="gameSettings.room = room">
        {{ $t(`rooms.${room}`) }}
      </Btn>
    </OptionGroup> -->
    <!-- <div class="mt-5" v-if="gameSettings.room == 'frend'">
      <Label :text="`${$t('roomid')}`" />
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
import { computed, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import OptionGroup from '~/components/OptionGroup.vue'
import Btn from '../components/Btn.vue'

// TODO: backend not ready for multiplayer with friend feature
// import Label from '../components/Label.vue'
// import Qr from '../components/Qr.vue'
// import CopyClipboard from '../components/CopyClipboard.vue'

const store = useStore()
const router = useRouter()

const rounds = computed(() => store.getters['game/getRounds'])
const difficulties = computed(() => store.getters['game/getDifficulty'])
const rooms = computed(() => store.getters['game/getRoom'])
const game = computed(() => store.getters['game/getGameInfo'])
const gameSettings = computed(() => game.value)

const btnPlay = () => {
  router.push('game')
}

watch(gameSettings.value, () => {
  store.commit('game/setSettigns', gameSettings)
})
</script>
