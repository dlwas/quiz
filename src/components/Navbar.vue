<template>
  <div id="navbar" class="z-3 p-4 flex mb-4 ">
    <div class="flex flex-none cursor-pointer w-10">
      <Icon
        v-show="data.active['left']"
        @click="navClick('left')"
        :name="data.icon['left']"
        class="w-6 h-6 m-2"
      />
    </div>
    <span
      class="
        flex flex-grow
        justify-center
        items-center
        font-second
        uppercase
        text-xl text-gold
      "
    >
      {{ routeName }}
    </span>
    <div class="flex flex-none cursor-pointer w-10">
      <Icon
        v-show="data.active['right']"
        @click="navClick('right')"
        :name="data.icon['right']"
        class="w-6 h-6 m-2"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { useI18n } from 'vue-i18n'
import Icon from '~/components/Icon.vue'

const { t } = useI18n()

const router = useRouter()
const store = useStore()
const data = computed(() => store.getters['navbar/get'])
const routeName = computed(() =>
  t(`routes.${store.getters['navbar/getSetted']}`)
)

const navClick = (side: string): void => {
  if (side) {
    const path: string = `/${data.value.path[side]}`
    router.push({ path })
  }
}
</script>
