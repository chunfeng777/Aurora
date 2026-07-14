<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';
import { useSiteContent } from '@/composables/useSiteContent';
import { socialLinks } from '@/constants/site';

const { heroContent } = useSiteContent();

const heroVideoRef = ref<HTMLVideoElement | null>(null);
const heroAudioRef = ref<HTMLAudioElement | null>(null);

const playHeroAudio = () => {
  const audio = heroAudioRef.value;

  if (!audio || document.hidden) {
    return;
  }

  void audio.play().catch(() => undefined);
};

const playHeroMedia = async () => {
  const video = heroVideoRef.value;
  const audio = heroAudioRef.value;

  if (!video || !audio || document.hidden) {
    return;
  }

  const videoPlayback = video.play().catch(() => undefined);
  const audioPlayback = audio.play().catch(() => undefined);
  await Promise.all([videoPlayback, audioPlayback]);
};

const pauseHeroAudio = () => {
  heroAudioRef.value?.pause();
};

const unlockHeroAudio = () => {
  playHeroAudio();
  void playHeroMedia();
};

const handlePageVisibility = () => {
  if (document.hidden) {
    pauseHeroAudio();
    return;
  }

  void playHeroMedia();
};

onMounted(() => {
  heroAudioRef.value?.load();
  window.addEventListener('pointerdown', unlockHeroAudio, { passive: true });
  window.addEventListener('keydown', unlockHeroAudio);
  document.addEventListener('visibilitychange', handlePageVisibility);
});

onBeforeUnmount(() => {
  window.removeEventListener('pointerdown', unlockHeroAudio);
  window.removeEventListener('keydown', unlockHeroAudio);
  document.removeEventListener('visibilitychange', handlePageVisibility);
});
</script>

<template>
  <section
    id="home"
    class="relative isolate h-[100svh] min-h-[760px] overflow-hidden bg-aurora-mint"
    aria-labelledby="hero-title"
  >
    <video
      ref="heroVideoRef"
      :src="heroContent.background.src"
      :poster="heroContent.background.poster"
      :width="heroContent.background.width"
      :height="heroContent.background.height"
      autoplay
      muted
      loop
      playsinline
      preload="auto"
      fetchpriority="high"
      disablepictureinpicture
      controlslist="nodownload nofullscreen noremoteplayback"
      @play="playHeroAudio"
      @pause="pauseHeroAudio"
      aria-hidden="true"
      class="absolute inset-0 -z-20 h-full w-full object-cover"
    />

    <audio
      ref="heroAudioRef"
      :src="heroContent.audioSrc"
      loop
      preload="auto"
      aria-hidden="true"
    />

    <div
      class="absolute inset-0 -z-10 bg-gradient-to-r from-black/20 via-black/5 to-transparent"
      aria-hidden="true"
    />

    <div
      class="aurora-container relative flex h-full flex-col justify-center pb-[96px] pt-[220px] text-white lg:justify-start lg:pt-[clamp(320px,34vh,360px)]"
    >
      <p
        class="max-w-[900px] whitespace-pre-line font-display text-[clamp(28px,2.1vw,40px)] font-black leading-[1.22] sm:whitespace-pre"
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
        class="relative mt-[54px] inline-flex h-[75px] w-[min(521px,100%)] items-center justify-center rounded-[38px] bg-aurora-mint px-14 text-center font-display text-[clamp(24px,1.7vw,33px)] font-black leading-none text-white shadow-auroraCard transition-transform duration-200 hover:-translate-y-1 focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-white/80"
      >
        <span>{{ heroContent.ctaLabel }}</span>
        <span aria-hidden="true" class="absolute right-[34px] text-[38px] font-normal leading-none">&rsaquo;</span>
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
      class="absolute bottom-[10px] left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-1 font-body text-[15px] leading-[18px] text-white/90 transition-colors hover:text-white"
    >
      <span aria-hidden="true" class="size-[13px] rotate-45 border-b-2 border-r-2 border-current" />
      <span>{{ heroContent.scrollLabel }}</span>
    </a>
  </section>
</template>
