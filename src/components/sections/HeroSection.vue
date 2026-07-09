<script setup lang="ts">
import { heroContent, socialLinks } from '@/constants/site';
</script>

<template>
  <section
    id="home"
    class="relative isolate h-[100svh] min-h-[760px] overflow-hidden bg-aurora-mint lg:h-[1080px]"
    aria-labelledby="hero-title"
  >
    <img
      :src="heroContent.background.src"
      :alt="heroContent.background.alt"
      :width="heroContent.background.width"
      :height="heroContent.background.height"
      fetchpriority="high"
      decoding="async"
      class="absolute inset-0 -z-20 h-full w-full object-cover"
    />

    <div
      class="absolute inset-0 -z-10 bg-gradient-to-r from-black/20 via-black/5 to-transparent"
      aria-hidden="true"
    />

    <div
      class="aurora-container relative flex h-full flex-col justify-center pb-[88px] pt-[244px] text-white lg:justify-start lg:pt-[395px]"
    >
      <p
        class="max-w-[680px] whitespace-pre-line font-display text-[clamp(28px,2.1vw,40px)] font-black leading-[1.22]"
      >
        {{ heroContent.eyebrow }}
      </p>

      <h1
        id="hero-title"
        class="mt-[18px] max-w-[975px] whitespace-pre-line font-display text-[clamp(48px,3.4vw,65px)] font-black leading-[1.38]"
      >
        {{ heroContent.title }}
      </h1>

      <p class="mt-[28px] max-w-[1051px] font-body text-[clamp(22px,1.8vw,35px)] leading-[35px]">
        {{ heroContent.subtitle }}
      </p>

      <a
        :href="heroContent.ctaHref"
        class="mt-[54px] inline-flex h-[75px] w-[min(521px,100%)] items-center justify-center rounded-aurora-pill bg-aurora-mint px-8 text-center font-display text-[clamp(24px,1.7vw,33px)] font-black leading-none text-white shadow-auroraCard transition-transform duration-200 hover:-translate-y-1 focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-white/80"
      >
        {{ heroContent.ctaLabel }}
      </a>
    </div>

    <nav
      class="absolute right-[8.85%] top-[41.7%] hidden flex-col gap-[12.5px] xl:flex"
      aria-label="Social links"
    >
      <a
        v-for="link in socialLinks"
        :key="link.label"
        :href="link.href"
        class="grid size-[37.5px] place-items-center transition-transform duration-200 hover:scale-110"
        :aria-label="link.label"
      >
        <img
          :src="link.icon.src"
          :alt="link.icon.alt"
          :width="link.icon.width"
          :height="link.icon.height"
          loading="lazy"
          class="size-full"
        />
      </a>
    </nav>

    <a
      href="#why-choose-us"
      class="absolute bottom-[19px] left-1/2 -translate-x-1/2 font-body text-[15px] leading-[18px] text-white/90 transition-colors hover:text-white"
    >
      {{ heroContent.scrollLabel }}
    </a>
  </section>
</template>
