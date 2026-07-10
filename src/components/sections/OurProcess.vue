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

      <div class="mt-[111px] grid gap-x-[70px] gap-y-[105px] xl:grid-cols-3">
        <article
          v-for="step in processSteps"
          :key="step.index"
          :aria-describedby="`process-step-${step.index}-description`"
          tabindex="0"
          class="process-card relative h-[245px] overflow-hidden rounded-auroraCard bg-white text-center shadow-auroraCard"
        >
          <div class="process-card__summary absolute inset-0 flex flex-col items-center pt-[31px]" aria-hidden="true">
            <div
              class="grid size-[103px] place-items-center rounded-full bg-aurora-mint font-display text-[60px] font-black leading-none text-white"
            >
              {{ step.index }}
            </div>
            <p class="mt-[31px] px-5 font-display text-[30px] font-black leading-[42px] text-aurora-mint">
              {{ step.title }}
            </p>
          </div>

          <div class="process-card__details absolute inset-0 flex flex-col items-center justify-center px-7 py-4">
            <div
              class="grid size-[82px] shrink-0 place-items-center rounded-full bg-white font-display text-[48px] font-black leading-none text-aurora-mint"
            >
              {{ step.index }}
            </div>
            <h3 class="mt-3 font-display text-[26px] font-black leading-[36px] text-white">
              {{ step.title }}
            </h3>
            <p
              :id="`process-step-${step.index}-description`"
              class="mt-2 max-w-[410px] font-body text-[18px] leading-[26px] text-white"
            >
              {{ step.description }}
            </p>
          </div>
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

<style scoped>
.process-card {
  transition:
    background-color 300ms ease,
    transform 480ms cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 480ms cubic-bezier(0.22, 1, 0.36, 1);
}

.process-card__summary,
.process-card__details {
  transition:
    opacity 240ms ease,
    transform 480ms cubic-bezier(0.22, 1, 0.36, 1);
}

.process-card__summary {
  opacity: 1;
  transform: translateY(0) scale(1);
  transition-delay: 90ms;
}

.process-card__details {
  opacity: 0;
  transform: translateY(26px) scale(0.98);
  transition-delay: 0ms;
}

.process-card:is(:hover, :focus) {
  background-color: var(--color-mint);
  box-shadow: 0 24px 46px rgb(38 135 103 / 22%);
  transform: translateY(-12px);
}

.process-card:is(:hover, :focus) .process-card__summary {
  opacity: 0;
  transform: translateY(-24px) scale(0.97);
  transition-delay: 0ms;
}

.process-card:is(:hover, :focus) .process-card__details {
  opacity: 1;
  transform: translateY(0) scale(1);
  transition-delay: 100ms;
}

.process-card:focus-visible {
  outline: 3px solid var(--color-gold);
  outline-offset: 6px;
}

@media (prefers-reduced-motion: reduce) {
  .process-card,
  .process-card__summary,
  .process-card__details {
    transition-duration: 1ms;
    transition-delay: 0ms;
  }
}
</style>
