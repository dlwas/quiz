<template>
  <div class="flex flex-col mt-6 gap-y-6">
    <OptionGroup :text="$t('rounds')">
      <Btn
        v-for="round in rounds"
        class="w-1/3"
        :bg="game.rounds == round"
        @click="gameSettings.rounds = round">
        {{ round }}
      </Btn>
    </OptionGroup>
    <OptionGroup :text="$t('difficulty')">
      <Btn
        v-for="difficulty in difficulties"
        class="w-1/3"
        :bg="game.difficulty == difficulty"
        @click="gameSettings.difficulty = difficulty">
        {{ $t(`difficulties.${difficulty}`) }}
      </Btn>
    </OptionGroup>
    <OptionGroup :text="$t('room')">
      <Btn
        v-for="room in rooms"
        class="w-1/3"
        :bg="game.room == room"
        @click="gameSettings.room = room">
        {{ $t(`rooms.${room}`) }}
      </Btn>
    </OptionGroup>
  </div>
</template>

<script lang="ts" setup>
import { computed, watch } from 'vue'
import { useStore } from 'vuex'
import OptionGroup from '~/components/OptionGroup.vue'
import Btn from '~/components/Btn.vue'

const store = useStore()

const rounds = computed(() => store.getters['game/getRounds'])
const difficulties = computed(() => store.getters['game/getDifficulty'])
const rooms = computed(() => store.getters['game/getRoom'])
const game = computed(() => store.getters['game/getGameInfo'])
const gameSettings = computed(() => game.value)

watch(gameSettings.value, () => {
  store.commit('game/setSettigns', gameSettings)
  console.log({ game })
})
</script>
