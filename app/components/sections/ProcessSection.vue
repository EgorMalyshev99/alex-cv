<template>
  <section id="process" class="py-15">
    <header class="mb-8 flex flex-col gap-3 lg:mb-12">
      <h2 class="text-ink-dim font-sans text-3xl font-bold lg:text-4xl">
        {{ $t('process.title') }}
      </h2>
      <p class="text-xl">
        {{ $t('process.description') }}
      </p>
    </header>

    <ol class="flex flex-col gap-6">
      <li v-for="i in 5" :key="i" class="flex items-center gap-5 rounded-xl bg-white p-6 lg:p-7">
        <NuxtImg :src="images[i - 1]" class="size-15 shrink-0" alt="" width="60" height="60" />
        <div class="flex flex-col gap-2">
          <h3 class="text-ink-dim font-sans text-lg leading-tight font-semibold lg:text-2xl">
            {{ $t(`process.step${i}Title`) }}
          </h3>
          <p class="text-sm leading-tight text-neutral-600 lg:text-lg">
            {{ $t(`process.step${i}Body`) }}
          </p>
        </div>
      </li>
    </ol>
  </section>
</template>

<script setup lang="ts">
const images = [
  '/img/icons/icon-questions.png',
  '/img/icons/icon-path.png',
  '/img/icons/icon-design.png',
  '/img/icons/icon-five.png',
  '/img/icons/icon-smile.png',
]
</script>
