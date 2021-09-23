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
import { state as themeState, setTheme } from '../composable/useTheme'
import { state as langState, setLang } from '../composable/useLang'
import { useI18n } from 'vue-i18n'
import OptionGroup from '~/components/OptionGroup.vue'
import Btn from '~/components/Btn.vue'

const { locale } = useI18n()
const isDark = computed(() => themeState.setted == 'dark')
const isEnglish = computed(() => langState.setted == 'en')

const setLocale = (name: string): void => {
  locale.value = name
  setLang(name)
}
</script>
