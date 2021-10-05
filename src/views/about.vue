<template>
  <div class="w-full text-center">
    <OptionGroup class="mb-6" text="Contact">
      <Button class="w-min">
        <p class="normal-case">darek.leszek.wasilewski@gmail.com</p>
      </Button>
    </OptionGroup>
    <OptionGroup class="mb-6" text="Repository">
      <Button class="w-min">
        <a class="normal-case" href="https://github.com/dlwas/quiz">
          https://github.com/dlwas/quiz
        </a>
      </Button>
    </OptionGroup>
    <OptionGroup class="mb-6" text="Github">
      <Button class="w-min">
        <a class="normal-case" href="https://github.com/dlwas">https://github.com/dlwas</a>
      </Button>
    </OptionGroup>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Label from '../components/Label.vue'
import Button from '../components/Button.vue'
import OptionGroup from '../components/OptionGroup.vue'

export default defineComponent({
  name: 'about',
  components: { Label, Button, OptionGroup },
  props: {},
  setup() {
    return {}
  },
})
</script>
