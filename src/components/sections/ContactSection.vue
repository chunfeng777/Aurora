<script setup lang="ts">
import { computed, reactive, ref } from 'vue';

import {
  ConsultationSubmissionError,
  createConsultation,
} from '@/api/consultations';
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
  3: [],
});
const singleOptionSelections = reactive<Record<number, string>>({
  1: '',
  2: '',
});
type SubmissionMessageKey =
  | 'validationError'
  | 'success'
  | 'networkError'
  | 'serverError';

const submissionMessages = {
  en: {
    validationError: 'Please provide your full name and at least one contact method.',
    success: 'Submitted successfully! Thank you. We will be in touch shortly.',
    networkError:
      'Unable to connect to the consultation service. Please check your connection and try again.',
    serverError: 'Unable to submit your request. Please try again later.',
  },
  zh: {
    validationError: '请填写姓名，并至少留下一种联系方式。',
    success: '提交成功！感谢您的咨询，我们会尽快与您联系。',
    networkError: '无法连接到咨询服务，请检查网络后重试。',
    serverError: '提交失败，请稍后重试。',
  },
} as const;

const submissionState = ref<'idle' | 'submitting' | 'success' | 'error'>('idle');
const submissionMessageKey = ref<SubmissionMessageKey | null>(null);
const isChinese = computed(() => locale.value === 'zh');
const isSubmitting = computed(() => submissionState.value === 'submitting');
const submissionMessage = computed(() => {
  const key = submissionMessageKey.value;
  return key ? submissionMessages[locale.value][key] : '';
});
const fieldsById = computed(() =>
  Object.fromEntries(contactContent.value.fields.map((field) => [field.id, field])),
);
const orderedContactFieldIds = ['email', 'phone', 'wechat'] as const;
const primaryContactGridClass = computed(() =>
  isChinese.value
    ? 'grid-cols-2 lg:grid-cols-4'
    : 'grid-cols-2 lg:grid-cols-[132px_142px_210px_168px]',
);

const getOptionGridClass = (index: number) => {
  if (index === 0) {
    return isChinese.value
      ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-[360px_150px_minmax(400px,480px)]'
      : 'grid-cols-1 md:grid-cols-2 xl:grid-cols-[249px_200px_495px]';
  }

  if (index === 1) {
    return 'grid-cols-2 sm:grid-cols-4';
  }

  return 'grid-cols-1 sm:grid-cols-2 xl:grid-cols-3';
};

const resetForm = () => {
  Object.keys(formValues).forEach((key) => {
    formValues[key] = '';
  });

  Object.keys(optionSelections).forEach((key) => {
    optionSelections[Number(key)] = [];
  });

  Object.keys(singleOptionSelections).forEach((key) => {
    singleOptionSelections[Number(key)] = '';
  });
};

const submitConsultation = async () => {
  submissionState.value = 'idle';
  submissionMessageKey.value = null;

  const fullName = formValues['full-name'].trim();
  const email = formValues.email.trim();
  const whatsapp = formValues.phone.trim();
  const wechat = formValues.wechat.trim();

  if (!fullName || (!email && !whatsapp && !wechat)) {
    submissionState.value = 'error';
    submissionMessageKey.value = 'validationError';
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
      explore: singleOptionSelections[1],
      expectedContactTime: singleOptionSelections[2],
      currentLocation: optionSelections[3].join(', '),
      message: formValues.situation.trim(),
    });

    resetForm();
    submissionState.value = 'success';
    submissionMessageKey.value = 'success';
  } catch (error) {
    submissionState.value = 'error';

    if (error instanceof ConsultationSubmissionError) {
      if (error.code === 'mail_notification_failed_after_save') {
        resetForm();
        submissionState.value = 'success';
        submissionMessageKey.value = 'success';
        return;
      }

      if (error.code === 'network_error') {
        submissionMessageKey.value = 'networkError';
        return;
      }
    }

    submissionMessageKey.value = 'serverError';
  }
};

const fieldClass =
  'mt-[14px] h-[58px] w-full rounded-[16px] border-[4px] border-[#ececec] bg-white px-5 font-body text-[26px] leading-[35px] text-aurora-gray outline-none transition placeholder:text-aurora-gray/45 focus:border-aurora-mint focus:ring-4 focus:ring-aurora-mint/20 max-sm:text-[18px]';
const labelClass =
  'block font-display text-[28px] font-bold leading-[1.25] text-aurora-mint max-sm:text-[20px]';
const optionLabelClass =
  'flex min-w-0 items-start gap-[9px] font-display text-[28px] font-bold leading-[1.25] text-aurora-mint max-sm:text-[18px]';
</script>

<template>
  <section id="contact" class="desktop-ui-scale bg-aurora-mint pb-[190px] pt-[114px]">
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
        class="mx-auto mt-[100px] max-w-[1580px] rounded-auroraCard bg-white px-[68px] pb-[40px] pt-[68px] text-aurora-mint shadow-auroraGlow max-lg:px-8"
        :aria-busy="isSubmitting"
        @submit.prevent="submitConsultation"
      >
        <p
          class="relative max-w-[1453px] pl-[30px] font-body text-[32px] leading-[55px] text-aurora-mint before:absolute before:left-0 before:top-[21px] before:size-[10px] before:rounded-full before:bg-aurora-mint max-sm:pl-[20px] max-sm:text-[20px] max-sm:leading-[34px] max-sm:before:top-[12px] max-sm:before:size-[8px]"
        >
          {{ contactContent.intro }}
        </p>

        <label
          v-if="fieldsById['full-name']"
          :for="fieldsById['full-name'].id"
          :class="`${labelClass} mt-[52px] max-w-[909px]`"
        >
          {{ fieldsById['full-name'].label }}
          <input
            :id="fieldsById['full-name'].id"
            :name="fieldsById['full-name'].id"
            :type="fieldsById['full-name'].type"
            :placeholder="fieldsById['full-name'].placeholder"
            :class="fieldClass"
            v-model="formValues[fieldsById['full-name'].id]"
            :disabled="isSubmitting"
          />
        </label>

        <fieldset class="mt-[52px]" v-if="contactContent.optionGroups[0]">
          <legend :class="labelClass">
            {{ contactContent.optionGroups[0].legend }}
          </legend>
          <div
            class="mt-[24px] grid max-w-[1040px] gap-x-[78px] gap-y-[18px]"
            :class="primaryContactGridClass"
          >
            <label
              v-for="option in contactContent.optionGroups[0].options"
              :key="option"
              :class="optionLabelClass"
            >
              <input
                type="checkbox"
                name="contact-option-0"
                :value="option"
                v-model="optionSelections[0]"
                :disabled="isSubmitting"
                class="size-[36px] shrink-0 appearance-none rounded-[3px] border-[2px] border-[#b9e8d5] bg-white transition checked:bg-aurora-mint checked:shadow-[inset_0_0_0_6px_white] focus:outline-none focus:ring-4 focus:ring-aurora-mint/20 max-sm:size-[24px]"
              />
              <span
                class="min-w-0 break-words"
                :class="!isChinese ? 'sm:whitespace-nowrap' : ''"
              >
                {{ option }}
              </span>
            </label>
          </div>
        </fieldset>

        <div class="mt-[39px] grid max-w-[910px] gap-y-[49px]">
          <label
            v-for="fieldId in orderedContactFieldIds"
            :key="fieldId"
            :for="fieldsById[fieldId]?.id"
            :class="labelClass"
          >
            {{ fieldsById[fieldId]?.label }}
            <input
              v-if="fieldsById[fieldId]"
              :id="fieldsById[fieldId].id"
              :name="fieldsById[fieldId].id"
              :type="fieldsById[fieldId].type"
              :placeholder="fieldsById[fieldId].placeholder"
              :class="fieldClass"
              v-model="formValues[fieldsById[fieldId].id]"
              :disabled="isSubmitting"
            />
          </label>
        </div>

        <div class="my-[82px] h-[8px] w-full bg-aurora-mint-soft" aria-hidden="true" />

        <div class="grid gap-y-[67px]">
          <fieldset
            v-for="(group, index) in contactContent.optionGroups.slice(1)"
            :key="group.legend"
          >
            <legend :class="labelClass">
              {{ group.legend }}
            </legend>
            <div
              class="mt-[24px] grid gap-x-[72px] gap-y-[18px]"
              :class="getOptionGridClass(index)"
            >
              <label
                v-for="option in group.options"
                :key="option"
                :class="optionLabelClass"
              >
                <input
                  v-if="index <= 1"
                  type="radio"
                  :name="`contact-option-${index + 1}`"
                  :value="option"
                  v-model="singleOptionSelections[index + 1]"
                  :disabled="isSubmitting"
                  class="shrink-0 appearance-none rounded-[3px] border-[2px] border-[#b9e8d5] bg-white transition checked:bg-aurora-mint checked:shadow-[inset_0_0_0_6px_white] focus:outline-none focus:ring-4 focus:ring-aurora-mint/20"
                  :class="isChinese && index === 0 ? 'size-[30px] max-sm:size-[24px]' : 'size-[36px] max-sm:size-[24px]'"
                />
                <input
                  v-else
                  type="checkbox"
                  :name="`contact-option-${index + 1}`"
                  :value="option"
                  v-model="optionSelections[index + 1]"
                  :disabled="isSubmitting"
                  class="shrink-0 appearance-none rounded-[3px] border-[2px] border-[#b9e8d5] bg-white transition checked:bg-aurora-mint checked:shadow-[inset_0_0_0_6px_white] focus:outline-none focus:ring-4 focus:ring-aurora-mint/20"
                  :class="isChinese && index === 0 ? 'size-[30px] max-sm:size-[24px]' : 'size-[36px] max-sm:size-[24px]'"
                />
                <span
                  class="min-w-0 break-words"
                  :class="!isChinese && index === 0 ? 'xl:whitespace-nowrap' : ''"
                >
                  {{ option }}
                </span>
              </label>
            </div>
          </fieldset>
        </div>

        <label
          :for="contactContent.messageField.id"
          :class="`${labelClass} mt-[73px]`"
        >
          {{ contactContent.messageField.label }}
          <textarea
            :id="contactContent.messageField.id"
            :name="contactContent.messageField.id"
            rows="7"
            v-model="formValues[contactContent.messageField.id]"
            :disabled="isSubmitting"
            class="mt-[14px] min-h-[333px] w-full resize-none rounded-[16px] border-[4px] border-[#ececec] bg-white px-8 py-7 font-body text-[26px] leading-[40px] text-aurora-gray outline-none transition focus:border-aurora-mint focus:ring-4 focus:ring-aurora-mint/20 max-sm:text-[18px] max-sm:leading-[30px]"
          />
        </label>

        <button
          type="submit"
          class="mt-[52px] flex min-h-[100px] w-full items-center justify-center rounded-[50px] bg-aurora-gold px-10 text-center font-display text-[40px] font-bold leading-[49px] text-white transition-transform duration-200 hover:-translate-y-1 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0 max-sm:min-h-[72px] max-sm:rounded-[36px] max-sm:text-[24px]"
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
          class="mt-8 flex w-full items-center justify-center gap-4 rounded-[18px] border-[3px] px-7 py-6 text-center font-display text-[28px] font-bold leading-[38px] shadow-sm max-sm:gap-3 max-sm:px-4 max-sm:py-4 max-sm:text-[19px] max-sm:leading-[28px]"
          :class="
            submissionState === 'success'
              ? 'border-[#20ad6b] bg-[#e8fff2] text-[#087443]'
              : 'border-red-300 bg-red-50 text-red-700'
          "
          role="status"
          aria-live="polite"
        >
          <span
            v-if="submissionState === 'success'"
            class="flex size-[42px] shrink-0 items-center justify-center rounded-full bg-[#12965b] text-[28px] leading-none text-white max-sm:size-[32px] max-sm:text-[21px]"
            aria-hidden="true"
          >
            ✓
          </span>
          <span>{{ submissionMessage }}</span>
        </p>
      </form>

      <aside
        id="contact-information"
        class="relative mx-auto mt-[101px] min-h-[296px] max-w-[1580px] rounded-[47px] bg-white px-[35px] pb-[48px] pt-[49px] text-aurora-mint shadow-[0_24px_28px_-18px_rgba(73,152,120,0.72)] max-lg:px-8 max-sm:min-h-0 max-sm:rounded-[28px] max-sm:px-6 max-sm:py-8"
        aria-labelledby="contact-information-title"
      >
        <h3
          id="contact-information-title"
          class="font-display text-[36px] font-black leading-normal max-sm:text-[26px]"
        >
          {{ contactContent.informationTitle }}
        </h3>

        <div
          class="mt-[46px] grid grid-cols-1 gap-x-[72px] gap-y-8 md:grid-cols-2 xl:grid-cols-3"
        >
          <article
            v-for="method in contactContent.methods"
            :key="method.label"
            class="flex min-w-0 items-center justify-self-center gap-6"
          >
            <span
              class="grid size-[82px] shrink-0 place-items-center overflow-hidden rounded-full bg-aurora-mint"
              aria-hidden="true"
            >
              <img
                :src="method.icon.src"
                alt=""
                :width="method.icon.width"
                :height="method.icon.height"
                class="max-h-full max-w-full object-contain"
              />
            </span>

            <div class="min-w-0">
              <h4 class="font-display text-[28px] font-bold leading-normal text-aurora-mint max-sm:text-[21px]">
                {{ method.label }}
              </h4>
              <p class="break-words font-body text-[25px] leading-[40px] text-aurora-gray max-sm:text-[18px] max-sm:leading-[28px]">
                {{ method.value }}
              </p>
            </div>
          </article>
        </div>
      </aside>

      <p
        class="mx-auto mt-[76px] max-w-[1580px] text-center font-body text-[35px] leading-[55px] text-white max-sm:mt-12 max-sm:text-[22px] max-sm:leading-[34px]"
      >
        {{ contactContent.privacyNote }}
      </p>
    </div>
  </section>
</template>
