<template>
  <div class="site-shell">
    <a class="skip-link" href="#main-content">Preskoci na sadrzaj</a>
    <NuxtRouteAnnouncer />
    <SiteHeader />
    <main id="main-content" class="layout-main" tabindex="-1">
      <NuxtPage />
    </main>
    <SiteFooter />
  </div>
</template>
