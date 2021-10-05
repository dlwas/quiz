<template>
  <div class="flex flex-col mt-6 gap-y-6">
    <OptionGroup :text="$t('language')">
      <Button class="w-32" :bg="isEnglish" @click="setLocale('en')">
        {{ $t('english') }}
      </Button>
      <Button class="w-32" :bg="!isEnglish" @click="setLocale('pl')">
        {{ $t('polish') }}
      </Button>
    </OptionGroup>
    <OptionGroup :text="$t('theme')">
      <Button class="w-32" :bg="isDark" @click="setTheme('dark')">
        {{ $t('dark') }}
      </Button>
      <Button class="w-32" :bg="!isDark" @click="setTheme('light')">
        {{ $t('light') }}
      </Button>
    </OptionGroup>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { stateTheme, setTheme } from '../composables/useTheme'
import { stateLang, setLang } from '../composables/useLang'
import { useI18n } from 'vue-i18n'
import OptionGroup from '../components/OptionGroup.vue'
import Button from '../components/Button.vue'

export default defineComponent({
  name: 'settings',
  components: { OptionGroup, Button },
  setup() {
    const { locale } = useI18n()
    const isDark = computed(() => stateTheme.setted == 'dark')
    const isEnglish = computed(() => stateLang.setted == 'en')

    const setLocale = (name: string): void => {
      locale.value = name
      setLang(name)
    }

    return { isDark, isEnglish, setLocale, setTheme }
  },
})
</script>
