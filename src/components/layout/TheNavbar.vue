<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';

import { useLocale } from '@/composables/useLocale';
import { useSiteContent } from '@/composables/useSiteContent';
import { auroraLogo } from '@/constants/site';

const { locale, setLocale } = useLocale();
const { heroContent, navItems } = useSiteContent();

const activeHref = ref('#home');
const activeSurfaceHref = ref('#home');
const usesLightSectionBackdrop = computed(() =>
  ['#about', '#process', '#why-choose-us'].includes(activeSurfaceHref.value),
);
const sectionBackdropStyle = computed(() => {
  if (usesLightSectionBackdrop.value) {
    return { background: '#ffffff' };
  }

  if (['#services', '#contact', '#contact-information'].includes(activeSurfaceHref.value)) {
    return { background: '#83d4b3' };
  }

  return undefined;
});
const observedSections = new Set<Element>();
const observedSectionHrefs = new Map<Element, string>();

let sectionObserver: IntersectionObserver | undefined;
let contentObserver: MutationObserver | undefined;
let pendingHref: string | undefined;
let navigationUnlockTimer: number | undefined;

const syncActiveHrefFromHash = () => {
  const hashHref = window.location.hash || '#home';
  const matchingItem = navItems.value.find((item) => item.href === hashHref);

  activeSurfaceHref.value = hashHref;
  activeHref.value = matchingItem?.href ?? '#home';
};

const observeAvailableSections = () => {
  const observeSection = (href: string) => {
    const section = document.querySelector(href);

    if (section && !observedSections.has(section)) {
      observedSections.add(section);
      observedSectionHrefs.set(section, href);
      sectionObserver?.observe(section);
    }
  };

  navItems.value.forEach((item) => observeSection(item.href));
  observeSection('#why-choose-us');
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
  activeSurfaceHref.value = href;
  pendingHref = href;

  window.history.pushState(null, '', href);

  if (href === '#home') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

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
          activeSurfaceHref.value = pendingHref;
          clearPendingNavigation();
        }

        return;
      }

      const currentSection = entries
        .filter((entry) => entry.isIntersecting)
        .sort((first, second) => first.boundingClientRect.top - second.boundingClientRect.top)[0];

      if (currentSection?.target.id) {
        const currentHref = observedSectionHrefs.get(currentSection.target) ?? '#home';

        activeSurfaceHref.value = currentHref;

        if (navItems.value.some((item) => item.href === currentHref)) {
          activeHref.value = currentHref;
        }
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
  <header class="desktop-ui-scale-fixed pointer-events-none fixed left-0 top-0 z-50 h-[220px]">
    <div
      class="absolute inset-x-0 top-0 h-[210px]"
      :class="
        sectionBackdropStyle
          ? undefined
          : 'bg-gradient-to-b from-aurora-mint via-aurora-mint/55 to-transparent'
      "
      :style="sectionBackdropStyle"
      aria-hidden="true"
    />

    <div
      class="site-navbar__panel pointer-events-auto relative z-10 mx-auto mt-[46px] flex h-[90px] w-[min(calc(100%_-_2rem),1680px)] items-center rounded-[45px] bg-white px-[45px] ring-1 ring-white/80 max-xl:px-8"
      :class="
        usesLightSectionBackdrop
          ? 'shadow-[0_10px_28px_rgba(0,0,0,0.08)]'
          : 'shadow-[0_10px_28px_rgba(46,126,100,0.16)]'
      "
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
