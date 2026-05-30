<template>
  <div>
    <SectionsSiteHero />

    <div
      class="bg-paper relative z-10 rounded-t-3xl transition-[top] duration-200 ease-in-out"
      :class="isScrolled ? '-top-10' : 'top-0'"
    >
      <div class="container py-8 lg:grid lg:grid-cols-[300px_minmax(0,1fr)] lg:gap-10 lg:py-25">
        <SectionsSiteSidebar />
        <div class="flex max-w-200 flex-col">
          <SectionsCasesSection class="mb-15" />
          <SectionsAboutMeSection />
          <SectionsProcessSection />
          <SectionsExpertiseSection />
          <SectionsExperienceSection class="pb-0" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

definePageMeta({
  layout: 'default',
})

const { t } = useI18n()

useSeoMeta({
  title: () => t('hero.titleLine1'),
  description: () => t('about.body'),
  ogTitle: () => t('hero.titleLine1'),
  ogDescription: () => t('about.body'),
})

const SCROLL_TOP_EPS = 8
const isScrolled = ref(false)

const updateScroll = () => {
  isScrolled.value = window.scrollY > SCROLL_TOP_EPS
}

onMounted(() => {
  updateScroll()
  window.addEventListener('scroll', updateScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateScroll)
})
</script>
