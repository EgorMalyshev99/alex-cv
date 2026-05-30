<template>
  <a
    :href="href"
    :rel="rel"
    :target="target"
    class="text-ink inline-flex items-center gap-0.5 px-4 py-2.5 text-base transition-opacity hover:opacity-70"
    @click="handleClick"
  >
    <slot />
  </a>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    href: string
    external?: boolean
  }>(),
  { external: false }
)

const rel = computed(() => (props.external ? 'noopener noreferrer' : undefined))
const target = computed(() => (props.external ? '_blank' : undefined))

const handleClick = (e: MouseEvent) => {
  if (!import.meta.client) return
  if (!props.external && props.href.startsWith('#')) {
    e.preventDefault()
    if (props.href.length > 1) {
      document.getElementById(props.href.slice(1))?.scrollIntoView({ behavior: 'smooth' })
    }
  }
}
</script>
