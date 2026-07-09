<script setup lang="ts">
import { processHeading, processSteps } from '@/constants/site';
</script>

<template>
  <section id="process" class="bg-white pb-[162px] pt-[181px]">
    <div class="aurora-container">
      <div class="text-center">
        <h2
          class="font-display text-[clamp(42px,3.125vw,60px)] font-black leading-[1.2] text-aurora-mint"
        >
          {{ processHeading.title }}
        </h2>
        <p class="mt-[33px] font-body text-[clamp(24px,1.82vw,35px)] leading-[35px] text-aurora-gray">
          {{ processHeading.subtitle }}
        </p>
      </div>

      <div class="mt-[111px] grid gap-x-[70px] gap-y-[105px] lg:grid-cols-3">
        <article
          v-for="step in processSteps"
          :key="step.index"
          class="relative min-h-[245px] rounded-auroraCard bg-white pt-[31px] text-center shadow-auroraCard"
        >
          <div
            class="mx-auto grid size-[103px] place-items-center rounded-full bg-aurora-mint font-display text-[60px] font-black leading-none text-white"
          >
            {{ step.index }}
          </div>
          <h3 class="mt-[31px] font-display text-[30px] font-black leading-[42px] text-aurora-mint">
            {{ step.title }}
          </h3>
        </article>
      </div>

      <div class="mt-[105px] text-center">
        <a
          href="#contact"
          class="inline-flex min-h-[90px] w-[min(817px,100%)] items-center justify-center rounded-aurora-pill bg-aurora-gold px-8 font-display text-[clamp(30px,2.08vw,40px)] font-bold leading-[59px] text-white shadow-sm transition-transform duration-200 hover:-translate-y-1"
        >
          Learn More About Our Process
        </a>
      </div>
    </div>
  </section>
</template>
