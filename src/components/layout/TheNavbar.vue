<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';

import { useLocale } from '@/composables/useLocale';
import { useSiteContent } from '@/composables/useSiteContent';
import { auroraLogo } from '@/constants/site';

const { locale, setLocale } = useLocale();
const { heroContent, navItems } = useSiteContent();

const activeHref = ref('#home');
const observedSections = new Set<Element>();
const observedSectionHrefs = new Map<Element, string>();

let sectionObserver: IntersectionObserver | undefined;
let contentObserver: MutationObserver | undefined;
let pendingHref: string | undefined;
let navigationUnlockTimer: number | undefined;

const syncActiveHrefFromHash = () => {
  const matchingItem = navItems.value.find((item) => item.href === window.location.hash);
  activeHref.value = matchingItem?.href ?? '#home';
};

const observeAvailableSections = () => {
  navItems.value.forEach((item) => {
    const observationSelector = item.href === '#contact-information' ? '#contact' : item.href;
    const section = document.querySelector(observationSelector);

    if (section && !observedSections.has(section)) {
      observedSections.add(section);
      observedSectionHrefs.set(section, item.href);
      sectionObserver?.observe(section);
    }
  });
};

const clearPendingNavigation = () => {
  pendingHref = undefined;

  if (navigationUnlockTimer !== undefined) {
    window.clearTimeout(navigationUnlockTimer);
    navigationUnlockTimer = undefined;
  }
};

const handleNavigationClick = (event: MouseEvent, href: string) => {
  const target = document.querySelector(href);

  if (!target) {
    return;
  }

  event.preventDefault();
  activeHref.value = href;
  pendingHref = href;

  const topOffset = href === '#contact-information' ? 150 : 0;
  const targetTop = target.getBoundingClientRect().top + window.scrollY - topOffset;

  window.history.pushState(null, '', href);
  window.scrollTo({ top: Math.max(0, targetTop), behavior: 'smooth' });

  if (navigationUnlockTimer !== undefined) {
    window.clearTimeout(navigationUnlockTimer);
  }

  navigationUnlockTimer = window.setTimeout(clearPendingNavigation, 1600);
};

onMounted(() => {
  syncActiveHrefFromHash();

  sectionObserver = new IntersectionObserver(
    (entries) => {
      if (pendingHref) {
        const pendingSectionReached = entries.some(
          (entry) => entry.isIntersecting && observedSectionHrefs.get(entry.target) === pendingHref,
        );

        if (pendingSectionReached) {
          activeHref.value = pendingHref;
          clearPendingNavigation();
        }

        return;
      }

      const currentSection = entries
        .filter((entry) => entry.isIntersecting)
        .sort((first, second) => first.boundingClientRect.top - second.boundingClientRect.top)[0];

      if (currentSection?.target.id) {
        activeHref.value = observedSectionHrefs.get(currentSection.target) ?? '#home';
      }
    },
    {
      rootMargin: '-18% 0px -68% 0px',
      threshold: 0,
    },
  );

  observeAvailableSections();

  contentObserver = new MutationObserver(observeAvailableSections);
  contentObserver.observe(document.body, { childList: true, subtree: true });
  window.addEventListener('hashchange', syncActiveHrefFromHash);
});

onBeforeUnmount(() => {
  clearPendingNavigation();
  sectionObserver?.disconnect();
  contentObserver?.disconnect();
  window.removeEventListener('hashchange', syncActiveHrefFromHash);
});
</script>

<template>
  <header class="pointer-events-none fixed inset-x-0 top-0 z-50 h-[220px]">
    <div
      class="absolute inset-x-0 top-0 h-[210px] bg-gradient-to-b from-aurora-mint via-aurora-mint/55 to-transparent"
      aria-hidden="true"
    />

    <div
      class="pointer-events-auto relative z-10 mx-auto mt-[46px] flex h-[90px] w-[min(calc(100%_-_2rem),1680px)] items-center rounded-[45px] bg-white px-[45px] shadow-[0_10px_28px_rgba(46,126,100,0.16)] ring-1 ring-white/80 max-xl:px-8"
    >
      <a href="#home" class="shrink-0" aria-label="Aurora home">
        <img
          :src="auroraLogo.src"
          :alt="auroraLogo.alt"
          :width="auroraLogo.width"
          :height="auroraLogo.height"
          class="h-[27px] w-[146px]"
        />
      </a>

      <nav
        class="ml-auto mr-[48px] hidden items-center gap-[28px] 2xl:flex"
        aria-label="Primary navigation"
      >
        <a
          v-for="item in navItems"
          :key="item.href"
          :href="item.href"
          class="group relative font-body text-[24px] uppercase leading-[30px] text-aurora-mint transition-colors duration-200 hover:text-aurora-mint-dark"
          :aria-current="activeHref === item.href ? 'location' : undefined"
          @click="handleNavigationClick($event, item.href)"
        >
          <span>{{ item.label }}</span>
          <span
            class="absolute -bottom-[8px] left-0 h-[4px] rounded-full bg-aurora-gold transition-all duration-300"
            :class="
              activeHref === item.href
                ? 'w-full opacity-100'
                : 'w-0 opacity-0'
            "
          />
        </a>
      </nav>

      <a
        :href="heroContent.ctaHref"
        class="ml-auto inline-flex h-[64px] w-[min(340px,32vw)] items-center justify-center rounded-[32px] bg-aurora-mint px-8 text-center font-display text-[23px] font-black leading-none text-white transition-transform duration-200 hover:-translate-y-0.5 max-sm:hidden 2xl:ml-0"
      >
        {{ heroContent.ctaLabel }}
      </a>
    </div>

    <div class="pointer-events-none relative z-10 mx-auto w-[min(calc(100%_-_2rem),1680px)]">
      <div
        class="pointer-events-auto absolute right-0 top-[18px] flex h-[46px] w-[152px] items-center justify-center rounded-[23px] bg-white"
        aria-label="Language selector"
      >
      <button
        type="button"
        class="min-w-[62px] px-2 font-body uppercase leading-none transition-[color,font-size] duration-300"
        :class="locale === 'en' ? 'text-[34px] text-aurora-mint' : 'text-[24px] text-aurora-mint-muted'"
        :aria-pressed="locale === 'en'"
        aria-label="Switch to English"
        @click="setLocale('en')"
      >
        EN
      </button>
      <span class="h-[25px] w-[3px] shrink-0 rounded-[3px] bg-aurora-mint transition-colors duration-300" />
      <button
        type="button"
        class="min-w-[67px] px-2 font-body leading-none transition-[color,font-size] duration-300"
        :class="locale === 'zh' ? 'text-[30px] text-aurora-mint' : 'text-[20px] text-aurora-mint-muted'"
        :aria-pressed="locale === 'zh'"
        aria-label="切换为中文"
        @click="setLocale('zh')"
      >
        &#20013;&#25991;
      </button>
      </div>
    </div>
  </header>
</template>
