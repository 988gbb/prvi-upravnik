<script setup lang="ts">
const services = [
  {
    title: 'Operativno upravljanje stambenom zajednicom',
    text: 'Zakazivanje i vodjenje sednica, zapisnici, sprovodjenje odluka skupstine i koordinacija izmedju vlasnika, izvodjaca i nadleznih sluzbi.'
  },
  {
    title: 'Finansijsko upravljanje i izvestavanje',
    text: 'Planiranje troskova tekuceg i investicionog odrzavanja, kontrola placanja, pracenje rezervnog fonda i periodicni finansijski pregledi.'
  },
  {
    title: 'Hitne intervencije i tehnicka koordinacija',
    text: 'Prijem prijava kvarova 24/7, procena prioriteta, angazovanje odgovarajucih sluzbi i dokumentovanje svake intervencije do zatvaranja.'
  },
  {
    title: 'Plan odrzavanja i preventivni pristup',
    text: 'Definisanje godisnjeg plana radova sa prioritetima: lift, krov, instalacije, fasada, zajednicki prostori i bezbednosni sistemi.'
  },
  {
    title: 'Pravna i regulatorna podrska',
    text: 'Podrska pri registraciji i promenama podataka stambene zajednice, uskladjivanje akata i pracenje proceduralne ispravnosti odluka.'
  },
  {
    title: 'Podrska investicionim projektima',
    text: 'Priprema vise ponuda, uporedna analiza uslova, predlog odluke za skupstinu i pracenje realizacije do primopredaje radova.'
  }
]
</script>

<template>
  <div class="page-stack">
    <section class="section">
      <p class="eyebrow">Usluge</p>
      <h1 class="page-title">Kompletno upravljanje zgradom, od dnevnih obaveza do strateskih investicija</h1>
      <p class="lead">
        Upravnik Plus nije samo kontakt tacka za probleme, vec operativni centar koji planira, sprovodi,
        meri i izvestava. Cilj je da stambena zajednica funkcionise predvidivo, bez improvizacija.
      </p>
    </section>

    <section class="section">
      <div class="card-grid">
        <article v-for="item in services" :key="item.title" class="service-card">
          <h3>{{ item.title }}</h3>
          <p>{{ item.text }}</p>
        </article>
      </div>
    </section>

    <section class="section">
      <div class="section-head">
        <p class="eyebrow">Model saradnje</p>
        <h2 class="section-title">Kako merimo kvalitet usluge</h2>
      </div>
      <div class="info-grid">
        <article class="info-card">
          <h3>Vreme reakcije</h3>
          <p>Prijava se evidentira odmah, a dalje aktivnosti imaju vreme prijema, obrade i zatvaranja.</p>
        </article>
        <article class="info-card">
          <h3>Transparentnost troskova</h3>
          <p>Svaka finansijska stavka ima opis i osnov, bez skrivenih "administrativnih" doplata.</p>
        </article>
        <article class="info-card">
          <h3>Stepen realizacije plana</h3>
          <p>Redovno poredimo planirane i realizovane aktivnosti i predlazemo korekcije.</p>
        </article>
        <article class="info-card">
          <h3>Upravljacka stabilnost</h3>
          <p>Broj otvorenih problema i vreme resavanja pokazuju da li sistem zaista funkcionise.</p>
        </article>
      </div>
    </section>
  </div>
</template>
