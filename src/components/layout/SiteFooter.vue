<script setup lang="ts">
import { footerContent, socialLinks } from '@/constants/site';
</script>

<template>
  <footer id="footer" class="bg-aurora-mint pb-[66px] pt-[41px] text-white">
    <div
      class="aurora-container grid gap-[80px] border-t border-white/0 pt-[24px] lg:grid-cols-[360px_1fr]"
    >
      <div>
        <a href="#home" class="inline-block" aria-label="Aurora home">
          <img
            :src="footerContent.logo.src"
            :alt="footerContent.logo.alt"
            :width="footerContent.logo.width"
            :height="footerContent.logo.height"
            loading="lazy"
            class="h-auto w-[299px] brightness-0 invert"
          />
        </a>
        <p class="mt-[29px] whitespace-pre-line font-body text-[25px] leading-[35px]">
          {{ footerContent.tagline }}
        </p>
      </div>

      <div class="grid gap-[70px] md:grid-cols-3">
        <nav
          v-for="column in footerContent.columns"
          :key="column.title"
          :aria-label="column.title"
        >
          <h2 class="font-display text-[40px] font-bold leading-[49px]">
            {{ column.title }}
          </h2>
          <ul class="mt-[24px] space-y-[16px]">
            <li v-for="link in column.links" :key="link.label">
              <a
                :href="link.href"
                class="font-body text-[25px] leading-[35px] transition-opacity duration-200 hover:opacity-75"
              >
                {{ link.label }}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>

    <div
      class="aurora-container mt-[91px] flex items-end justify-between gap-8 border-t border-white/30 pt-[35px] max-md:flex-col max-md:items-start"
    >
      <p class="font-body text-[20px] leading-[35px]">
        {{ footerContent.copyright }}
      </p>

      <div class="flex items-center gap-[19px]">
        <a
          v-for="link in socialLinks"
          :key="link.label"
          :href="link.href"
          :aria-label="link.label"
          class="grid size-[37px] place-items-center transition-transform duration-200 hover:-translate-y-1"
        >
          <img
            :src="link.icon.src"
            :alt="link.icon.alt"
            :width="link.icon.width"
            :height="link.icon.height"
            loading="lazy"
            class="size-[37px] brightness-0 invert"
          />
        </a>
      </div>
    </div>
  </footer>
</template>
