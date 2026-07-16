<script setup lang="ts">
import { useSiteContent } from '@/composables/useSiteContent';

const { whyChooseUsCards, whyChooseUsHeading } = useSiteContent();
</script>

<template>
  <section id="why-choose-us" class="desktop-ui-scale bg-white pb-[128px] pt-[141px]">
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
          tabindex="0"
          class="why-card relative min-h-[503px] rounded-auroraCard bg-white px-[31px] pb-[31px] pt-[54px] shadow-auroraCard outline-none"
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

<style scoped>
.why-card {
  transition:
    transform 420ms cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 420ms cubic-bezier(0.22, 1, 0.36, 1);
}

.why-card:is(:hover, :focus-visible) {
  transform: translateY(-6px);
  box-shadow:
    0 24px 38px rgb(73 184 140 / 28%),
    0 8px 18px rgb(38 135 103 / 14%);
}

.why-card:focus-visible {
  outline: 3px solid rgb(131 212 179 / 65%);
  outline-offset: 5px;
}

@media (prefers-reduced-motion: reduce) {
  .why-card {
    transition-duration: 1ms;
  }
}
</style>
