<template>
  <div class="flex flex-col mt-6 gap-y-6">
    <OptionGroup :text="$t('language')">
      <Btn class="w-32" :bg="isEnglish" @click="setLocale('en')">
        {{ $t('english') }}
      </Btn>
      <Btn class="w-32" :bg="!isEnglish" @click="setLocale('pl')">
        {{ $t('polish') }}
      </Btn>
    </OptionGroup>
    <OptionGroup :text="$t('theme')">
      <Btn class="w-32" :bg="isDark" @click="setTheme('dark')">
        {{ $t('dark') }}
      </Btn>
      <Btn class="w-32" :bg="!isDark" @click="setTheme('light')">
        {{ $t('light') }}
      </Btn>
    </OptionGroup>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { stateTheme, setTheme } from '../composables/useTheme'
import { stateLang, setLang } from '../composables/useLang'
import { useI18n } from 'vue-i18n'
import OptionGroup from '~/components/OptionGroup.vue'
import Btn from '~/components/Btn.vue'

const { locale } = useI18n()
const isDark = computed(() => stateTheme.setted == 'dark')
const isEnglish = computed(() => stateLang.setted == 'en')

const setLocale = (name: string): void => {
  locale.value = name
  setLang(name)
}
</script>
