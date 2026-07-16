<script setup lang="ts">
import AnimatedArrow from '@/components/ui/AnimatedArrow.vue';
import { useSiteContent } from '@/composables/useSiteContent';

const { journeyClosing, journeyCtaLabel, journeyHeading, journeySteps } = useSiteContent();
</script>

<template>
  <section id="journey" class="bg-aurora-mint pb-[195px] pt-[107px] text-white">
    <div class="aurora-container">
      <div class="text-center">
        <h2 class="font-display text-[clamp(42px,3.125vw,60px)] font-black leading-[1.2]">
          {{ journeyHeading.title }}
        </h2>
        <p
          class="mx-auto mt-[33px] w-fit text-center font-body text-[clamp(24px,1.82vw,35px)] leading-[35px]"
        >
          {{ journeyHeading.subtitle }}
        </p>
      </div>

      <div class="mt-[121px] space-y-[94px]">
        <article
          v-for="step in journeySteps"
          :key="step.index"
          class="relative rounded-[25px] bg-white px-6 pb-7 pt-7 text-aurora-mint shadow-[0_14px_0_rgba(72,161,125,0.72)] md:pb-[36px] md:pl-[184px] md:pr-[39px] md:pt-[35px]"
        >
          <div
            class="mb-6 grid size-[103px] place-items-center rounded-full bg-aurora-mint font-display text-[60px] font-black leading-none text-white md:absolute md:left-[31px] md:top-[32px]"
          >
            {{ step.index }}
          </div>
          <h3
            class="font-display text-[clamp(28px,1.67vw,32px)] font-black leading-[1.5] md:leading-[49px]"
          >
            {{ step.title }}
          </h3>
          <div
            class="mt-[18px] min-h-[141px] rounded-[16px] bg-aurora-mint/[0.16] px-6 pb-[35px] pt-[22px] md:-ml-[29px] md:px-[29px]"
          >
            <p class="font-body text-[25px] leading-[40px] text-[#75a893] max-sm:text-[19px] max-sm:leading-[31px]">
              {{ step.description }}
            </p>
          </div>
        </article>
      </div>

      <div class="mt-[137px] text-center">
        <p class="font-display text-[clamp(32px,2.34vw,45px)] font-black leading-[1.22]">
          {{ journeyClosing }}
        </p>
        <a
          href="#contact"
          class="group relative mt-[53px] inline-flex h-[90px] w-[min(817px,100%)] items-center justify-center rounded-[45px] bg-white px-[86px] font-display text-[clamp(32px,2.19vw,42px)] font-bold leading-[59px] text-aurora-mint shadow-sm transition-transform duration-200 hover:-translate-y-1 max-md:h-[72px] max-md:px-16"
        >
          <span>{{ journeyCtaLabel }}</span>
          <AnimatedArrow
            :end-offset="9"
            :return-offset="4"
            :start-offset="-16"
            :stroke-width="7.2"
            class="pointer-events-none absolute right-[72px] z-10 max-md:right-[24px]"
          />
        </a>
      </div>
    </div>
  </section>
</template>
