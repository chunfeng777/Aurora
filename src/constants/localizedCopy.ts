interface CardCopy {
  readonly title: string;
  readonly description: string;
}

interface ServiceCardCopy extends CardCopy {
  readonly stage: string;
  readonly ctaLabel: string;
}

interface SiteCopy {
  readonly navLabels: readonly string[];
  readonly hero: {
    readonly eyebrow: string;
    readonly title: string;
    readonly subtitle: string;
    readonly ctaLabel: string;
    readonly scrollLabel: string;
  };
  readonly whyHeading: { readonly title: string; readonly subtitle: string };
  readonly whyCards: readonly CardCopy[];
  readonly servicesHeading: { readonly title: string; readonly subtitle: string };
  readonly serviceCards: readonly ServiceCardCopy[];
  readonly processHeading: { readonly title: string; readonly subtitle: string };
  readonly processSteps: readonly CardCopy[];
  readonly processCtaLabel: string;
  readonly journeyHeading: { readonly title: string; readonly subtitle: string };
  readonly journeySteps: readonly CardCopy[];
  readonly journeyClosing: string;
  readonly journeyCtaLabel: string;
  readonly about: {
    readonly title: string;
    readonly paragraphs: readonly string[];
    readonly quote: string;
    readonly author: string;
    readonly imageAlt: string;
  };
  readonly familyCta: {
    readonly title: string;
    readonly subtitle: string;
    readonly imageAlt: string;
  };
  readonly contact: {
    readonly title: string;
    readonly quote: string;
    readonly subtitle: string;
    readonly intro: string;
    readonly fieldLabels: readonly string[];
    readonly optionGroups: readonly {
      readonly legend: string;
      readonly options: readonly string[];
    }[];
    readonly messageLabel: string;
    readonly submitLabel: string;
    readonly informationTitle: string;
    readonly methodLabels: readonly string[];
    readonly methodValues: readonly string[];
    readonly privacyNote: string;
  };
  readonly footer: {
    readonly tagline: string;
    readonly columnTitles: readonly string[];
    readonly linkLabels: readonly (readonly string[])[];
    readonly copyright: string;
  };
}

export const zhCopy: SiteCopy = {
  navLabels: ['首页', '关于我们', '服务内容', '服务流程', '联系我们'],
  hero: {
    eyebrow: '你的家庭，由你定义\n私密托付 · 安全无忧 · 全程省心',
    title: 'Aurora International\nFamily Advisory',
    subtitle: '甄选美国优质专业资源，陪伴全球家庭实现生育梦想。',
    ctaLabel: '预约专属咨询',
    scrollLabel: '向下滚动',
  },
  whyHeading: {
    title: '为什么选择我们',
    subtitle: '从最初规划到迎接新生命，我们始终以清晰的指引、专业的支持与细致的陪伴，陪您走过每一步。',
  },
  whyCards: [
    {
      title: '严选美国优质合作资源',
      description: '整合美国优质医疗、法律及专业服务资源，为您的每一个重要决定提供可靠支持。',
    },
    {
      title: '一站式流程管理',
      description: '统筹从前期规划到后续落地执行的关键环节，衔接多方流程，让复杂事项有序推进，为您节省时间与精力。',
    },
    {
      title: '专属服务体验',
      description: '尊重您的时间、隐私与个人规划，为您提供真正契合需求的专属服务。',
    },
  ],
  servicesHeading: {
    title: '我们的服务',
    subtitle: '根据不同阶段的需求，提供专业、系统、持续的服务支持。',
  },
  serviceCards: [
    {
      stage: '第一阶段',
      title: '专属咨询与路径规划',
      description: '围绕您的目标、规划与个人需求展开深入沟通，帮助您全面了解不同选择，并制定清晰、可执行的整体方案。',
      ctaLabel: '了解更多',
    },
    {
      stage: '第二阶段',
      title: '资源对接与全程协调',
      description: '根据您的专属方案匹配合适的诊所、专家及专业机构，全程协调医疗流程及合作事宜，让您无需为细节分心。',
      ctaLabel: '了解更多',
    },
    {
      stage: '第三阶段',
      title: '落地服务与后续支持',
      description: '陪伴您顺利完成赴美期间的各项事务，统筹生活支持、文件办理及后续协调，让您安心迎接新生命。',
      ctaLabel: '了解更多',
    },
  ],
  processHeading: {
    title: '服务流程',
    subtitle: '清晰规划您的家庭之路',
  },
  processSteps: [
    { title: '明确目标规划', description: '全面了解您的目标、规划及时间安排，帮助您梳理适合自己的方向。' },
    { title: '开启专属方案', description: '结合沟通结果，制定专属服务方案，并与您共同确认后续服务计划。' },
    { title: '匹配专业资源', description: '根据专属方案，匹配合适的诊所、专家及专业机构。' },
    { title: '推进医疗流程', description: '统筹医疗流程，协调各项关键节点，确保每一步顺利推进。' },
    { title: '跟进孕期进展', description: '持续跟进孕期进展，同步重要信息，并协助完成赴美前的各项准备。' },
    { title: '迎接家庭新章', description: '协助完成证件办理及后续安排，陪伴您顺利开启家庭新篇章。' },
  ],
  processCtaLabel: '了解更多服务流程',
  journeyHeading: {
    title: '您的旅程',
    subtitle: '您的旅程，将这样展开。',
  },
  journeySteps: [
    {
      title: '从一次深入沟通开始',
      description: '一切都始于一次深入的交流。在这里，您可以分享对家庭的期待、未来的规划，以及最适合自己的时间安排。我们会认真倾听您的想法，与您一起梳理不同路径的可能性，帮助您找到真正适合自己的方向，为接下来的每一步做好准备。',
    },
    {
      title: '找到适合您的专业团队',
      description: '当方向逐渐清晰，我们会根据您的专属方案，匹配合适的诊所、专家及专业机构，并帮助您了解不同选择之间的差异与优势。不必反复比较，也无需独自面对复杂的信息，我们会陪伴您完成每一个重要决定，让选择变得更加从容。',
    },
    {
      title: '稳步推进每一个阶段',
      description: '随着流程正式开始，每一个关键节点都会有人持续跟进。从医疗流程、时间安排到多方沟通，我们都会提前统筹与协调，确保整个过程有序推进。您无需反复追踪每一个细节，却始终清楚了解每一步的最新进展。',
    },
    {
      title: '迎接赴美的重要时刻',
      description: '当赴美的日子临近，大部分准备工作都已提前安排妥当。从行程规划、住宿安排到抵达后的生活支持，每一个细节都会提前落实。当您踏上美国的那一刻，不需要匆忙适应，而是能够安心迎接人生中最重要的时刻。',
    },
    {
      title: '迎来梦想成真的时刻',
      description: '当孩子出生的那一刻，曾经漫长的等待终于成为现实。在您陪伴孩子迎接新生活的同时，我们也会持续协助完成证件办理、美国期间的生活协调及后续各项安排，让您能够把更多时间留给真正重要的人。',
    },
    {
      title: '回归生活，陪伴依旧',
      description: '即使离开美国，我们的陪伴也不会因此结束。随着孩子成长，无论是未来赴美求学、置业安家，还是其他跨境生活规划，当您需要帮助时，我们依然会为您提供专业支持，陪伴您的家庭迎接未来每一个重要阶段。',
    },
  ],
  journeyClosing: '每一步，都有清晰透明的指引与贴心陪伴。',
  journeyCtaLabel: '开启您的旅程',
  about: {
    title: '关于 Aurora',
    paragraphs: [
      '我们始终相信，建立一个家庭，不应该因为地域、信息或流程，而变得遥不可及。',
      '每一个家庭都有属于自己的故事，也没有任何两段旅程会完全相同。每一次选择，都承载着情感、现实与未来，因此值得被认真倾听，也值得拥有真正适合自己的解决方案。',
      'Aurora International Family Advisory 正是在这样的理念下创立。我们希望通过专业的咨询、可靠的资源以及全程的陪伴，让复杂的跨境家庭规划变得更加清晰、有序，也让客户能够把更多时间与心力，留给真正重要的人与事。',
      '我们关注的不只是流程能否顺利完成，更在意整个过程是否足够安心、从容。每一个案例，我们都以尊重、谨慎的态度，认真、负责地对待。因为我们知道，这不仅是一项服务，更是一个家庭重要的新篇章。',
      '我们希望，这段旅程始终有人陪伴、有人支持，也有人替您妥善处理每一个细节，让您能够专注于真正重要的人与事。',
    ],
    quote: '其实我最看重的是省心。对我来说，时间比钱更紧要。很多事情他们都会提前安排好，我不用一直去跟，也不用自己协调来协调去。每个阶段都会有人主动告诉我做到哪一步、接下来会怎么安排，所以我一直都很放心。',
    author: '— 张先生，香港',
    imageAlt: 'Aurora 顾问与客户进行咨询',
  },
  familyCta: {
    title: '今天，开启您的\n家庭旅程',
    subtitle: '我们将陪伴您走过每一步',
    imageAlt: '一家人在海边相伴前行',
  },
  contact: {
    title: '联系我们',
    quote: '“每一份期待，都值得被认真倾听；每一个重要决定，都值得从一次专属咨询开始。”',
    subtitle: '无论您来自哪里，我们都期待与您相遇，陪伴您开启这段旅程。',
    intro: '准备好迈出下一步了吗？预约一次专属咨询。',
    fieldLabels: ['姓名', '邮箱', '联系电话 / WhatsApp', '微信号'],
    optionGroups: [
      { legend: '希望通过哪种方式与您联系？（可多选）', options: ['邮箱', '手机', 'WhatsApp', '微信'] },
      { legend: '您目前希望了解哪些服务？（单选）', options: ['生育咨询与试管（IVF）', '代孕', '暂未确定，希望先了解不同方案'] },
      { legend: '您计划什么时候开启方案？', options: ['3个月内', '3–6个月', '6–12个月', '目前仍在了解阶段'] },
      { legend: '您目前的主要居住地（可多选）', options: ['美国', '中国大陆', '中国香港', '澳门', '台湾地区', '其他国家或地区'] },
    ],
    messageLabel: '欢迎告诉我们更多关于您的情况（选填）',
    submitLabel: '预约专属咨询',
    informationTitle: '联系我们',
    methodLabels: ['邮箱', 'WhatsApp'],
    methodValues: ['info@auroraifa.com', '765-881-0394'],
    privacyNote: '我们尊重每一位客户的隐私，您提供的所有信息都将严格保密，并仅用于本次咨询。',
  },
  footer: {
    tagline: '你的家庭，由你定义\n私密托付 · 安全无忧 · 全程省心',
    columnTitles: ['快速导航', '服务内容', '联系我们'],
    linkLabels: [
      ['首页', '关于我们', '服务内容', '服务流程', '联系我们'],
      ['生育咨询与试管', '资源与诊所匹配', '专属礼宾服务'],
      ['info@auroraifa.com', 'AuroraFamilyAdvisory', '765-881-0394'],
    ],
    copyright: '© 2025 Aurora International Family Advisory. 保留所有权利。',
  },
};
