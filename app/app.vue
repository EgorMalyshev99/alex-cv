<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
const { locale } = useI18n()
const i18nHead = useLocaleHead({ seo: true })

useHead({
  htmlAttrs: {
    lang: () => locale.value,
  },
  link: () => i18nHead.value.link ?? [],
  meta: () => i18nHead.value.meta ?? [],
})
</script>
