import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  zh: {
    translation: {
      profile: {
        brand: '张欣杰 · 产品作品集',
        name: '张欣杰',
      },
      nav: {
        hero: '首页',
        works: '作品',
        compare: 'V1 / V2 对比',
        ai: 'AI 协同',
        contact: '联系',
      },
      hero: {
        eyebrow: 'Product Portfolio',
        title: '产品经理 / AI 协同设计',
        subtitle: '聚焦复杂 B 端业务流程、状态机设计与规则治理，持续用 AI 提升方案输出、文档沉淀与联调效率。',
        summary:
          '作品集主要呈现三段真实产品经历：利众客户速录 V1.0 用于验证扫码获客与咨询链路，V2.0 聚焦资料结构、状态流转与客服操单的系统升级，代驾平台则体现我在既有业务中参与功能迭代、体验优化与运营支持。',
        primary: '查看作品',
        secondary: '查看 V1 / V2 对比',
        stats: {
          role: '角色定位',
          roleValue: '产品经理',
          style: '工作方式',
          styleValue: '产品主导 + AI 协同',
          focus: '核心关注',
          focusValue: 'B 端流程 / 状态机 / 多角色协同',
          location: '工作地',
        },
        insights: [
          {
            title: '复杂流程设计',
            desc: '从客户进入、资料提交、线索分配到客服结单，重点是把流程节点和协作关系设计清楚。',
          },
          {
            title: '多角色协同产品',
            desc: '持续围绕平台管理员、企业、客服、合作商与客户等多角色关系设计规则与协作机制。',
          },
          {
            title: 'AI 协同工作流',
            desc: '把 AI 用在需求拆解、流程建模、问题定位和文档沉淀，而不是只把它当提示词工具。',
          },
        ],
      },
      works: {
        kicker: 'Selected Works',
        title: '作品区',
        intro: '项目区不只展示功能，而是强调背景、责任、结果和设计取舍。每个项目都可以展开查看更完整的产品思路。',
        viewDetail: '查看详情',
      },
      compare: {
        kicker: 'Version Evolution',
        title: 'V1 与 V2 的升级关系',
        intro: 'V1 的价值在于快速验证获客链路，V2 的价值在于把链路做细、做稳、做成可治理的产品系统。',
        columns: {
          dimension: '维度',
          v1: 'V1.0',
          v2: 'V2.0',
        },
      },
      ai: {
        kicker: 'AI Workflow',
        title: 'AI 协同工作方式',
        intro: '这里强调的不是“会用提示词”，而是把 AI 作为产品工作流的一部分：需求拆解、流程建模、边界 case 推演、文档输出和联调问题定位。',
      },
      contact: {
        kicker: 'Contact',
        title: '联系',
        intro: '当前版本已替换为真实联系信息。',
        name: '姓名',
        phone: '手机',
        email: '邮箱',
        wechat: '微信',
        location: '地点',
        locationValue: '广东清远',
      },
      projects: {
        v1: {
          title: '利众客户速录 V1.0',
          role: '产品经理',
          tag: '验证链路成立',
          summary: '一套为早期业务快速上线的客户留资与客服跟进系统，重点是先验证扫码获客和贷款咨询链路能否成立。',
          body: '### 项目背景\n业务早期需要快速上线一套客户留资与客服跟进系统，优先验证扫码获客和贷款咨询链路是否成立。\n\n### 项目结果\n- 初版上线后，日均可带来 1-3 个新增客户咨询\n- 验证了业务方向和基础获客链路的有效性\n\n### 后续升级方向\n- 客户资料结构更细\n- 状态流转更清晰\n- 客服操单闭环更完整\n- 业务过程更可追踪',
          detail: '## 项目定位\n利众客户速录 V1.0 是一个偏 MVP 的业务验证型项目，目标不是一次性把系统做重，而是先让“扫码进来 -> 提交资料 -> 客服跟进 -> 结果反馈”这条链路跑起来。\n\n## 我关注的核心问题\n- 用户是否愿意通过扫码方式进入咨询页\n- 基础留资链路是否足够顺滑\n- 客服是否能基于现有信息完成最基础的跟进\n\n## 产品价值\n- 用较轻的流程快速搭建业务可用版本\n- 验证获客方式和咨询转化链路是否有效\n- 为后续 V2 的结构化升级提供真实业务反馈\n\n## 为什么要升级到 V2\n在 V1 中，状态语义、资料层次和客服操单可见性都比较粗。随着业务从“先上线”进入“要把过程做细”的阶段，就需要 V2 来承接精细化运营。',
        },
        v2: {
          title: '利众客户速录 V2.0',
          role: '产品经理',
          tag: '精细化升级',
          summary: '围绕客户资料结构、状态流转、客服操单闭环和业务可追踪性进行升级，把初版系统重构成更完整的 B 端产品方案。',
          body: '### 项目背景\n企业获客、客户留资、线索分配与客服跟进流程较为分散，缺少统一的业务闭环与清晰的状态流转机制。\n\n### 项目责任\n- 设计客户资料提交、公共池分配、评估回传、电话跟进及成交/未成交结单等核心流程\n- 梳理多角色协同关系和复杂规则\n- 结合 AI 辅助完成需求拆解、流程推演、边界场景分析和文档沉淀\n\n### 项目结果\n完成从客户进入到客服结单的完整产品方案设计并推动落地，提升了业务规则清晰度、流程可执行性及复杂方案的设计迭代效率。',
          detail: '## 项目定位\nV2 不是简单加功能，而是对原有业务流程做结构性重构。重点在于把“资料完整度”“申请主状态”“客服动作记录”拆开治理，让产品逻辑和一线使用感受都更清晰。\n\n## 我负责的核心工作\n- 梳理平台管理员、企业账号、管理员、客服、合作商、客户之间的角色关系\n- 设计客户从扫码进入到客服结单的完整流程\n- 设计公共池分配、客户资料两步提交、评估回传、电话联系、已成交/未成交结单等关键环节\n- 把 AI 用在需求拆解、流程建模、边界场景推演和规则文档沉淀中\n\n## 升级重点\n- 客户资料从单层变为基础资料 + 进阶资料\n- 状态模型从粗粒度升级为更清晰的主状态与动作记录\n- 客服流程从“记录工具”往“辅助操单工具”方向靠近\n- 强化日志、规则、治理和可追踪性\n\n## 最终价值\nV2 提升的不只是页面数量，而是系统清晰度、业务可执行性和后续扩展空间。',
        },
        daijia: {
          title: '利众代驾平台',
          role: '产品经理',
          tag: '参与式迭代',
          summary: '面向清远本地代驾场景的线上化平台，我参与部分功能设计、UI 调整、数据整理分析和运营物料设计。',
          body: '### 项目背景\n面向清远本地代驾服务场景，平台覆盖用户端、司机端与后台管理端，用于支撑本地代驾业务的线上化运营。\n\n### 项目责任\n- 参与平台部分功能设计与迭代\n- 负责页面 UI 优化、业务数据整理分析及部分运营物料设计\n- 支持司机管理、订单中心、调度中心等模块的持续完善\n\n### 项目结果\n支持代驾平台功能优化与运营协同，提升了部分页面体验、数据整理效率及项目日常运营支持能力。',
          detail: '## 项目定位\n这个项目不是从 0 到 1 主导搭建，而是我在既有业务基础上，参与部分功能和体验层的持续优化。\n\n## 我主要负责的内容\n- 页面 UI 细节优化\n- 业务数据的整理与分析支持\n- 部分运营物料设计\n- 协助推进司机管理、订单中心、调度中心等模块的产品迭代\n\n## 这段经历体现的能力\n- 在成熟业务中参与迭代，而不只是从零设计\n- 兼顾产品、页面体验、数据整理和运营支持\n- 能在局部职责范围内稳定推动优化落地',
        },
      },
      comparisonRows: [
        {
          dimension: '目标',
          v1: '快速验证扫码获客与咨询链路是否成立',
          v2: '在已验证链路基础上提升精细化运营能力',
        },
        {
          dimension: '资料结构',
          v1: '客户资料结构较轻，先满足快速上线',
          v2: '基础资料与进阶资料拆分，支持草稿与补充策略',
        },
        {
          dimension: '状态模型',
          v1: '状态较粗，强调流程跑通',
          v2: '资料完整度、申请主状态、客服动作分层治理',
        },
        {
          dimension: '客服操单',
          v1: '满足基础跟进与结单',
          v2: '引入评估中、评估价已出、电话联系、结构化结单等机制',
        },
        {
          dimension: '系统治理',
          v1: '偏 MVP',
          v2: '强调日志快照、规则清晰度、可追踪性与扩展性',
        },
      ],
      aiCards: [
        {
          title: '需求拆解',
          desc: '把零散诉求整理成模块、状态、条件和边界，避免方案只停留在页面层。',
        },
        {
          title: '流程推演',
          desc: '围绕多角色链路预判异常场景，提前发现重复建单、错归属、状态冲突等问题。',
        },
        {
          title: '文档与联调',
          desc: '持续用 AI 整理规则文档、统一表达口径，并辅助定位联调问题。',
        },
      ],
      labels: {
        switchLanguage: 'EN',
        dark: '深色',
        light: '浅色',
      },
    },
  },
  en: {
    translation: {
      profile: {
        brand: 'Zhang Xinjie · Portfolio',
        name: 'Zhang Xinjie',
      },
      nav: {
        hero: 'Home',
        works: 'Works',
        compare: 'V1 / V2',
        ai: 'AI Workflow',
        contact: 'Contact',
      },
      hero: {
        eyebrow: 'Product Portfolio',
        title: 'Product Manager / AI Collaboration',
        subtitle: 'Focused on complex B2B workflows, state models, and rule design, while using AI to improve output quality, documentation, and iteration speed.',
        summary:
          'The portfolio centers on three real product experiences: Quick Capture V1.0 validated QR-based acquisition and consultation, V2.0 redesigned data structure, state transitions, and service workflow, and the chauffeur platform reflects my contribution to iterative feature work, UI refinement, and operational support.',
        primary: 'View Works',
        secondary: 'See V1 / V2 Comparison',
        stats: {
          role: 'Role',
          roleValue: 'Product Manager',
          style: 'Working Style',
          styleValue: 'Product-led + AI-assisted',
          focus: 'Core Focus',
          focusValue: 'B2B workflows / state models / multi-role systems',
          location: 'Location',
        },
        insights: [
          {
            title: 'Complex workflow design',
            desc: 'From customer entry and profile submission to lead assignment and service closure, the focus stays on clear handoffs and clean process nodes.',
          },
          {
            title: 'Multi-role product systems',
            desc: 'My work repeatedly involves platform admins, enterprises, service teams, cooperators, and customers with different goals and permissions.',
          },
          {
            title: 'AI as part of the workflow',
            desc: 'AI is used for decomposition, workflow modeling, issue isolation, and documentation instead of being treated as a prompt gimmick.',
          },
        ],
      },
      works: {
        kicker: 'Selected Works',
        title: 'Works',
        intro: 'Each project is framed around background, responsibility, outcome, and design trade-offs. You can open a fuller product narrative for each one.',
        viewDetail: 'View Details',
      },
      compare: {
        kicker: 'Version Evolution',
        title: 'How V2 builds on V1',
        intro: 'V1 proved the acquisition funnel. V2 turned that funnel into a more structured and governable operating system.',
        columns: {
          dimension: 'Dimension',
          v1: 'V1.0',
          v2: 'V2.0',
        },
      },
      ai: {
        kicker: 'AI Workflow',
        title: 'How AI fits into my product workflow',
        intro: 'The emphasis here is not prompt tricks. AI is embedded in requirement decomposition, workflow modeling, edge-case reasoning, documentation, and integration debugging.',
      },
      contact: {
        kicker: 'Contact',
        title: 'Contact',
        intro: 'Current version uses real contact details.',
        name: 'Name',
        phone: 'Phone',
        email: 'Email',
        wechat: 'WeChat',
        location: 'Location',
        locationValue: 'Qingyuan, Guangdong',
      },
      projects: {
        v1: {
          title: 'Lizhong Quick Capture V1.0',
          role: 'Product Manager',
          tag: 'Validate the funnel',
          summary: 'An MVP-oriented lead capture and service-follow-up product built to quickly validate whether QR-based acquisition and consultation could work.',
          body: '### Background\nAn early-stage version was needed to quickly validate whether QR-based lead capture and loan consultation could work as a viable customer funnel.\n\n### Result\n- Delivered a working MVP that brought 1-3 new inquiries per day\n- Validated the business direction and the acquisition funnel\n\n### Why V2\n- Finer-grained customer data structure\n- Clearer state transitions\n- Better customer service workflow\n- Stronger process traceability',
          detail: '## Positioning\nV1 was a business-validation product. The goal was not to make the system heavy from day one, but to prove that the path from QR scan to consultation and service handling could work.\n\n## Core questions\n- Would users enter through QR scanning?\n- Would the lightweight submission flow be smooth enough?\n- Could customer service handle follow-up based on minimal input?\n\n## Value\n- Delivered a lightweight but usable business version quickly\n- Validated the acquisition method and consultation funnel\n- Generated the real operational feedback needed for V2',
        },
        v2: {
          title: 'Lizhong Quick Capture V2.0',
          role: 'Product Manager',
          tag: 'Operational refinement',
          summary: 'A structural upgrade focused on customer data, state transitions, customer-service workflows, and traceability, turning the MVP into a clearer B2B product system.',
          body: '### Background\nLead capture, customer submission, assignment, and follow-up were fragmented and lacked a unified closed-loop process and a clear state model.\n\n### Responsibility\n- Designed key flows for data submission, pool assignment, quote return, phone follow-up, and deal success / failure\n- Structured multi-role collaboration and rule systems\n- Used AI for decomposition, workflow reasoning, edge-case analysis, and documentation\n\n### Result\nDelivered and pushed forward a complete product solution from customer entry to service closure, improving rule clarity, operability, and iteration efficiency for a complex B2B system.',
          detail: '## Positioning\nV2 was not just feature expansion. It was a structural redesign of the original business workflow. The key was to separate profile completeness, application stage, and service action records so the system became clearer both logically and operationally.\n\n## My responsibilities\n- Mapped multi-role relationships across platform admin, enterprise, manager, customer service, cooperator, and customer\n- Designed the full journey from customer entry to service closure\n- Defined flows for submission, pool assignment, quote return, phone follow-up, and structured closure\n- Used AI for requirement decomposition, workflow reasoning, edge-case analysis, and documentation\n\n## Outcome\nThe result was a more governable system with clearer rules, better operator understanding, and stronger extensibility.',
        },
        daijia: {
          title: 'Lizhong Chauffeur Platform',
          role: 'Product Manager',
          tag: 'Iterative contribution',
          summary: 'A local chauffeur-service platform where I contributed to selected features, UI improvements, data organization, and operational materials.',
          body: '### Background\nA local chauffeur-service platform for Qingyuan, covering user app, driver app, and backend operations.\n\n### Responsibility\n- Contributed to selected feature iterations\n- Improved page UI, organized business data, and designed operational materials\n- Supported ongoing refinement of driver management, order center, and dispatch center\n\n### Result\nSupported product optimization and operations alignment, improving page usability, data organization efficiency, and routine operational support.',
          detail: '## Positioning\nThis project was not a full 0-to-1 product led entirely by me. My contribution sat within an existing operational product, focused on improving selected functions and supporting the team with product, UI, and data work.\n\n## Main contributions\n- UI refinements on selected pages\n- Business data organization and analysis support\n- Operational material design\n- Support for iterative refinement of driver management, order center, and dispatch center\n\n## What it demonstrates\n- Ability to contribute inside an existing product context, not only from scratch\n- Comfort working across product, interface polish, data support, and operations needs',
        },
      },
      comparisonRows: [
        {
          dimension: 'Goal',
          v1: 'Quickly validate the QR-to-consultation funnel',
          v2: 'Refine the validated funnel for stronger operations',
        },
        {
          dimension: 'Data model',
          v1: 'Lightweight structure for fast launch',
          v2: 'Split basic and advanced profiles with draft / completion logic',
        },
        {
          dimension: 'State model',
          v1: 'Coarse states optimized for speed',
          v2: 'Separated profile completeness, application stages, and service actions',
        },
        {
          dimension: 'Service workflow',
          v1: 'Basic follow-up and closure',
          v2: 'Added quoting, quote-ready, phone contact, and structured closure',
        },
        {
          dimension: 'Governance',
          v1: 'MVP-oriented',
          v2: 'Emphasis on logs, snapshots, clarity, traceability, and extensibility',
        },
      ],
      aiCards: [
        {
          title: 'Requirement Breakdown',
          desc: 'Turn fragmented asks into modules, states, conditions, and boundaries instead of stopping at UI ideas.',
        },
        {
          title: 'Workflow Reasoning',
          desc: 'Use AI to reason through multi-role edge cases early and surface structural risks.',
        },
        {
          title: 'Docs and Debugging',
          desc: 'Use AI to maintain rule docs, unify language, and speed up integration debugging.',
        },
      ],
      labels: {
        switchLanguage: '中',
        dark: 'Dark',
        light: 'Light',
      },
    },
  },
} as const

i18n.use(initReactI18next).init({
  resources,
  lng: 'zh',
  fallbackLng: 'zh',
  interpolation: { escapeValue: false },
})

export default i18n
