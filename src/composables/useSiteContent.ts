import { computed } from 'vue';

import { zhCopy } from '@/constants/localizedCopy';
import {
  aboutContent as baseAboutContent,
  contactContent as baseContactContent,
  familyCtaContent as baseFamilyCtaContent,
  footerContent as baseFooterContent,
  heroContent as baseHeroContent,
  journeyHeading as baseJourneyHeading,
  journeySteps as baseJourneySteps,
  navItems as baseNavItems,
  processHeading as baseProcessHeading,
  processSteps as baseProcessSteps,
  serviceCards as baseServiceCards,
  servicesHeading as baseServicesHeading,
  whyChooseUsCards as baseWhyChooseUsCards,
  whyChooseUsHeading as baseWhyChooseUsHeading,
} from '@/constants/site';
import { useLocale } from '@/composables/useLocale';

export const useSiteContent = () => {
  const { locale } = useLocale();
  const isChinese = computed(() => locale.value === 'zh');

  const navItems = computed(() =>
    isChinese.value
      ? baseNavItems.map((item, index) => ({ ...item, label: zhCopy.navLabels[index] ?? item.label }))
      : baseNavItems,
  );

  const heroContent = computed(() =>
    isChinese.value ? { ...baseHeroContent, ...zhCopy.hero } : baseHeroContent,
  );

  const whyChooseUsHeading = computed(() =>
    isChinese.value ? zhCopy.whyHeading : baseWhyChooseUsHeading,
  );
  const whyChooseUsCards = computed(() =>
    isChinese.value
      ? baseWhyChooseUsCards.map((card, index) => ({ ...card, ...zhCopy.whyCards[index] }))
      : baseWhyChooseUsCards,
  );

  const servicesHeading = computed(() =>
    isChinese.value ? zhCopy.servicesHeading : baseServicesHeading,
  );
  const serviceCards = computed(() =>
    isChinese.value
      ? baseServiceCards.map((card, index) => ({ ...card, ...zhCopy.serviceCards[index] }))
      : baseServiceCards,
  );

  const processHeading = computed(() =>
    isChinese.value ? zhCopy.processHeading : baseProcessHeading,
  );
  const processSteps = computed(() =>
    isChinese.value
      ? baseProcessSteps.map((step, index) => ({ ...step, ...zhCopy.processSteps[index] }))
      : baseProcessSteps,
  );
  const processCtaLabel = computed(() =>
    isChinese.value ? zhCopy.processCtaLabel : 'Learn More About Our Process',
  );

  const journeyHeading = computed(() =>
    isChinese.value ? zhCopy.journeyHeading : baseJourneyHeading,
  );
  const journeySteps = computed(() =>
    isChinese.value
      ? baseJourneySteps.map((step, index) => ({ ...step, ...zhCopy.journeySteps[index] }))
      : baseJourneySteps,
  );
  const journeyClosing = computed(() =>
    isChinese.value ? zhCopy.journeyClosing : 'Every step is guided with transparency and care.',
  );
  const journeyCtaLabel = computed(() =>
    isChinese.value ? zhCopy.journeyCtaLabel : 'Begin Your Journey',
  );

  const aboutContent = computed(() =>
    isChinese.value
      ? {
          ...baseAboutContent,
          title: zhCopy.about.title,
          paragraphs: zhCopy.about.paragraphs,
          testimonial: { quote: zhCopy.about.quote, author: zhCopy.about.author },
          image: { ...baseAboutContent.image, alt: zhCopy.about.imageAlt },
        }
      : baseAboutContent,
  );

  const familyCtaContent = computed(() =>
    isChinese.value
      ? {
          ...baseFamilyCtaContent,
          title: zhCopy.familyCta.title,
          subtitle: zhCopy.familyCta.subtitle,
          image: { ...baseFamilyCtaContent.image, alt: zhCopy.familyCta.imageAlt },
        }
      : baseFamilyCtaContent,
  );

  const contactContent = computed(() =>
    isChinese.value
      ? {
          ...baseContactContent,
          title: zhCopy.contact.title,
          quote: zhCopy.contact.quote,
          subtitle: zhCopy.contact.subtitle,
          intro: zhCopy.contact.intro,
          fields: baseContactContent.fields.map((field, index) => ({
            ...field,
            label: zhCopy.contact.fieldLabels[index] ?? field.label,
          })),
          optionGroups: baseContactContent.optionGroups.map((group, index) => ({
            ...group,
            legend: zhCopy.contact.optionGroups[index]?.legend ?? group.legend,
            options: zhCopy.contact.optionGroups[index]?.options ?? group.options,
          })),
          messageField: { ...baseContactContent.messageField, label: zhCopy.contact.messageLabel },
          submitLabel: zhCopy.contact.submitLabel,
          informationTitle: zhCopy.contact.informationTitle,
          methods: baseContactContent.methods.map((method, index) => ({
            ...method,
            label: zhCopy.contact.methodLabels[index] ?? method.label,
            value: zhCopy.contact.methodValues[index] ?? method.value,
          })),
          privacyNote: zhCopy.contact.privacyNote,
        }
      : baseContactContent,
  );

  const footerContent = computed(() =>
    isChinese.value
      ? {
          ...baseFooterContent,
          tagline: zhCopy.footer.tagline,
          columns: baseFooterContent.columns.map((column, columnIndex) => ({
            ...column,
            title: zhCopy.footer.columnTitles[columnIndex] ?? column.title,
            links: column.links.map((link, linkIndex) => ({
              ...link,
              label: zhCopy.footer.linkLabels[columnIndex]?.[linkIndex] ?? link.label,
            })),
          })),
          copyright: zhCopy.footer.copyright,
        }
      : baseFooterContent,
  );

  return {
    navItems,
    heroContent,
    whyChooseUsHeading,
    whyChooseUsCards,
    servicesHeading,
    serviceCards,
    processHeading,
    processSteps,
    processCtaLabel,
    journeyHeading,
    journeySteps,
    journeyClosing,
    journeyCtaLabel,
    aboutContent,
    familyCtaContent,
    contactContent,
    footerContent,
  };
};
