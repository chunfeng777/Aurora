<script setup lang="ts">
import { useSiteContent } from '@/composables/useSiteContent';

const { aboutContent } = useSiteContent();
</script>

<template>
  <section id="about" class="bg-aurora-white pb-[220px] pt-[221px]">
    <div class="aurora-container grid items-start gap-[93px] xl:grid-cols-[minmax(0,908px)_579px]">
      <div>
        <h2
          class="aurora-section-title text-[clamp(44px,3.125vw,60px)] tracking-[-0.01em]"
        >
          {{ aboutContent.title }}
        </h2>

        <div
          class="mt-[69px] max-w-[908px] space-y-[35px] font-body text-[clamp(19px,1.3vw,25px)] leading-[1.4] text-aurora-gray"
        >
          <p v-for="paragraph in aboutContent.paragraphs" :key="paragraph">
            {{ paragraph }}
          </p>
        </div>
      </div>

      <article
        class="relative min-h-[979px] overflow-hidden rounded-[10px] bg-aurora-mint shadow-auroraCard max-xl:min-h-[720px]"
      >
        <img
          :src="aboutContent.image.src"
          :alt="aboutContent.image.alt"
          :width="aboutContent.image.width"
          :height="aboutContent.image.height"
          loading="lazy"
          class="absolute inset-0 h-full w-full object-cover"
        />
        <div class="absolute inset-0 bg-aurora-mint/80" />
        <div
          class="absolute inset-x-0 top-0 h-[500px] bg-gradient-to-b from-aurora-mint via-aurora-mint/88 to-aurora-mint/10"
        />
        <div
          class="absolute inset-x-0 bottom-0 h-[590px] bg-gradient-to-t from-aurora-mint/40 to-aurora-mint/0"
        />

        <blockquote
          class="relative z-10 px-[46px] pt-[39px] font-body text-[22px] leading-[35px] text-white"
        >
          <p>"{{ aboutContent.testimonial.quote }}"</p>
          <footer class="mt-[139px] text-right text-[22px] leading-[35px]">
            {{ aboutContent.testimonial.author }}
          </footer>
        </blockquote>
      </article>
    </div>
  </section>
</template>
