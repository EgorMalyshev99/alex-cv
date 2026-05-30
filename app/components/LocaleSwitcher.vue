<template>
  <button
    type="button"
    :aria-label="$t('nav.switchLanguage')"
    class="text-ink inline-flex items-center gap-1 rounded-xl px-3 py-2 font-sans text-sm font-semibold tracking-wider
      uppercase transition-colors hover:bg-white/50"
    @click="toggle"
  >
    <span
      v-for="l in locales"
      :key="l.code"
      :class="['transition-opacity', l.code === locale ? 'opacity-100' : 'opacity-40']"
    >
      {{ l.code }}
    </span>
  </button>
</template>

<script setup lang="ts">
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()

function toggle(): void {
  const next = locale.value === 'en' ? 'ru' : 'en'
  navigateTo(switchLocalePath(next))
}
</script>
