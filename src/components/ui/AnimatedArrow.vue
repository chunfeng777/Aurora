<script setup lang="ts">
interface AnimatedArrowProps {
  endOffset?: number;
  returnOffset?: number;
  startOffset?: number;
  strokeWidth?: number;
}

const {
  endOffset = 6,
  returnOffset = 3,
  startOffset = -10,
  strokeWidth = 5.2,
} = defineProps<AnimatedArrowProps>();
</script>

<template>
  <span
    class="animated-arrow grid size-9 shrink-0 place-items-center"
    :style="{
      '--arrow-end-x': `${endOffset}px`,
      '--arrow-return-x': `${returnOffset}px`,
      '--arrow-start-x': `${startOffset}px`,
    }"
    aria-hidden="true"
  >
    <span class="animated-arrow__dot col-start-1 row-start-1 size-[5px] rounded-full bg-current" />
    <svg
      class="animated-arrow__chevron col-start-1 row-start-1 size-[27px]"
      viewBox="0 0 32 32"
      fill="none"
    >
      <path
        d="M11 7.5L19.5 16L11 24.5"
        stroke="currentColor"
        :stroke-width="strokeWidth"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </span>
</template>

<style scoped>
.animated-arrow__dot {
  animation: arrow-dot 1.8s linear infinite;
  will-change: opacity, transform;
}

.animated-arrow__chevron {
  animation: arrow-chevron 1.8s linear infinite;
  will-change: opacity, transform;
}

@keyframes arrow-dot {
  0% {
    opacity: 1;
    transform: translateX(var(--arrow-start-x)) scale(1);
  }

  28% {
    opacity: 1;
    transform: translateX(var(--arrow-end-x)) scale(1);
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }

  39%,
  50% {
    opacity: 0;
    transform: translateX(var(--arrow-end-x)) scale(2.2);
  }

  61% {
    opacity: 1;
    transform: translateX(var(--arrow-return-x)) scale(1);
  }

  98%,
  100% {
    opacity: 1;
    transform: translateX(var(--arrow-start-x)) scale(1);
  }
}

@keyframes arrow-chevron {
  0%,
  28% {
    opacity: 0;
    transform: translateX(var(--arrow-end-x)) scale(0.2);
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }

  39%,
  50% {
    opacity: 1;
    transform: translateX(var(--arrow-end-x)) scale(1);
  }

  61%,
  100% {
    opacity: 0;
    transform: translateX(var(--arrow-return-x)) scale(0.2);
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
