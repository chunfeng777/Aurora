<script setup lang="ts">
import { defineAsyncComponent } from 'vue';

import TheNavbar from '@/components/layout/TheNavbar.vue';
import HeroSection from '@/components/sections/HeroSection.vue';

const WhyChooseUs = defineAsyncComponent(() => import('@/components/sections/WhyChooseUs.vue'));
const OurServices = defineAsyncComponent(() => import('@/components/sections/OurServices.vue'));
const OurProcess = defineAsyncComponent(() => import('@/components/sections/OurProcess.vue'));
const YourJourney = defineAsyncComponent(() => import('@/components/sections/YourJourney.vue'));
const AboutAurora = defineAsyncComponent(() => import('@/components/sections/AboutAurora.vue'));
const FamilyCta = defineAsyncComponent(() => import('@/components/sections/FamilyCta.vue'));
const ContactSection = defineAsyncComponent(() => import('@/components/sections/ContactSection.vue'));
const SiteFooter = defineAsyncComponent(() => import('@/components/layout/SiteFooter.vue'));
</script>

<template>
  <div class="site-shell">
    <TheNavbar />
    <main class="min-h-screen bg-aurora-white">
      <HeroSection />
      <WhyChooseUs />
      <OurServices />
      <OurProcess />
      <YourJourney />
      <AboutAurora />
      <FamilyCta />
      <ContactSection />
    </main>
    <SiteFooter />
  </div>
</template>
