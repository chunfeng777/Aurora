import aboutConsultationUrl from '@/assets/images/about-consultation.jpg';
import auroraLogoUrl from '@/assets/images/aurora-logo.svg';
import contactMailIconUrl from '@/assets/images/contact-mail.svg';
import contactWhatsappIconUrl from '@/assets/images/contact-whatsapp.svg';
import familyJourneyCtaUrl from '@/assets/images/family-journey-cta.jpg';
import serviceConciergeIconUrl from '@/assets/images/service-concierge.svg';
import serviceConsultationIconUrl from '@/assets/images/service-consultation.svg';
import serviceCoordinationIconUrl from '@/assets/images/service-coordination.svg';
import facebookIconUrl from '@/assets/images/social-facebook.svg';
import instagramIconUrl from '@/assets/images/social-instagram.svg';
import linkedinIconUrl from '@/assets/images/social-linkedin.svg';
import youtubeIconUrl from '@/assets/images/social-youtube.svg';
import whyCoordinationIconUrl from '@/assets/images/why-coordination.svg';
import whyDiscreetIconUrl from '@/assets/images/why-discreet.svg';
import whyNetworkIconUrl from '@/assets/images/why-network.svg';
import heroVideoPosterUrl from '@/assets/images/hero-video-poster.webp';
import heroBackgroundAudioUrl from '@/assets/audio/hero-background.mp3';
import heroFamilyBeachVideoUrl from '@/assets/videos/hero-family-beach.mp4';

import type {
  AboutContent,
  ContactContent,
  FamilyCtaContent,
  FooterContent,
  HeroContent,
  IconCard,
  ImageAsset,
  JourneyStep,
  ProcessStep,
  SectionHeading,
  ServiceCard,
  SocialLink,
} from '@/types/landing';

export interface NavItem {
  readonly label: string;
  readonly href: string;
}

export const navItems: readonly NavItem[] = [
  { label: 'HOME', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
];

export const auroraLogo: ImageAsset = {
  src: auroraLogoUrl,
  alt: 'Aurora',
  width: 157,
  height: 29,
};

export const heroContent: HeroContent = {
  eyebrow: 'Define Your Path to Parenthood\nPrivate · Secure · Effortless',
  title: 'Aurora International\nFamily Advisory',
  subtitle: 'Connecting global intended parents with trusted U.S. providers.',
  ctaLabel: 'Book a Consultation',
  ctaHref: '#contact',
  scrollLabel: 'Scroll Down',
  background: {
    src: heroFamilyBeachVideoUrl,
    poster: heroVideoPosterUrl,
    width: 1280,
    height: 720,
  },
  audioSrc: heroBackgroundAudioUrl,
};

export const socialLinks: readonly SocialLink[] = [
  {
    label: 'Facebook',
    href: '#',
    icon: { src: facebookIconUrl, alt: '', width: 37, height: 37 },
  },
  {
    label: 'LinkedIn',
    href: '#',
    icon: { src: linkedinIconUrl, alt: '', width: 37, height: 37 },
  },
  {
    label: 'Instagram',
    href: '#',
    icon: { src: instagramIconUrl, alt: '', width: 37, height: 37 },
  },
  {
    label: 'YouTube',
    href: '#',
    icon: { src: youtubeIconUrl, alt: '', width: 37, height: 37 },
  },
];

export const whyChooseUsHeading: SectionHeading = {
  title: 'Why Choose Us',
  subtitle:
    'We guide you through every step of your journey to parenthood with clarity, care, and expertise.',
};

export const whyChooseUsCards: readonly IconCard[] = [
  {
    title: 'Trusted Global Network',
    description:
      'Work with carefully vetted clinics, legal experts, and agencies across the U.S., ensuring every step meets the highest standards of care and compliance.',
    icon: { src: whyNetworkIconUrl, alt: '', width: 70, height: 70 },
  },
  {
    title: 'Seamless End-to-End Coordination',
    description:
      'From initial planning to post-birth arrangements, every step is thoughtfully coordinated to reduce complexity and give you peace of mind.',
    icon: { src: whyCoordinationIconUrl, alt: '', width: 70, height: 70 },
  },
  {
    title: 'Personalized & Discreet Service',
    description:
      'Every journey is tailored to your goals and preferences, with a strong focus on privacy, flexibility, and individualized support.',
    icon: { src: whyDiscreetIconUrl, alt: '', width: 70, height: 70 },
  },
];

export const servicesHeading: SectionHeading = {
  title: 'Our Services',
  subtitle: 'Comprehensive support for your international family building journey',
};

export const serviceCards: readonly ServiceCard[] = [
  {
    stage: 'Stage 1',
    title: 'Strategic\nConsultation',
    description:
      'Begin with a deep, personalized consultation to understand your goals, timeline, and preferences. Gain clear insight into your options, along with a tailored strategy designed around your needs.',
    ctaLabel: 'Learn More',
    icon: { src: serviceConsultationIconUrl, alt: '', width: 90, height: 90 },
  },
  {
    stage: 'Stage 2',
    title: 'Medical & Partner Coordination',
    description:
      'Connect you with trusted clinics, specialists, and agencies. Coordinate every step of the process, from medical procedures to surrogate matching with precision, discretion, and care.',
    ctaLabel: 'Learn More',
    icon: { src: serviceCoordinationIconUrl, alt: '', width: 90, height: 90 },
  },
  {
    stage: 'Stage 3',
    title: 'Concierge &\nPost-Birth Support',
    description:
      'Provide comprehensive, concierge-level support throughout your journey to the U.S., including travel, accommodation, dedicated in-person support, documentation, and post-birth arrangements.',
    ctaLabel: 'Learn More',
    icon: { src: serviceConciergeIconUrl, alt: '', width: 90, height: 90 },
  },
];

export const processHeading: SectionHeading = {
  title: 'Our Process',
  subtitle: 'A clear pathway to building your family',
};

export const processSteps: readonly ProcessStep[] = [
  {
    index: 1,
    title: 'Initial Consultation',
    description: 'Share your goals, preferences, and timeline in a private consultation.',
  },
  {
    index: 2,
    title: 'Strategy & Planning',
    description: 'Build a personalized strategy with clear priorities, partners, and next steps.',
  },
  {
    index: 3,
    title: 'Clinic & Partner Matching',
    description: 'Connect with carefully vetted clinics, specialists, and agencies.',
  },
  {
    index: 4,
    title: 'Medical Process',
    description: 'Coordinate procedures, timelines, and communication.',
  },
  {
    index: 5,
    title: 'Pregnancy & Preparation',
    description: 'Monitor progress and prepare for your journey to the U.S.',
  },
  {
    index: 6,
    title: 'Birth & Post-Birth Support',
    description: 'Manage documentation, logistics, and post-birth arrangements.',
  },
];

export const journeyHeading: SectionHeading = {
  title: 'Your Journey',
  subtitle: 'What your experience may look like, step by step',
};

export const journeySteps: readonly JourneyStep[] = [
  {
    index: 1,
    title: 'Starting with a Conversation',
    description:
      'It begins with a conversation - where you share your thoughts, your timing, and what feels right for you. From there, things start to feel clearer, with a path that actually makes sense for your life.',
  },
  {
    index: 2,
    title: 'Finding the Right Support',
    description:
      'You are introduced to trusted clinics and professionals, without having to search or compare everything on your own. Instead of navigating it alone, you have guidance on who to work with and what comes next.',
  },
  {
    index: 3,
    title: 'Moving Forward, Step by Step',
    description:
      'As the process begins, each step is carefully coordinated for you - appointments, timelines, and ongoing progress are consistently followed and managed. You are kept informed without having to track every detail yourself.',
  },
  {
    index: 4,
    title: 'Preparing for Your Time in the U.S.',
    description:
      'When the time comes to travel, the details are already in place - where you will stay, how things are arranged, and who will support you when you arrive.',
  },
  {
    index: 5,
    title: 'The Moment Everything Comes Together',
    description:
      'When your child is born, everything that once felt complex becomes very real, very simple. During your time in the U.S., ongoing support allows you to settle in comfortably, while documentation and next steps are managed in the background.',
  },
  {
    index: 6,
    title: 'After You Return Home',
    description:
      "Even after you leave the U.S., support doesn't end there. As your child grows, whether it's future education, relocation, or settling in the U.S., guidance remains available whenever you need it.",
  },
];

export const aboutContent: AboutContent = {
  title: 'About Aurora',
  paragraphs: [
    'Aurora International Family Advisory was founded to simplify one of the most complex and personal decisions in life: building a family across borders.',
    'The company was built with the understanding that no two journeys are the same, and that each decision carries both emotional and practical weight.',
    'We work closely with global intended parents to navigate every step of the process, connecting them with trusted clinics, specialists, and partners across the United States.',
    'From early planning to post-birth support, our role is to bring clarity, coordination, and consistency to a journey that can otherwise feel overwhelming.',
    'What sets us apart is not just access, but how everything is managed. Each case is approached with discretion, attention to detail, and a deep understanding of the unique needs of international clients.',
    'We believe this journey should feel guided, supported, and thoughtfully handled, so that our clients can focus on what truly matters.',
  ],
  testimonial: {
    quote:
      "I didn't want to manage every detail myself, and I didn't have to. Everything was handled in a way that felt organized and under control. I always knew where things stood, without having to spend time following up.",
    author: '- Mr. Cheung, HongKong',
  },
  image: {
    src: aboutConsultationUrl,
    alt: 'Aurora advisor meeting with intended parents',
    width: 1664,
    height: 2496,
  },
};

export const familyCtaContent: FamilyCtaContent = {
  title: 'Start Your Family\nJourney Today',
  subtitle: "We're here to guide you every step of the way",
  image: {
    src: familyJourneyCtaUrl,
    alt: 'Family walking together near the ocean',
    width: 4096,
    height: 2313,
  },
};

export const contactContent: ContactContent = {
  title: 'Contact Us',
  quote: '"A private consultation to explore your next step."',
  subtitle: 'Your journey deserves clarity, privacy, and thoughtful guidance.',
  intro:
    'A private consultation is the first step toward understanding your options and building a plan that feels right for you.',
  fields: [
    { id: 'full-name', label: 'Full Name', type: 'text' },
    { id: 'email', label: 'Email', type: 'email' },
    { id: 'phone', label: 'Phone/WhatsApp Number', type: 'tel' },
    { id: 'wechat', label: 'WeChat ID', type: 'text' },
  ],
  optionGroups: [
    {
      legend: 'Preferred way to connect',
      options: ['Email', 'Phone', 'WhatsApp', 'WeChat'],
    },
    {
      legend: 'What are you exploring',
      options: ['Fertility & IVF', 'Surrogacy', 'Not sure yet/Exploring options'],
    },
    {
      legend: 'Preferred timeline',
      options: ['Within 3 months', '3-6 months', '6-12 months', 'Just exploring'],
    },
    {
      legend: 'Where are you currently based',
      options: [
        'United States',
        'Mainland China',
        'Hong Kong',
        'Macao',
        'Taiwan',
        'Other Countries/Regions',
      ],
    },
  ],
  messageField: {
    id: 'situation',
    label: 'Tell us about your situation (Optional)',
    type: 'textarea',
  },
  submitLabel: 'Request a Private Consultation',
  informationTitle: 'Contact Information',
  methods: [
    {
      label: 'Email',
      value: 'xiaohanli814921189@gmail.com',
      icon: { src: contactMailIconUrl, alt: '', width: 44, height: 40 },
    },
    {
      label: 'WhatsApp',
      value: '+1 (212) 555-1234',
      icon: { src: contactWhatsappIconUrl, alt: '', width: 82, height: 82 },
    },
  ],
  privacyNote: 'Your information will be handled with complete discretion and confidentiality.',
};

export const footerContent: FooterContent = {
  logo: auroraLogo,
  tagline: 'Define Your Path to Parenthood\nPrivate·Secure·Effortless',
  columns: [
    {
      title: 'Quick Links',
      links: [
        { label: 'Home', href: '#home' },
        { label: 'About Us', href: '#about' },
        { label: 'Services', href: '#services' },
        { label: 'Process', href: '#process' },
        { label: 'Contact', href: '#contact' },
      ],
    },
    {
      title: 'Services',
      links: [
        { label: 'Fertility Consultation', href: '#services' },
        { label: 'Agency & Clinic Matching', href: '#services' },
        { label: 'VIP Concierge Service', href: '#services' },
      ],
    },
    {
      title: 'Contact Us',
      links: [
        { label: 'xiaohanli814921189@gmail.com', href: 'mailto:xiaohanli814921189@gmail.com' },
        { label: 'AuroraFamilyAdvisory', href: '#' },
        { label: '+1 (212) 555-1234', href: 'tel:+12125551234' },
      ],
    },
  ],
  copyright: '© 2026 Aurora International Family Advisory Inc. All rights reserved.',
};
