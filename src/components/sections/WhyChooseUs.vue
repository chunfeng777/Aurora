<script setup lang="ts">
import { whyChooseUsCards, whyChooseUsHeading } from '@/constants/site';
</script>

<template>
  <section id="why-choose-us" class="bg-white pb-[128px] pt-[141px]">
    <div class="aurora-container">
      <div class="mx-auto max-w-[1549px] text-center">
        <h2
          class="font-display text-[clamp(42px,3.125vw,60px)] font-black leading-[1.2] text-aurora-mint"
        >
          {{ whyChooseUsHeading.title }}
        </h2>
        <p
          class="mt-[18px] font-body text-[clamp(24px,1.67vw,32px)] leading-[1.72] text-aurora-gray"
        >
          {{ whyChooseUsHeading.subtitle }}
        </p>
      </div>

      <div class="mt-[72px] grid gap-[70px] lg:grid-cols-3">
        <article
          v-for="card in whyChooseUsCards"
          :key="card.title"
          class="relative min-h-[503px] rounded-auroraCard bg-white px-[31px] pb-[31px] pt-[54px] shadow-auroraCard"
        >
          <img
            :src="card.icon.src"
            :alt="card.icon.alt"
            :width="card.icon.width"
            :height="card.icon.height"
            loading="lazy"
            class="size-[70px]"
          />
          <h3
            class="mt-[35px] max-w-[418px] font-display text-[clamp(30px,1.82vw,35px)] font-bold leading-[1.4] text-aurora-mint"
          >
            {{ card.title }}
          </h3>
          <p class="mt-[20px] max-w-[418px] font-body text-[25px] leading-[35px] text-aurora-gray">
            {{ card.description }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>
