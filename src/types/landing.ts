export interface ImageAsset {
  readonly src: string;
  readonly alt: string;
  readonly width: number;
  readonly height: number;
}

export interface SectionHeading {
  readonly eyebrow?: string;
  readonly title: string;
  readonly subtitle?: string;
}

export interface IconCard {
  readonly title: string;
  readonly description: string;
  readonly icon: ImageAsset;
}

export interface ServiceCard extends IconCard {
  readonly stage: string;
  readonly ctaLabel: string;
}

export interface ProcessStep {
  readonly index: number;
  readonly title: string;
  readonly description: string;
}

export interface JourneyStep {
  readonly index: number;
  readonly title: string;
  readonly description: string;
}

export interface SocialLink {
  readonly label: string;
  readonly href: string;
  readonly icon: ImageAsset;
}

export interface HeroContent {
  readonly eyebrow: string;
  readonly title: string;
  readonly subtitle: string;
  readonly ctaLabel: string;
  readonly ctaHref: string;
  readonly background: ImageAsset;
  readonly scrollLabel: string;
}

export interface AboutContent {
  readonly title: string;
  readonly paragraphs: readonly string[];
  readonly testimonial: {
    readonly quote: string;
    readonly author: string;
  };
  readonly image: ImageAsset;
}

export interface FamilyCtaContent {
  readonly title: string;
  readonly subtitle: string;
  readonly image: ImageAsset;
}

export interface ContactField {
  readonly id: string;
  readonly label: string;
  readonly type: 'text' | 'email' | 'tel' | 'textarea';
  readonly placeholder?: string;
}

export interface ContactOptionGroup {
  readonly legend: string;
  readonly options: readonly string[];
}

export interface ContactMethod {
  readonly label: string;
  readonly value: string;
  readonly icon: ImageAsset;
}

export interface ContactContent {
  readonly title: string;
  readonly quote: string;
  readonly subtitle: string;
  readonly intro: string;
  readonly fields: readonly ContactField[];
  readonly optionGroups: readonly ContactOptionGroup[];
  readonly messageField: ContactField;
  readonly submitLabel: string;
  readonly informationTitle: string;
  readonly methods: readonly ContactMethod[];
  readonly privacyNote: string;
}

export interface FooterColumn {
  readonly title: string;
  readonly links: readonly {
    readonly label: string;
    readonly href: string;
  }[];
}

export interface FooterContent {
  readonly logo: ImageAsset;
  readonly tagline: string;
  readonly columns: readonly FooterColumn[];
  readonly copyright: string;
}
