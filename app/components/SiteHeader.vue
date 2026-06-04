<script setup lang="ts">
const navItems = [
  { to: '/', label: 'Pocetna' },
  { to: '/usluge', label: 'Usluge' },
  { to: '/proces', label: 'Proces rada' },
  { to: '/pravni-okvir', label: 'Pravni okvir' },
  { to: '/faq', label: 'FAQ' },
  { to: '/o-nama', label: 'O nama' },
  { to: '/kontakt', label: 'Kontakt' }
]
</script>

<template>
  <header class="topbar">
    <NuxtLink class="brand" to="/">upravnikplus.rs</NuxtLink>

    <nav class="top-nav" aria-label="Glavna navigacija">
      <NuxtLink v-for="item in navItems" :key="item.to" :to="item.to" class="nav-link">
        {{ item.label }}
      </NuxtLink>
    </nav>

    <NuxtLink class="top-cta" to="/kontakt">Zakazi poziv</NuxtLink>
  </header>
</template>
