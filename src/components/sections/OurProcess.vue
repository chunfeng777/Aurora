<script setup lang="ts">
import AnimatedArrow from '@/components/ui/AnimatedArrow.vue';
import { useSiteContent } from '@/composables/useSiteContent';

const { processCtaLabel, processHeading, processSteps } = useSiteContent();
</script>

<template>
  <section
    id="process"
    class="desktop-ui-scale bg-white pb-[162px] pt-[181px] 2xl:pb-[140px] 2xl:pt-[120px]"
  >
    <div class="aurora-container">
      <div class="text-center 2xl:-translate-y-[15px]">
        <h2
          class="font-display text-[clamp(42px,3.125vw,60px)] font-black leading-[1.2] text-aurora-mint"
        >
          {{ processHeading.title }}
        </h2>
        <p class="mt-[33px] font-body text-[clamp(24px,1.82vw,35px)] leading-[35px] text-aurora-gray">
          {{ processHeading.subtitle }}
        </p>
      </div>

      <div class="mt-[111px] grid gap-x-[70px] gap-y-[105px] xl:grid-cols-3 2xl:mt-[30px] 2xl:gap-y-[40px]">
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
                class="process-card__number absolute left-1/2 top-[-16px] grid size-[90px] -translate-x-1/2 place-items-center rounded-full bg-aurora-mint font-display text-[52px] font-black leading-none text-white"
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
              class="process-card__description absolute bottom-[22px] left-1/2 flex h-[72px] w-[calc(100%-24px)] -translate-x-1/2 items-center justify-center whitespace-pre-line text-center font-body text-[22px] leading-[32px] text-white"
            >
              {{ step.description }}
            </p>
          </div>
        </article>
      </div>

      <div class="mt-[105px] text-center 2xl:mt-[70px]">
        <a
          href="#contact"
          class="relative mx-auto flex h-[90px] w-[min(840px,100%)] items-center justify-center rounded-[45px] bg-[#83d4b3] px-[72px] font-display text-[40px] font-bold leading-[59px] text-white shadow-sm transition-transform duration-200 hover:-translate-y-1 focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-aurora-gold max-sm:h-[64px] max-sm:rounded-[32px] max-sm:px-14 max-sm:text-[22px] max-sm:leading-[30px]"
        >
          <span>{{ processCtaLabel }}</span>
          <AnimatedArrow
            :end-offset="9"
            :icon-size="40"
            :return-offset="4"
            :start-offset="-16"
            :stroke-width="8.2"
            class="pointer-events-none absolute right-[28px] top-1/2 z-10 -translate-y-1/2 max-sm:right-[14px]"
          />
        </a>
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
  height: 265px;
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
