import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import {
  ArrowDownRight,
  Blocks,
  Bot,
  BriefcaseBusiness,
  Languages,
  Mail,
  MapPin,
  MoonStar,
  Phone,
  SunMedium,
  UserRound,
  X,
} from 'lucide-react'
import ReactMarkdown from 'react-markdown'
import { useTranslation } from 'react-i18next'

type Theme = 'light' | 'dark'

type ComparisonRow = {
  dimension: string
  v1: string
  v2: string
}

type AICard = {
  title: string
  desc: string
}

type Project = {
  key: string
  title: string
  role: string
  tag: string
  summary: string
  body: string
  detail: string
}

const navItems = [
  { key: 'hero', id: 'hero' },
  { key: 'works', id: 'works' },
  { key: 'compare', id: 'compare' },
  { key: 'ai', id: 'ai' },
  { key: 'contact', id: 'contact' },
] as const

const projectKeys = ['v1', 'v2', 'daijia'] as const

function App() {
  const { t, i18n } = useTranslation()
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === 'undefined') return 'light'
    const stored = window.localStorage.getItem('resume-theme') as Theme | null
    if (stored) return stored
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    window.localStorage.setItem('resume-theme', theme)
  }, [theme])

  useEffect(() => {
    document.body.style.overflow = selectedProject ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [selectedProject])

  const comparisonRows = t('comparisonRows', { returnObjects: true }) as ComparisonRow[]
  const aiCards = t('aiCards', { returnObjects: true }) as AICard[]
  const heroInsights = t('hero.insights', { returnObjects: true }) as AICard[]

  const projects = useMemo<Project[]>(
    () =>
      projectKeys.map((key) => ({
        key,
        title: t(`projects.${key}.title`),
        role: t(`projects.${key}.role`),
        tag: t(`projects.${key}.tag`),
        summary: t(`projects.${key}.summary`),
        body: t(`projects.${key}.body`),
        detail: t(`projects.${key}.detail`),
      })),
    [t],
  )

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] transition-colors duration-300 print:bg-white">
      <header className="sticky top-0 z-50 border-b border-[color:var(--line)] bg-[color:var(--surface)]/82 backdrop-blur-xl print:hidden">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 md:px-8">
          <a href="#hero" className="flex items-center gap-3 text-sm font-semibold tracking-[0.18em] text-[var(--accent)] uppercase">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[color:var(--line)] bg-[color:var(--surface-strong)] text-base tracking-normal">
              张
            </span>
            <span>{t('profile.brand')}</span>
          </a>
          <nav className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => (
              <a key={item.id} href={`#${item.id}`} className="text-sm text-[var(--muted)] transition hover:text-[var(--text)]">
                {t(`nav.${item.key}`)}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => i18n.changeLanguage(i18n.language === 'zh' ? 'en' : 'zh')}
              className="inline-flex items-center gap-2 rounded-full border border-[color:var(--line)] px-3 py-2 text-sm text-[var(--muted)] transition hover:border-[color:var(--line-strong)] hover:text-[var(--text)]"
            >
              <Languages className="h-4 w-4" />
              {t('labels.switchLanguage')}
            </button>
            <button
              type="button"
              onClick={() => setTheme((current) => (current === 'light' ? 'dark' : 'light'))}
              className="inline-flex items-center gap-2 rounded-full border border-[color:var(--line)] px-3 py-2 text-sm text-[var(--muted)] transition hover:border-[color:var(--line-strong)] hover:text-[var(--text)]"
              aria-label="toggle theme"
            >
              {theme === 'light' ? <MoonStar className="h-4 w-4" /> : <SunMedium className="h-4 w-4" />}
              {theme === 'light' ? t('labels.dark') : t('labels.light')}
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-6 md:px-8 md:py-8 print:max-w-none print:gap-4 print:px-0 print:py-0">
        <motion.section
          id="hero"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="relative overflow-hidden rounded-[2rem] border border-[color:var(--line)] bg-[linear-gradient(145deg,rgba(255,253,249,0.99)_0%,rgba(248,242,234,0.96)_55%,rgba(239,232,223,0.92)_100%)] shadow-[var(--shadow)] dark:bg-[linear-gradient(145deg,rgba(24,26,25,0.98)_0%,rgba(19,21,20,0.96)_55%,rgba(16,17,16,0.94)_100%)] print:rounded-none print:border print:shadow-none"
        >
          <motion.div
            className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-[rgba(164,104,69,0.16)] blur-3xl dark:bg-[rgba(164,104,69,0.08)]"
            animate={{ y: [0, 16, 0], scale: [1, 1.04, 1] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute right-0 top-8 h-72 w-72 rounded-full bg-[rgba(33,54,44,0.14)] blur-3xl dark:bg-[rgba(219,232,224,0.07)]"
            animate={{ y: [0, -14, 0], scale: [1, 1.03, 1] }}
            transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.55),transparent_45%)] opacity-75 dark:opacity-10"
            animate={{ opacity: [0.72, 0.88, 0.72] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />

          <div className="relative z-10 grid gap-10 p-8 md:grid-cols-[minmax(0,1fr)_340px] md:p-12 print:grid-cols-1 print:p-8">
            <div>
              <span className="inline-flex rounded-full bg-[color:var(--accent-soft)] px-4 py-2 text-xs font-semibold tracking-[0.24em] text-[var(--accent)] uppercase">
                {t('hero.eyebrow')}
              </span>
              <h1 className="mt-7 font-serif text-[3.4rem] leading-[0.9] tracking-[-0.08em] md:text-[5.8rem] lg:text-[6.8rem] print:text-[3.2rem]">
                {t('profile.name')}
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-[var(--accent)] md:text-2xl md:leading-10 print:text-base print:leading-7">
                {t('hero.title')}
              </p>
              <p className="mt-5 max-w-4xl text-base leading-8 text-[var(--text)] md:text-xl md:leading-9 print:text-base print:leading-7">
                {t('hero.subtitle')}
              </p>
              <p className="mt-6 max-w-4xl text-base leading-8 text-[var(--muted)] print:text-sm print:leading-7">
                {t('hero.summary')}
              </p>

              <div className="mt-8 flex flex-wrap gap-3 text-sm print:hidden">
                {[
                  { icon: <Phone className="h-4 w-4" />, label: '13172918902' },
                  { icon: <WeChatIcon className="h-4 w-4" />, label: 'zzzsrzsepsnd' },
                  { icon: <Mail className="h-4 w-4" />, label: '1278511339@qq.com' },
                  { icon: <MapPin className="h-4 w-4" />, label: '广东清远' },
                ].map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.22 + index * 0.05, duration: 0.42 }}
                    whileHover={{ y: -3, scale: 1.01 }}
                  >
                    <QuickChip icon={item.icon} label={item.label} />
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="mt-8 flex flex-wrap gap-3 print:hidden"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.45 }}
              >
                <a href="#works" className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:translate-y-[-1px] dark:bg-[#f6f0e8] dark:text-[#15231c] dark:hover:bg-white">
                  {t('hero.primary')}
                  <ArrowDownRight className="h-4 w-4" />
                </a>
                <a href="#compare" className="inline-flex items-center gap-2 rounded-full border border-[color:var(--line-strong)] px-5 py-3 text-sm font-medium text-[var(--text)] transition hover:bg-[color:var(--accent-soft)]">
                  {t('hero.secondary')}
                </a>
              </motion.div>
            </div>

            <div className="grid gap-4 self-start print:hidden">
              {heroInsights.map((item, index) => {
                const icon = [
                  <BriefcaseBusiness className="h-5 w-5" key="role" />,
                  <Blocks className="h-5 w-5" key="roles" />,
                  <Bot className="h-5 w-5" key="ai" />,
                ][index]

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: 18 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.18 + index * 0.08, duration: 0.45 }}
                    whileHover={{ y: -4 }}
                  >
                    <HeroInsightCard icon={icon} title={item.title} desc={item.desc} />
                  </motion.div>
                )
              })}
            </div>
          </div>
        </motion.section>

        <SectionHeader id="works" kicker={t('works.kicker')} title={t('works.title')} intro={t('works.intro')} />
        <section className="grid gap-5 lg:grid-cols-3 print:grid-cols-1">
          {projects.map((project, index) => (
            <motion.article
              key={project.key}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: index * 0.08, duration: 0.45 }}
              className="group flex h-full flex-col rounded-[1.8rem] border border-[color:var(--line)] bg-[color:var(--surface-strong)] p-6 shadow-[var(--shadow)] transition hover:-translate-y-1 hover:border-[color:var(--line-strong)] print:break-inside-avoid print:shadow-none"
            >
              <div className="mb-5 flex items-start justify-between gap-4">
                <div>
                  <span className="inline-flex rounded-full bg-[color:var(--accent-soft)] px-3 py-1 text-xs font-semibold tracking-[0.16em] text-[var(--accent)] uppercase">
                    {project.tag}
                  </span>
                  <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em]">{project.title}</h3>
                </div>
                <span className="text-sm text-[var(--muted)]">0{index + 1}</span>
              </div>
              <p className="mb-4 text-sm text-[var(--warm)]">{project.role}</p>
              <p className="mb-5 text-sm leading-7 text-[var(--muted)]">{project.summary}</p>
              <div className="prose prose-neutral max-w-none flex-1 text-sm leading-7 prose-headings:mb-2 prose-headings:mt-4 prose-headings:text-base prose-headings:font-semibold prose-headings:text-[var(--text)] prose-p:text-[var(--muted)] prose-li:text-[var(--muted)] dark:prose-invert">
                <SummaryMarkdown>{project.body}</SummaryMarkdown>
              </div>
              <button
                type="button"
                onClick={() => setSelectedProject(project)}
                className="mt-6 inline-flex items-center gap-2 self-start rounded-full border border-[color:var(--line-strong)] px-4 py-2 text-sm font-medium text-[var(--text)] transition hover:bg-[color:var(--accent-soft)] print:hidden"
              >
                {t('works.viewDetail')}
                <ArrowDownRight className="h-4 w-4" />
              </button>
            </motion.article>
          ))}
        </section>

        <SectionHeader id="compare" kicker={t('compare.kicker')} title={t('compare.title')} intro={t('compare.intro')} />
        <section className="overflow-hidden rounded-[1.8rem] border border-[color:var(--line)] bg-[color:var(--surface-strong)] shadow-[var(--shadow)] print:shadow-none">
          <div className="hidden grid-cols-[0.9fr_1fr_1fr] border-b border-[color:var(--line)] bg-[color:var(--surface)] px-6 py-4 text-[0.95rem] font-semibold text-[var(--text)] md:grid">
            <div>{t('compare.columns.dimension')}</div>
            <div>{t('compare.columns.v1')}</div>
            <div>{t('compare.columns.v2')}</div>
          </div>
          <div className="divide-y divide-[color:var(--line)]">
            {comparisonRows.map((row, index) => (
              <motion.div
                key={row.dimension}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: index * 0.04, duration: 0.35 }}
                className="px-6 py-6 md:grid md:grid-cols-[0.9fr_1fr_1fr] md:gap-6"
              >
                <div className="mb-4 md:mb-0">
                  <div className="inline-flex rounded-full bg-[color:var(--accent-soft)] px-3 py-1 text-[11px] font-semibold tracking-[0.16em] text-[var(--accent)] uppercase md:hidden">
                    0{index + 1}
                  </div>
                  <h3 className="mt-3 text-base font-semibold tracking-[-0.02em] text-[var(--text)] md:mt-0 md:text-[1.05rem]">{row.dimension}</h3>
                </div>
                <CompareColumn label={t('compare.columns.v1')} value={row.v1} />
                <CompareColumn label={t('compare.columns.v2')} value={row.v2} emphasize />
              </motion.div>
            ))}
          </div>
        </section>

        <SectionHeader id="ai" kicker={t('ai.kicker')} title={t('ai.title')} intro={t('ai.intro')} />
        <section className="grid gap-5 md:grid-cols-3 print:grid-cols-3">
          {aiCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: index * 0.07, duration: 0.4 }}
              className="rounded-[1.6rem] border border-[color:var(--line)] bg-[color:var(--surface-strong)] p-6 shadow-[var(--shadow)] print:break-inside-avoid print:shadow-none"
            >
              <div className="mb-4 inline-flex rounded-full bg-[color:var(--accent-soft)] p-3 text-[var(--accent)]">
                <Bot className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-semibold tracking-[-0.04em] print:text-base">{card.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)] print:text-xs print:leading-6">{card.desc}</p>
            </motion.div>
          ))}
        </section>

        <SectionHeader id="contact" kicker={t('contact.kicker')} title={t('contact.title')} intro={t('contact.intro')} />
        <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-4 print:grid-cols-4">
          <ContactCard icon={<UserRound className="h-5 w-5" />} label={t('contact.name')} value={t('profile.name')} />
          <ContactCard icon={<Phone className="h-5 w-5" />} label={t('contact.phone')} value="13172918902" />
          <ContactCard icon={<WeChatIcon className="h-5 w-5" />} label={t('contact.wechat')} value="zzzsrzsepsnd" />
          <ContactCard icon={<MapPin className="h-5 w-5" />} label={t('contact.location')} value="广东清远" />
          <ContactCard icon={<Mail className="h-5 w-5" />} label={t('contact.email')} value="1278511339@qq.com" className="md:col-span-2 xl:col-span-4" />
        </section>
      </main>

      <AnimatePresence>
        {selectedProject ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/45 px-4 py-6 backdrop-blur-sm print:hidden"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 18, scale: 0.98 }}
              transition={{ duration: 0.24 }}
              onClick={(event) => event.stopPropagation()}
              className="mx-auto flex h-full max-w-4xl flex-col overflow-hidden rounded-[2rem] border border-white/15 bg-[color:var(--surface-strong)] shadow-2xl"
            >
              <div className="flex items-start justify-between gap-4 border-b border-[color:var(--line)] px-6 py-5 md:px-8">
                <div>
                  <span className="inline-flex rounded-full bg-[color:var(--accent-soft)] px-3 py-1 text-xs font-semibold tracking-[0.16em] text-[var(--accent)] uppercase">
                    {selectedProject.tag}
                  </span>
                  <h3 className="mt-4 text-3xl font-semibold tracking-[-0.05em]">{selectedProject.title}</h3>
                  <p className="mt-2 text-sm text-[var(--warm)]">{selectedProject.role}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--line)] text-[var(--muted)] transition hover:bg-[color:var(--accent-soft)] hover:text-[var(--text)]"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="overflow-y-auto px-6 py-6 md:px-8 md:py-8">
                <div className="prose prose-neutral max-w-none text-[15px] leading-8 prose-headings:text-[var(--text)] prose-headings:tracking-[-0.03em] prose-p:text-[var(--muted)] prose-li:text-[var(--muted)] dark:prose-invert">
                  <DetailMarkdown>{selectedProject.detail}</DetailMarkdown>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  )
}


function SectionHeader({
  id,
  kicker,
  title,
  intro,
}: {
  id: string
  kicker: string
  title: string
  intro: string
}) {
  return (
    <section id={id} className="rounded-[1.8rem] border border-[color:var(--line)] bg-[color:var(--surface)] px-6 py-7 shadow-[var(--shadow)] print:rounded-none print:shadow-none md:px-8">
      <p className="text-xs font-semibold tracking-[0.24em] text-[var(--accent)] uppercase">{kicker}</p>
      <div className="mt-3 space-y-4">
        <h2 className="font-serif text-[2.4rem] tracking-[-0.05em] whitespace-nowrap md:text-[3.1rem] print:text-2xl">{title}</h2>
        <p className="max-w-4xl text-sm leading-7 text-[var(--muted)] md:text-base print:text-xs print:leading-6">{intro}</p>
      </div>
    </section>
  )
}

function QuickChip({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--line)] bg-[color:var(--surface)]/72 px-4 py-2 text-sm text-[var(--muted)] backdrop-blur-sm">
      <span className="text-[var(--accent)]">{icon}</span>
      <span>{label}</span>
    </div>
  )
}

function WeChatIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M8.4 15.8c-3.1 0-5.4-2.1-5.4-4.9 0-2.7 2.4-4.9 5.4-4.9 3.1 0 5.5 2.2 5.5 4.9 0 .7-.2 1.3-.5 1.9l.7 2.3-2.3-.7c-.9.9-2.1 1.4-3.4 1.4Z" />
      <path d="M15.8 20c2.9 0 5.2-2 5.2-4.5S18.7 11 15.8 11c-2.8 0-5.1 2-5.1 4.5 0 .6.1 1.1.4 1.6l-.6 2 2-.6c.9.9 2 1.5 3.3 1.5Z" />
      <circle cx="6.7" cy="10.8" r=".9" fill="currentColor" stroke="none" />
      <circle cx="10.1" cy="10.8" r=".9" fill="currentColor" stroke="none" />
      <circle cx="14.3" cy="15.3" r=".9" fill="currentColor" stroke="none" />
      <circle cx="17.4" cy="15.3" r=".9" fill="currentColor" stroke="none" />
    </svg>
  )
}

function HeroInsightCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode
  title: string
  desc: string
}) {
  return (
    <div className="rounded-[1.5rem] border border-[color:var(--line)] bg-[color:var(--surface)]/88 p-5 backdrop-blur-sm">
      <div className="flex items-center gap-3 text-[var(--accent)]">
        {icon}
        <span className="text-sm font-semibold text-[var(--text)]">{title}</span>
      </div>
      <p className="mt-4 text-[0.98rem] leading-8 text-[var(--muted)]">{desc}</p>
    </div>
  )
}

function CompareColumn({
  label,
  value,
  emphasize = false,
}: {
  label: string
  value: string
  emphasize?: boolean
}) {
  return (
    <div className={`rounded-[1.25rem] border p-4 ${emphasize ? 'border-[color:var(--line-strong)] bg-[color:var(--accent-soft)]/55' : 'border-[color:var(--line)] bg-[color:var(--surface)]'} md:border-0 md:bg-transparent md:p-0`}>
      <p className="text-[11px] font-semibold tracking-[0.18em] text-[var(--accent)] uppercase md:hidden">{label}</p>
      <p className="mt-3 text-[0.96rem] leading-8 text-[var(--muted)] md:mt-0 md:text-[1rem]">{value}</p>
    </div>
  )
}

function SummaryMarkdown({ children }: { children: string }) {
  return (
    <div className="space-y-3 text-sm leading-7 text-[var(--muted)]">
      <ReactMarkdown
        components={{
          h3: ({ children }) => (
            <h4 className="mt-5 border-t border-[color:var(--line)] pt-4 text-[11px] font-semibold tracking-[0.18em] text-[var(--accent)] uppercase">
              {children}
            </h4>
          ),
          p: ({ children }) => <p className="text-sm leading-7 text-[var(--muted)]">{children}</p>,
          ul: ({ children }) => <ul className="space-y-2">{children}</ul>,
          li: ({ children }) => (
            <li className="flex gap-2 leading-7 text-[var(--muted)] before:mt-[11px] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[var(--accent)] before:content-['']">
              <span>{children}</span>
            </li>
          ),
        }}
      >
        {children}
      </ReactMarkdown>
    </div>
  )
}

function DetailMarkdown({ children }: { children: string }) {
  return (
    <ReactMarkdown
      components={{
        h2: ({ children }) => (
          <h2 className="mt-8 border-t border-[color:var(--line)] pt-5 text-[0.95rem] font-semibold tracking-[0.16em] text-[var(--accent)] uppercase first:mt-0 first:border-0 first:pt-0">
            {children}
          </h2>
        ),
        h3: ({ children }) => <h3 className="mt-6 text-lg font-semibold tracking-[-0.02em] text-[var(--text)]">{children}</h3>,
        p: ({ children }) => <p className="text-[15px] leading-8 text-[var(--muted)]">{children}</p>,
        ul: ({ children }) => <ul className="space-y-3">{children}</ul>,
        li: ({ children }) => (
          <li className="flex gap-3 leading-8 text-[var(--muted)] before:mt-[12px] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[var(--accent)] before:content-['']">
            <span>{children}</span>
          </li>
        ),
      }}
    >
      {children}
    </ReactMarkdown>
  )
}

function ContactCard({
  icon,
  label,
  value,
  className = '',
}: {
  icon: React.ReactNode
  label: string
  value: string
  className?: string
}) {
  return (
    <div className={`rounded-[1.5rem] border border-[color:var(--line)] bg-[color:var(--surface-strong)] p-6 shadow-[var(--shadow)] print:shadow-none ${className}`}>
      <div className="flex items-center gap-3 text-[var(--accent)]">
        {icon}
        <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--muted)]">{label}</span>
      </div>
      <p className="mt-5 break-all text-base font-medium text-[var(--text)] print:text-sm">{value}</p>
    </div>
  )
}

export default App
