<script setup lang="ts">
import { useSiteContent } from '@/composables/useSiteContent';
import { socialLinks } from '@/constants/site';

const { footerContent } = useSiteContent();

const contactIconPaths: Record<string, string> = {
  email:
    'M4 7.5A2.5 2.5 0 0 1 6.5 5h11A2.5 2.5 0 0 1 20 7.5v9A2.5 2.5 0 0 1 17.5 19h-11A2.5 2.5 0 0 1 4 16.5v-9Zm2.1-.25 5.55 4.35a.55.55 0 0 0 .7 0l5.55-4.35H6.1Zm12.15 2.2-4.8 3.76a2.3 2.3 0 0 1-2.9 0l-4.8-3.76v7.05c0 .41.34.75.75.75h11c.41 0 .75-.34.75-.75V9.45Z',
  brand:
    'M12 3.5c-4.42 0-8 2.95-8 6.6 0 2.12 1.22 4 3.1 5.2l-.56 2.86a.75.75 0 0 0 1.08.8l3.2-1.72c.39.04.78.06 1.18.06 4.42 0 8-2.95 8-6.6s-3.58-7.2-8-7.2Zm-3.35 7.8a1.2 1.2 0 1 1 0-2.4 1.2 1.2 0 0 1 0 2.4Zm3.35 0a1.2 1.2 0 1 1 0-2.4 1.2 1.2 0 0 1 0 2.4Zm3.35 0a1.2 1.2 0 1 1 0-2.4 1.2 1.2 0 0 1 0 2.4Z',
  phone:
    'M7.15 4.5 9.2 4a1.35 1.35 0 0 1 1.53.78l1.05 2.45a1.35 1.35 0 0 1-.38 1.56l-1.1.96a10.3 10.3 0 0 0 3.95 3.95l.96-1.1a1.35 1.35 0 0 1 1.56-.38l2.45 1.05a1.35 1.35 0 0 1 .78 1.53l-.5 2.05A2.15 2.15 0 0 1 17.9 19C10.78 19 5 13.22 5 6.1c0-.99.68-1.85 1.65-2.08l.5.48Z',
};

const getContactIconKey = (label: string) => {
  if (label.includes('@')) {
    return 'email';
  }

  if (label.startsWith('+')) {
    return 'phone';
  }

  return 'brand';
};

const isContactColumn = (links: readonly { readonly label: string; readonly href: string }[]) =>
  links.some((link) => link.label.includes('@') || link.label.startsWith('+'));
</script>

<template>
  <footer id="footer" class="bg-white pb-[66px] pt-[41px] text-aurora-mint">
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
            class="h-auto w-[299px]"
          />
        </a>
        <p class="mt-[29px] whitespace-pre-line font-body text-[25px] leading-[35px]">
          {{ footerContent.tagline }}
        </p>
      </div>

      <div class="grid gap-[70px] md:grid-cols-3">
        <nav v-for="column in footerContent.columns" :key="column.title" :aria-label="column.title">
          <h2 class="font-display text-[40px] font-bold leading-[49px]">
            {{ column.title }}
          </h2>
          <ul
            class="mt-[24px]"
            :class="isContactColumn(column.links) ? 'space-y-[22px]' : 'space-y-[16px]'"
          >
            <li v-for="link in column.links" :key="link.label">
              <a
                :href="link.href"
                class="font-body text-[25px] font-bold leading-[35px] transition-opacity duration-200 hover:opacity-75"
                :class="isContactColumn(column.links) ? 'flex items-center gap-[18px]' : ''"
              >
                <svg
                  v-if="isContactColumn(column.links)"
                  class="size-[28px] shrink-0 fill-current"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path :d="contactIconPaths[getContactIconKey(link.label)]" />
                </svg>
                {{ link.label }}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>

    <div
      class="aurora-container mt-[91px] flex items-end justify-between gap-8 border-t border-aurora-mint/30 pt-[35px] max-md:flex-col max-md:items-start"
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
            class="size-[37px]"
          />
        </a>
      </div>
    </div>
  </footer>
</template>
