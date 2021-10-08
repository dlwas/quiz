<template>
  <div class="h-3/4 p-4 flex flex-col justify-between items-center">
    <IndexTitle>
      <p>{{ $t('title') }}</p>
      <p>{{ $t('subtitle') }}</p>
    </IndexTitle>
    <Button class="w-auto" @click="btnClick">
      {{ $t('button.challenge') }}
    </Button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import IndexTitle from '../components/IndexTitle.vue'
import Button from '../components/Button.vue'

export default defineComponent({
  name: 'index',
  components: { IndexTitle, Button },
  setup() {
    const route = useRouter()

    const btnClick = () => {
      route.push('/modes')
    }

    return { btnClick }
  },
})
</script>
