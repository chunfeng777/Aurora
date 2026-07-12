<script setup lang="ts">
import { useLocale } from '@/composables/useLocale';
import { useSiteContent } from '@/composables/useSiteContent';

const { locale } = useLocale();
const { serviceCards, servicesHeading } = useSiteContent();
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

      <div class="mt-[105px] grid items-stretch gap-[70px] lg:grid-cols-3">
        <article
          v-for="(card, index) in serviceCards"
          :key="card.stage"
          class="service-card relative h-[570px] overflow-hidden rounded-auroraCard bg-white p-[20px_19px_74px] text-center shadow-auroraGlow sm:h-[530px] 2xl:h-[496px]"
          :class="{
            'service-card--coordination': index === 1,
            'service-card--chinese-details': locale === 'zh',
          }"
        >
          <div
            class="service-card__panel relative h-[476px] overflow-hidden rounded-auroraInner bg-aurora-mint-soft px-7 py-[18px] sm:h-[436px] 2xl:h-[402px]"
          >
            <div class="service-card__summary absolute inset-[18px_28px] flex flex-col items-center" aria-hidden="true">
              <p class="font-display text-[20px] font-bold leading-[1.2] text-aurora-mint sm:text-[clamp(20px,1.35vw,26px)]">
                {{ card.stage }}
              </p>
              <img
                :src="card.icon.src"
                :alt="card.icon.alt"
                :width="card.icon.width"
                :height="card.icon.height"
                loading="lazy"
                class="mt-[31px] size-[62px] shrink-0 sm:size-[clamp(68px,4.17vw,80px)]"
              />
              <p
                class="mt-[34px] max-w-[418px] whitespace-pre-line font-display text-[26px] font-bold leading-[1.2] text-aurora-mint sm:text-[clamp(26px,1.77vw,34px)]"
              >
                {{ card.title }}
              </p>
            </div>

            <div class="service-card__details absolute inset-y-5 left-7 right-7 flex flex-col items-center">
              <h3
                class="max-w-[418px] whitespace-pre-line font-display text-[28px] font-bold leading-[1.35] text-aurora-mint sm:text-[clamp(31px,2.08vw,40px)] sm:leading-normal"
              >
                {{ card.title }}
              </h3>
              <p
                class="w-full max-w-[389px] text-left font-body text-[18px] leading-[30px] text-aurora-mint-dark sm:text-[20px] sm:leading-[35px]"
              >
                {{ card.description }}
              </p>
            </div>
          </div>

          <a
            href="#contact"
            class="service-card__cta absolute bottom-[19px] left-1/2 inline-flex -translate-x-1/2 items-center gap-3 whitespace-nowrap font-display text-[20px] font-bold leading-[35px] text-[#8fd2b7]"
          >
            {{ card.ctaLabel }}
            <span aria-hidden="true" class="service-card__arrow -mt-1 text-[28px] leading-none">&nearr;</span>
          </a>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.service-card {
  transition:
    transform 500ms cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 500ms cubic-bezier(0.22, 1, 0.36, 1);
}

.service-card__panel {
  transition: transform 500ms cubic-bezier(0.22, 1, 0.36, 1);
}

.service-card__summary,
.service-card__details {
  transition:
    opacity 240ms ease,
    transform 520ms cubic-bezier(0.22, 1, 0.36, 1);
}

.service-card__details {
  gap: clamp(24px, 1.46vw, 28px);
  opacity: 0;
  transform: translateY(32px);
  transition-delay: 0ms;
}

.service-card__details h3 {
  font-size: clamp(26px, 1.77vw, 34px);
  line-height: 1.2;
}

.service-card__details p {
  font-size: clamp(15px, 1.04vw, 20px);
  line-height: clamp(24px, 1.56vw, 30px);
}

.service-card--coordination .service-card__details p {
  font-size: clamp(14px, 0.98vw, 19px);
}

.service-card--chinese-details .service-card__details {
  justify-content: center;
}

.service-card--chinese-details .service-card__details p {
  text-align: center;
}

.service-card__summary {
  opacity: 1;
  transform: translateY(0) scale(1);
  transition-delay: 110ms;
}

.service-card__cta,
.service-card__arrow {
  transition: transform 380ms cubic-bezier(0.22, 1, 0.36, 1);
}

@media (hover: hover) and (pointer: fine) {
  .service-card:hover,
  .service-card:focus-within {
    transform: translateY(-7px);
    box-shadow: 0 24px 48px rgb(38 135 103 / 22%);
  }

  .service-card:hover .service-card__panel,
  .service-card:focus-within .service-card__panel {
    transform: scale(1.008);
  }

  .service-card:hover .service-card__summary,
  .service-card:focus-within .service-card__summary {
    opacity: 0;
    transform: translateY(-24px) scale(0.98);
    transition-delay: 0ms;
  }

  .service-card:hover .service-card__details,
  .service-card:focus-within .service-card__details {
    opacity: 1;
    transform: translateY(0);
    transition-delay: 130ms;
  }

  .service-card:hover .service-card__cta,
  .service-card:focus-within .service-card__cta {
    transform: translateX(-50%) translateY(-2px);
  }

  .service-card:hover .service-card__arrow,
  .service-card:focus-within .service-card__arrow {
    transform: translate(4px, -4px);
  }
}

@media (hover: none), (pointer: coarse) {
  .service-card__summary {
    opacity: 0;
    transform: translateY(-16px);
  }

  .service-card__details {
    opacity: 1;
    transform: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  .service-card,
  .service-card__panel,
  .service-card__summary,
  .service-card__details,
  .service-card__cta,
  .service-card__arrow {
    transition-duration: 1ms;
    transition-delay: 0ms;
  }
}
</style>
