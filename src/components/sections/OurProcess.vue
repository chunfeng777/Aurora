<script setup lang="ts">
import { useSiteContent } from '@/composables/useSiteContent';

const { processCtaLabel, processHeading, processSteps } = useSiteContent();
</script>

<template>
  <section
    id="process"
    class="desktop-ui-scale bg-white pb-[162px] pt-[181px] 2xl:pb-[100px] 2xl:pt-[120px]"
  >
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

      <div class="mt-[111px] grid gap-x-[70px] gap-y-[105px] xl:grid-cols-3 2xl:mt-[70px] 2xl:gap-y-[60px]">
        <article
          v-for="step in processSteps"
          :key="step.index"
          :aria-describedby="`process-step-${step.index}-description`"
          tabindex="0"
          class="process-card relative h-[245px] text-center"
        >
          <div class="process-card__surface absolute inset-x-0 bottom-0 h-[150px] rounded-auroraCard bg-white shadow-auroraCard">
            <div class="process-card__summary absolute inset-x-0 bottom-0 h-[150px]">
              <div
                class="process-card__number absolute left-1/2 top-[-22px] grid size-[103px] -translate-x-1/2 place-items-center rounded-full bg-aurora-mint font-display text-[60px] font-black leading-none text-white"
              >
                {{ step.index }}
              </div>

              <h3
                class="process-card__title absolute bottom-[22px] left-3 right-3 whitespace-nowrap font-display text-[clamp(20px,1.56vw,30px)] font-black leading-[42px] text-aurora-mint"
              >
                {{ step.title }}
              </h3>
            </div>

            <p
              :id="`process-step-${step.index}-description`"
              class="process-card__description absolute bottom-[25px] left-1/2 flex h-[52px] w-[calc(100%-24px)] -translate-x-1/2 items-center justify-center text-center font-body text-[18px] leading-[26px] text-white"
            >
              {{ step.description }}
            </p>
          </div>
        </article>
      </div>

      <div class="mt-[105px] text-center 2xl:mt-[50px]">
        <p
          class="mx-auto flex h-[90px] w-[min(817px,100%)] items-center justify-center rounded-[45px] bg-[#83d4b3] px-8 font-display text-[40px] font-bold leading-[59px] text-white shadow-sm max-sm:h-[64px] max-sm:rounded-[32px] max-sm:px-5 max-sm:text-[24px] max-sm:leading-[32px]"
        >
          {{ processCtaLabel }}
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.process-card__surface {
  transition:
    height 500ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 350ms ease,
    box-shadow 500ms cubic-bezier(0.4, 0, 0.2, 1);
}

.process-card__summary {
  transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1);
}

.process-card__number {
  transition:
    background-color 350ms ease,
    color 350ms ease;
}

.process-card__title {
  transition: color 350ms ease;
}

.process-card__description {
  opacity: 0;
  transform: translate(-50%, 10px);
  transition:
    opacity 220ms ease,
    transform 280ms cubic-bezier(0.4, 0, 0.2, 1);
}

.process-card:is(:hover, :focus) .process-card__surface {
  height: 245px;
  background-color: var(--color-mint);
  box-shadow: 0 24px 46px rgb(38 135 103 / 22%);
}

.process-card:is(:hover, :focus) .process-card__summary {
  transform: translateY(-66px);
}

.process-card:is(:hover, :focus) .process-card__number {
  background-color: white;
  color: var(--color-mint);
}

.process-card:is(:hover, :focus) .process-card__title {
  color: white;
}

.process-card:is(:hover, :focus) .process-card__description {
  opacity: 1;
  transform: translate(-50%, 0);
  transition-delay: 180ms;
}

.process-card:focus-visible {
  outline: none;
}

.process-card:focus-visible .process-card__surface {
  outline: 3px solid var(--color-gold);
  outline-offset: 6px;
}

@media (prefers-reduced-motion: reduce) {
  .process-card__surface,
  .process-card__summary,
  .process-card__number,
  .process-card__title,
  .process-card__description {
    transition-duration: 1ms;
    transition-delay: 0ms;
  }
}
</style>
