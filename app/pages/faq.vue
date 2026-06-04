<script setup lang="ts">
const faqs = [
  {
    q: 'Kako izgleda prelazak sa trenutnog upravnika?',
    a: 'Proces obuhvata odluku skupstine, primopredaju dokumentacije, finansijski presek i uvodjenje novog operativnog plana, bez prekida u kljucnim funkcijama zgrade.'
  },
  {
    q: 'Kako stanari dobijaju finansijski uvid?',
    a: 'Kroz redovne izvestaje sa razdvajanjem troskova po kategorijama (tekuci, investicioni, hitni), uz status rezervnog fonda i pregled realizovanih aktivnosti.'
  },
  {
    q: 'Sta se desava kada se prijavi kvar?',
    a: 'Prijava se evidentira sa vremenom prijema, odredjuje se prioritet i aktivira odgovarajuca sluzba. Nakon intervencije upisuje se status zatvaranja i troskovni osnov.'
  },
  {
    q: 'Da li je moguce optimizovati troskove odrzavanja?',
    a: 'Da. Kombinacijom preventivnog plana, kvalitetnije pripreme radova i uporedne analize ponuda, troskovi postaju predvidiviji i racionalniji.'
  },
  {
    q: 'Kako se donose odluke o vecim ulaganjima?',
    a: 'Priprema se jasno obrazlozen predlog sa vise ponuda, okvirnim rokovima i uticajem na budzet. Skupstina odluku donosi u skladu sa propisanom procedurom.'
  },
  {
    q: 'Sta ako zgrada ima dugovanja iz prethodnog perioda?',
    a: 'Radi se inicijalni finansijski presek, plan prioriteta i predlog dinamike sanacije dugovanja uz ocuvanje tekuce funkcionalnosti zgrade.'
  }
]
</script>

<template>
  <div class="page-stack">
    <section class="section">
      <p class="eyebrow">FAQ</p>
      <h1 class="page-title">Najcesca pitanja vlasnika i stambenih zajednica</h1>
      <p class="lead">
        Dubinski odgovori na teme koje najvise uticu na svakodnevno funkcionisanje zgrade,
        kvalitet zivota i finansijsku stabilnost zajednice.
      </p>
    </section>

    <section class="section">
      <div class="faq-grid">
        <article v-for="item in faqs" :key="item.q" class="faq-item">
          <h3>{{ item.q }}</h3>
          <p>{{ item.a }}</p>
        </article>
      </div>
    </section>
  </div>
</template>
