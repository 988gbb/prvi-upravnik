<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const navItems = [
  { to: '/', label: 'Pocetna' },
  { to: '/usluge', label: 'Usluge' },
  { to: '/proces', label: 'Proces rada' },
  { to: '/pravni-okvir', label: 'Pravni okvir' },
  { to: '/faq', label: 'FAQ' },
  { to: '/o-nama', label: 'O nama' },
  { to: '/kontakt', label: 'Kontakt' }
]

const route = useRoute()
const menuOpen = ref(false)
const navigationId = 'site-navigation'

const closeMenu = () => {
  menuOpen.value = false
}

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}

watch(
  () => route.path,
  () => {
    closeMenu()
  }
)
</script>

<template>
  <header class="topbar" :class="{ 'menu-open': menuOpen }">
    <div class="topbar-row">
      <NuxtLink class="brand" to="/" @click="closeMenu">prvi upravnik.rs</NuxtLink>

      <button
        type="button"
        class="menu-toggle"
        :aria-expanded="menuOpen"
        :aria-controls="navigationId"
        aria-label="Otvori ili zatvori navigaciju"
        @click="toggleMenu"
      >
        <span aria-hidden="true" class="menu-toggle-line" />
        <span aria-hidden="true" class="menu-toggle-line" />
        <span aria-hidden="true" class="menu-toggle-line" />
      </button>
    </div>

    <nav :id="navigationId" class="top-nav" :class="{ 'is-open': menuOpen }" aria-label="Glavna navigacija">
      <NuxtLink v-for="item in navItems" :key="item.to" :to="item.to" class="nav-link" @click="closeMenu">
        {{ item.label }}
      </NuxtLink>

      <NuxtLink class="button button-primary nav-mobile-cta" to="/kontakt" @click="closeMenu">
        Zakazi poziv
      </NuxtLink>
    </nav>

    <NuxtLink class="top-cta" to="/kontakt">Zakazi poziv</NuxtLink>
  </header>
</template>
