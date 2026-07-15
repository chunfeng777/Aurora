<template>
  <span class="animated-arrow grid size-9 shrink-0 place-items-center" aria-hidden="true">
    <span class="animated-arrow__dot absolute size-[5px] rounded-full bg-current" />
    <svg class="animated-arrow__chevron size-[27px]" viewBox="0 0 32 32" fill="none">
      <path
        d="M11 7.5L19.5 16L11 24.5"
        stroke="currentColor"
        stroke-width="3.4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </span>
</template>

<style scoped>
.animated-arrow {
  position: relative;
}

.animated-arrow__dot {
  animation: arrow-dot 1.6s ease-in-out infinite;
}

.animated-arrow__chevron {
  animation: arrow-chevron 1.6s ease-in-out infinite;
}

@keyframes arrow-dot {
  0%,
  34%,
  100% {
    opacity: 1;
    transform: scale(1);
  }

  48%,
  82% {
    opacity: 0;
    transform: scale(0.45);
  }
}

@keyframes arrow-chevron {
  0%,
  34% {
    opacity: 0;
    transform: translateX(-9px) scale(0.55);
  }

  50%,
  68% {
    opacity: 1;
    transform: translateX(0);
  }

  84%,
  100% {
    opacity: 0;
    transform: translateX(11px) scale(0.82);
  }
}

@media (prefers-reduced-motion: reduce) {
  .animated-arrow__dot {
    display: none;
  }

  .animated-arrow__chevron {
    animation: none;
    opacity: 1;
    transform: none;
  }
}
</style>
