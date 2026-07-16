<script setup lang="ts">
import { useSiteContent } from '@/composables/useSiteContent';

const { aboutContent } = useSiteContent();
</script>

<template>
  <section
    id="about"
    class="desktop-ui-scale bg-aurora-white pb-[220px] pt-[221px] 2xl:pb-[100px] 2xl:pt-[100px]"
  >
    <div class="aurora-container grid items-start gap-[93px] xl:grid-cols-[minmax(0,908px)_579px]">
      <div>
        <h2
          class="aurora-section-title text-[clamp(44px,3.125vw,60px)] tracking-[-0.01em]"
        >
          {{ aboutContent.title }}
        </h2>

        <div
          class="mt-[69px] max-w-[908px] space-y-[35px] font-body text-[clamp(19px,1.3vw,25px)] leading-[1.4] text-aurora-gray 2xl:mt-[50px] 2xl:space-y-[28px]"
        >
          <p v-for="paragraph in aboutContent.paragraphs" :key="paragraph">
            {{ paragraph }}
          </p>
        </div>
      </div>

      <article
        class="relative min-h-[979px] overflow-hidden rounded-[16px] bg-aurora-mint max-xl:min-h-[720px] 2xl:min-h-[900px]"
      >
        <img
          :src="aboutContent.image.src"
          :alt="aboutContent.image.alt"
          :width="aboutContent.image.width"
          :height="aboutContent.image.height"
          loading="lazy"
          class="absolute inset-x-0 bottom-0 h-[868px] w-full object-cover max-xl:h-full 2xl:h-[790px]"
        />

        <div
          aria-hidden="true"
          class="about-testimonial__overlay absolute inset-x-0 top-0 z-[2] h-[684px] rounded-[16px] max-xl:h-[70%] 2xl:h-[630px]"
        />

        <blockquote class="absolute inset-0 z-10 font-body font-normal text-white">
          <p class="absolute left-[45px] right-[31px] top-[32px] text-[25px] leading-[40px]">"{{ aboutContent.testimonial.quote }}"</p>
          <footer
            class="absolute left-[203px] right-[31px] top-[404px] text-right text-[25px] leading-[40px]"
          >
            {{ aboutContent.testimonial.author }}
          </footer>
        </blockquote>
      </article>
    </div>
  </section>
</template>

<style scoped>
.about-testimonial__overlay {
  background: linear-gradient(
    to bottom,
    #83d4b3 16.357%,
    rgb(131 212 179 / 77%) 62.9%,
    rgb(131 212 179 / 0%) 100%
  );
}
</style>
