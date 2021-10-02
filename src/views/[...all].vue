<template>
  <div class="h-3/4 p-4 flex flex-col justify-between items-center">
    <div class="my-16 tracking-wide font-main text-center sm:text-6xl ip:text-5xl uppercase">
      <p>
        {{ $t('notFound') }}
      </p>
      <p>404</p>
    </div>
    <Button :bg="false" @click="btnClick">
      <Icon name="arrow" color="white" />
      <span class="mx-2">
        {{ $t('button.backHome') }}
      </span>
    </Button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import Icon from '~/components/Icon.vue'
import Button from '~/components/Button.vue'

export default defineComponent({
  name: '[...all]',
  components: { Icon, Button },
  props: {
    all: {
      type: Array,
      default: '404',
    },
  },
  setup() {
    const route = useRouter()

    const btnClick = () => {
      route.push('/')
    }

    return {
      btnClick,
    }
  },
})
</script>
