<script setup lang="ts">
import { useSiteContent } from '@/composables/useSiteContent';

const { contactContent } = useSiteContent();

const fieldClass =
  'mt-[18px] h-[83px] w-full rounded-[13px] border border-aurora-border bg-white px-8 text-[22px] leading-[35px] text-aurora-gray outline-none transition focus:border-aurora-mint focus:ring-4 focus:ring-aurora-mint/20';
</script>

<template>
  <section id="contact" class="bg-aurora-mint pb-[111px] pt-[114px]">
    <div class="aurora-container text-white">
      <div class="text-center">
        <h2 class="font-display text-[clamp(54px,4.69vw,90px)] font-black leading-[1.16]">
          {{ contactContent.title }}
        </h2>
        <p class="mt-[72px] font-display text-[clamp(34px,2.6vw,50px)] font-black leading-[1.18]">
          {{ contactContent.quote }}
        </p>
        <p class="mt-[46px] font-body text-[clamp(24px,1.82vw,35px)] leading-[1.35]">
          {{ contactContent.subtitle }}
        </p>
      </div>

      <form
        class="mt-[100px] rounded-auroraCard bg-white px-[101px] pb-[118px] pt-[91px] text-aurora-mint shadow-auroraGlow max-lg:px-8"
        @submit.prevent
      >
        <p
          class="max-w-[1177px] font-body text-[clamp(26px,1.82vw,35px)] leading-[1.45] text-aurora-mint"
        >
          {{ contactContent.intro }}
        </p>

        <div class="mt-[87px] grid gap-x-[60px] gap-y-[52px] lg:grid-cols-2">
          <label
            v-for="field in contactContent.fields"
            :key="field.id"
            :for="field.id"
            class="font-display text-[30px] font-bold leading-[35px] text-aurora-mint"
          >
            {{ field.label }}
            <input
              :id="field.id"
              :name="field.id"
              :type="field.type"
              :placeholder="field.placeholder"
              :class="fieldClass"
            />
          </label>
        </div>

        <div class="mt-[70px] grid gap-x-[60px] gap-y-[72px] lg:grid-cols-2">
          <fieldset v-for="group in contactContent.optionGroups" :key="group.legend">
            <legend class="font-display text-[30px] font-bold leading-[35px] text-aurora-mint">
              {{ group.legend }}
            </legend>
            <div class="mt-[32px] space-y-[25px]">
              <label
                v-for="option in group.options"
                :key="option"
                class="flex items-center gap-[23px] font-body text-[25px] leading-[35px] text-aurora-mint"
              >
                <input
                  type="checkbox"
                  :name="group.legend"
                  :value="option"
                  class="size-[29px] shrink-0 appearance-none rounded-[5px] border-[3px] border-aurora-mint bg-white transition checked:bg-aurora-mint checked:shadow-[inset_0_0_0_5px_white] focus:outline-none focus:ring-4 focus:ring-aurora-mint/20"
                />
                <span>{{ option }}</span>
              </label>
            </div>
          </fieldset>
        </div>

        <label
          :for="contactContent.messageField.id"
          class="mt-[78px] block font-display text-[30px] font-bold leading-[35px] text-aurora-mint"
        >
          {{ contactContent.messageField.label }}
          <textarea
            :id="contactContent.messageField.id"
            :name="contactContent.messageField.id"
            rows="7"
            class="mt-[18px] min-h-[287px] w-full resize-none rounded-[13px] border border-aurora-border bg-white px-8 py-7 text-[22px] leading-[35px] text-aurora-gray outline-none transition focus:border-aurora-mint focus:ring-4 focus:ring-aurora-mint/20"
          />
        </label>

        <button
          type="submit"
          class="mx-auto mt-[95px] flex min-h-[89px] w-[min(700px,100%)] items-center justify-center rounded-aurora-pill bg-aurora-mint px-10 text-center font-display text-[32px] font-bold leading-[35px] text-white transition-transform duration-200 hover:-translate-y-1"
        >
          {{ contactContent.submitLabel }}
        </button>
      </form>

      <article
        class="mt-[94px] rounded-auroraCard bg-white px-[91px] pb-[67px] pt-[67px] text-aurora-mint shadow-auroraGlow max-lg:px-8"
      >
        <h3 class="text-center font-display text-[50px] font-black leading-[1.16]">
          {{ contactContent.informationTitle }}
        </h3>

        <div class="mt-[68px] grid gap-[40px] lg:grid-cols-2">
          <a
            v-for="method in contactContent.methods"
            :key="method.label"
            href="#"
            class="flex min-h-[116px] items-center gap-[32px] rounded-[20px] bg-aurora-mint px-[36px] text-white transition-transform duration-200 hover:-translate-y-1"
          >
            <span class="grid size-[82px] shrink-0 place-items-center rounded-full bg-aurora-mint-dark">
              <img
                :src="method.icon.src"
                :alt="method.icon.alt"
                :width="method.icon.width"
                :height="method.icon.height"
                loading="lazy"
                class="max-h-[54px] max-w-[54px]"
              />
            </span>
            <span>
              <span class="block font-display text-[30px] font-bold leading-[35px]">
                {{ method.label }}
              </span>
              <span class="mt-2 block font-body text-[24px] leading-[35px]">
                {{ method.value }}
              </span>
            </span>
          </a>
        </div>

        <p class="mt-[59px] text-center font-body text-[25px] leading-[35px] text-aurora-gray">
          {{ contactContent.privacyNote }}
        </p>
      </article>
    </div>
  </section>
</template>
