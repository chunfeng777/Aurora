<script setup lang="ts">
import { computed, reactive, ref } from 'vue';

import { createConsultation } from '@/api/consultations';
import { useLocale } from '@/composables/useLocale';
import { useSiteContent } from '@/composables/useSiteContent';

const { locale } = useLocale();
const { contactContent } = useSiteContent();

const formValues = reactive<Record<string, string>>({
  'full-name': '',
  email: '',
  phone: '',
  wechat: '',
  situation: '',
});
const optionSelections = reactive<Record<number, string[]>>({
  0: [],
  1: [],
  2: [],
  3: [],
});
const submissionState = ref<'idle' | 'submitting' | 'success' | 'error'>('idle');
const submissionMessage = ref('');
const isChinese = computed(() => locale.value === 'zh');
const isSubmitting = computed(() => submissionState.value === 'submitting');

const resetForm = () => {
  Object.keys(formValues).forEach((key) => {
    formValues[key] = '';
  });

  Object.keys(optionSelections).forEach((key) => {
    optionSelections[Number(key)] = [];
  });
};

const submitConsultation = async () => {
  submissionState.value = 'idle';
  submissionMessage.value = '';

  const fullName = formValues['full-name'].trim();
  const email = formValues.email.trim();
  const whatsapp = formValues.phone.trim();
  const wechat = formValues.wechat.trim();

  if (!fullName || (!email && !whatsapp && !wechat)) {
    submissionState.value = 'error';
    submissionMessage.value = isChinese.value
      ? '请填写姓名，并至少留下一个联系方式。'
      : 'Please provide your full name and at least one contact method.';
    return;
  }

  submissionState.value = 'submitting';

  try {
    await createConsultation({
      fullName,
      email,
      whatsapp,
      wechat,
      preferredContactMethod: optionSelections[0].join(', '),
      explore: optionSelections[1].join(', '),
      expectedContactTime: optionSelections[2].join(', '),
      currentLocation: optionSelections[3].join(', '),
      message: formValues.situation.trim(),
    });

    resetForm();
    submissionState.value = 'success';
    submissionMessage.value = isChinese.value
      ? '感谢您的咨询，我们会尽快与您联系。'
      : 'Thank you. We will be in touch shortly.';
  } catch (error) {
    submissionState.value = 'error';
    submissionMessage.value =
      error instanceof Error && error.message
        ? error.message
        : isChinese.value
          ? '提交失败，请稍后再试。'
          : 'Unable to submit your request. Please try again later.';
  }
};

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
        :aria-busy="isSubmitting"
        @submit.prevent="submitConsultation"
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
              v-model="formValues[field.id]"
              :disabled="isSubmitting"
            />
          </label>
        </div>

        <div class="mt-[70px] grid gap-x-[60px] gap-y-[72px] lg:grid-cols-2">
          <fieldset v-for="(group, index) in contactContent.optionGroups" :key="group.legend">
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
                  :name="`contact-option-${index}`"
                  :value="option"
                  v-model="optionSelections[index]"
                  :disabled="isSubmitting"
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
            v-model="formValues[contactContent.messageField.id]"
            :disabled="isSubmitting"
            class="mt-[18px] min-h-[287px] w-full resize-none rounded-[13px] border border-aurora-border bg-white px-8 py-7 text-[22px] leading-[35px] text-aurora-gray outline-none transition focus:border-aurora-mint focus:ring-4 focus:ring-aurora-mint/20"
          />
        </label>

        <button
          type="submit"
          class="mx-auto mt-[95px] flex min-h-[89px] w-[min(700px,100%)] items-center justify-center rounded-aurora-pill bg-aurora-mint px-10 text-center font-display text-[32px] font-bold leading-[35px] text-white transition-transform duration-200 hover:-translate-y-1 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
          :disabled="isSubmitting"
        >
          {{
            isSubmitting
              ? isChinese
                ? '提交中...'
                : 'Submitting...'
              : contactContent.submitLabel
          }}
        </button>
        <p
          v-if="submissionState !== 'idle'"
          class="mt-7 text-center font-body text-[22px] leading-[30px]"
          :class="submissionState === 'success' ? 'text-aurora-mint-dark' : 'text-red-600'"
          role="status"
          aria-live="polite"
        >
          {{ submissionMessage }}
        </p>
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
