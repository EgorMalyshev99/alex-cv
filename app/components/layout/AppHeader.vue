<template>
  <header class="top-0 z-50 w-full" :class="isHome ? 'absolute inset-x-0' : 'static'">
    <div class="container flex items-center justify-center py-4 lg:justify-between lg:py-5">
      <div class="flex flex-1 items-center justify-center lg:justify-between">
        <nav class="flex items-center gap-0">
          <NavLink href="https://www.linkedin.com/in/aleksei-matsko-867862216/" external>
            {{ $t('nav.linkedin') }}
          </NavLink>
          <NavLink href="https://www.behance.net/smogrus64cf02" external>{{ $t('nav.behance') }}</NavLink>
          <NavLink href="#contacts">{{ $t('nav.contacts') }}</NavLink>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const route = useRoute()
const localePath = useLocalePath()

const isHome = computed(() => {
  const path = route.path
  return path === localePath('/') || path === '/ru'
})
</script>
