<script setup lang="ts">
import { familyCtaContent } from '@/constants/site';
</script>

<template>
  <section
    id="family-cta"
    class="relative min-h-[1084px] overflow-hidden bg-aurora-mint text-white"
    aria-labelledby="family-cta-title"
  >
    <img
      :src="familyCtaContent.image.src"
      :alt="familyCtaContent.image.alt"
      :width="familyCtaContent.image.width"
      :height="familyCtaContent.image.height"
      loading="lazy"
      class="absolute inset-0 h-full w-full object-cover"
    />
    <div class="absolute inset-0 bg-gradient-to-r from-aurora-mint/28 via-aurora-mint/8 to-aurora-mint/42" />
    <div class="absolute inset-0 bg-black/5" />

    <div class="aurora-container relative z-10 flex min-h-[1084px] items-center justify-end">
      <div class="w-[min(819px,100%)] pt-[322px] text-left max-lg:pt-0">
        <h2
          id="family-cta-title"
          class="whitespace-pre-line font-display text-[clamp(54px,4.69vw,90px)] font-black leading-[1.16]"
        >
          {{ familyCtaContent.title }}
        </h2>
        <p class="mt-[50px] font-display text-[clamp(31px,2.34vw,45px)] font-black leading-[1.22]">
          {{ familyCtaContent.subtitle }}
        </p>
      </div>
    </div>
  </section>
</template>
