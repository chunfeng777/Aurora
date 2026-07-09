<script setup lang="ts">
import { serviceCards, servicesHeading } from '@/constants/site';
</script>

<template>
  <section id="services" class="bg-aurora-mint pb-[165px] pt-[79px]">
    <div class="aurora-container">
      <div class="text-center text-white">
        <h2 class="font-display text-[clamp(42px,3.125vw,60px)] font-black leading-[1.2]">
          {{ servicesHeading.title }}
        </h2>
        <p class="mt-[33px] font-body text-[clamp(24px,1.82vw,35px)] leading-[35px]">
          {{ servicesHeading.subtitle }}
        </p>
      </div>

      <div class="mt-[105px] grid items-start gap-[70px] lg:grid-cols-3">
        <article
          v-for="card in serviceCards"
          :key="card.stage"
          class="group relative min-h-[496px] overflow-hidden rounded-auroraCard bg-white p-[20px_19px_74px] text-center shadow-auroraGlow"
        >
          <div class="min-h-[402px] rounded-auroraInner bg-aurora-mint-soft px-7 py-[18px]">
            <p class="font-display text-[30px] font-bold leading-normal text-aurora-mint">
              {{ card.stage }}
            </p>
            <img
              :src="card.icon.src"
              :alt="card.icon.alt"
              :width="card.icon.width"
              :height="card.icon.height"
              loading="lazy"
              class="mx-auto mt-[37px] size-[90px]"
            />
            <h3
              class="mx-auto mt-[37px] max-w-[418px] whitespace-pre-line font-display text-[clamp(31px,2.08vw,40px)] font-bold leading-normal text-aurora-mint"
            >
              {{ card.title }}
            </h3>
            <p
              class="mx-auto mt-5 max-w-[389px] font-body text-[20px] leading-[35px] text-aurora-mint-dark opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            >
              {{ card.description }}
            </p>
          </div>

          <a
            href="#contact"
            class="absolute bottom-[19px] left-1/2 inline-flex -translate-x-1/2 items-center gap-3 font-display text-[20px] font-bold leading-[35px] text-[#8fd2b7]"
          >
            {{ card.ctaLabel }}
            <span aria-hidden="true" class="-mt-1 text-[28px] leading-none">&nearr;</span>
          </a>
        </article>
      </div>
    </div>
  </section>
</template>
