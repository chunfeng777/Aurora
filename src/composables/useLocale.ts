import { readonly, ref } from 'vue';

export type Locale = 'en' | 'zh';

const STORAGE_KEY = 'aurora-locale';

const getInitialLocale = (): Locale => {
  if (typeof window === 'undefined') {
    return 'en';
  }

  try {
    return window.localStorage.getItem(STORAGE_KEY) === 'zh' ? 'zh' : 'en';
  } catch {
    return 'en';
  }
};

const locale = ref<Locale>(getInitialLocale());

const applyDocumentLanguage = (value: Locale) => {
  if (typeof document !== 'undefined') {
    document.documentElement.lang = value === 'zh' ? 'zh-CN' : 'en';
  }
};

applyDocumentLanguage(locale.value);

export const useLocale = () => {
  const setLocale = (value: Locale) => {
    locale.value = value;
    applyDocumentLanguage(value);

    try {
      window.localStorage.setItem(STORAGE_KEY, value);
    } catch {
      // The language still switches when storage is unavailable.
    }
  };

  return {
    locale: readonly(locale),
    setLocale,
  };
};
