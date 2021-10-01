<template>
  <div class="h-3/4 p-4 flex flex-col justify-between items-center">
    <div class="my-16 tracking-wide font-main text-center sm:text-6xl ip:text-5xl uppercase">
      <p>
        {{ $t('accessdenied') }}
      </p>
    </div>
    <Btn :bg="false" @click="btnClick">
      <Icon name="arrow" color="white" />
      <span class="mx-2">
        {{ $t('backHome') }}
      </span>
    </Btn>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

import Icon from '~/components/Icon.vue'
import Btn from '~/components/Btn.vue'

export default defineComponent({
  name: 'Access Denied',
  components: { Icon, Btn },
  setup() {
    const route = useRouter()

    const btnClick = () => {
      route.push('/')
    }

    return { btnClick }
  },
})
</script>
