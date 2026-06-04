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
  <footer class="site-footer">
    <div>
      <strong>Upravnik Plus</strong>
      <p>
        Profesionalno upravljanje stambenim zajednicama sa fokusom na transparentnost,
        pravnu uskladjenost i dugorocno ocuvanje vrednosti zgrade.
      </p>
    </div>

    <div class="footer-links">
      <NuxtLink v-for="item in navItems" :key="`f-${item.to}`" :to="item.to" class="nav-link">
        {{ item.label }}
      </NuxtLink>
    </div>
  </footer>
</template>
