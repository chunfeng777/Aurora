<script setup lang="ts">
import { auroraLogo, heroContent, navItems } from '@/constants/site';
</script>

<template>
  <header
    class="pointer-events-none absolute inset-x-0 top-0 z-30 h-[244px] bg-gradient-to-b from-aurora-mint to-aurora-mint/0"
  >
    <div
      class="pointer-events-auto mx-auto mt-[50px] flex h-[100px] w-[min(calc(100%_-_2rem),1680px)] items-center rounded-aurora-pill bg-white px-[50px] shadow-sm max-xl:px-8"
    >
      <a href="#home" class="shrink-0" aria-label="Aurora home">
        <img
          :src="auroraLogo.src"
          :alt="auroraLogo.alt"
          :width="auroraLogo.width"
          :height="auroraLogo.height"
          class="h-[29px] w-[157px]"
        />
      </a>

      <nav
        class="ml-auto mr-[55px] hidden items-center gap-[30px] 2xl:flex"
        aria-label="Primary navigation"
      >
        <a
          v-for="item in navItems"
          :key="item.href"
          :href="item.href"
          class="group relative font-body text-[30px] uppercase leading-[35px] text-aurora-mint transition-colors duration-200 hover:text-aurora-mint-dark"
        >
          <span>{{ item.label }}</span>
          <span
            class="absolute -bottom-[2px] left-0 h-[5px] w-0 rounded-aurora-pill bg-aurora-gold transition-all duration-200 group-hover:w-full"
            :class="{ 'w-[59px]': item.href === '#home' }"
          />
        </a>
      </nav>

      <a
        :href="heroContent.ctaHref"
        class="ml-auto inline-flex h-[69px] w-[min(366px,32vw)] items-center justify-center rounded-aurora-pill bg-aurora-mint px-8 text-center font-display text-[25px] font-black leading-none text-white transition-transform duration-200 hover:-translate-y-0.5 max-sm:hidden 2xl:ml-0"
      >
        {{ heroContent.ctaLabel }}
      </a>
    </div>

    <div
      class="pointer-events-auto absolute right-[136px] top-[170px] hidden h-[46px] w-[152px] items-center justify-center rounded-aurora-pill bg-white 2xl:flex"
      aria-label="Language selector"
    >
      <button
        type="button"
        class="px-3 font-body text-[40px] uppercase leading-none text-aurora-mint"
        aria-pressed="true"
      >
        EN
      </button>
      <span class="h-[25px] w-[3px] rounded-[3px] bg-aurora-mint" />
      <button
        type="button"
        class="px-3 font-body text-[22px] uppercase leading-[35px] text-aurora-mint-muted"
        aria-pressed="false"
      >
        &#20013;&#25991;
      </button>
    </div>
  </header>
</template>
