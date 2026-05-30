<template>
  <div class="flex min-h-dvh max-w-screen flex-col overflow-x-clip">
    <LayoutAppHeader />
    <main class="flex-1">
      <slot />
    </main>
    <LayoutAppFooter />
  </div>
</template>

<script setup lang="ts"></script>
