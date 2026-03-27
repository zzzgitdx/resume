import { AnimatePresence, motion } from 'motion/react'
import { X } from 'lucide-react'
import ReactMarkdown from 'react-markdown'

import type { Project } from '../portfolio-types'

type ProjectDetailModalProps = {
  isMobile: boolean
  project: Project | null
  selectedImageIndex: number
  onSelectImage: (index: number) => void
  onClose: () => void
}

export default function ProjectDetailModal({
  isMobile,
  project,
  selectedImageIndex,
  onSelectImage,
  onClose,
}: ProjectDetailModalProps) {
  return (
    <AnimatePresence>
      {project ? (
        <motion.div
          initial={isMobile ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={isMobile ? undefined : { opacity: 0 }}
          className="fixed inset-0 z-[60] overflow-y-auto bg-black/45 px-4 py-6 md:backdrop-blur-sm print:hidden"
          onClick={onClose}
        >
          <motion.div
            initial={isMobile ? false : { opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={isMobile ? undefined : { opacity: 0, y: 18, scale: 0.98 }}
            transition={{ duration: 0.24 }}
            onClick={(event) => event.stopPropagation()}
            className="mx-auto flex max-h-[calc(100vh-3rem)] min-h-[min(720px,calc(100vh-3rem))] max-w-4xl flex-col overflow-hidden rounded-[2rem] border border-white/15 bg-[color:var(--surface-strong)] shadow-2xl"
          >
            <div className="flex items-start justify-between gap-4 border-b border-[color:var(--line)] px-6 py-5 md:px-8">
              <div>
                <span className="inline-flex rounded-full bg-[color:var(--accent-soft)] px-3 py-1 text-xs font-semibold tracking-[0.16em] text-[var(--accent)] uppercase">
                  {project.tag}
                </span>
                <h3 className="mt-4 text-3xl font-semibold tracking-[-0.05em]">{project.title}</h3>
                <p className="mt-2 text-sm text-[var(--warm)]">{project.role}</p>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--line)] text-[var(--muted)] transition hover:bg-[color:var(--accent-soft)] hover:text-[var(--text)]"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="min-h-0 overflow-y-auto">
              {project.images.length ? (
                <div className="border-b border-[color:var(--line)] px-6 py-5 md:px-8">
                  <div className="overflow-hidden rounded-[1.5rem] border border-[color:var(--line)] bg-[color:var(--surface)]">
                    <img src={project.images[selectedImageIndex].src} alt={project.images[selectedImageIndex].alt} className="h-[260px] w-full object-cover md:h-[320px]" />
                  </div>
                  <div className="mt-4 flex gap-3 overflow-x-auto pb-1">
                    {project.images.map((image, index) => (
                      <button
                        key={image.src}
                        type="button"
                        onClick={() => onSelectImage(index)}
                        className={`overflow-hidden rounded-[1rem] border transition ${
                          selectedImageIndex === index
                            ? 'border-[color:var(--line-strong)] shadow-[0_10px_20px_rgba(18,19,18,0.12)]'
                            : 'border-[color:var(--line)] opacity-80 hover:opacity-100'
                        }`}
                      >
                        <img src={image.src} alt={image.alt} className="h-20 w-28 object-cover md:h-24 md:w-36" />
                      </button>
                    ))}
                  </div>
                </div>
              ) : null}

              <div className="px-6 py-6 md:px-8 md:py-8">
                <div className="prose prose-neutral max-w-none text-[15px] leading-8 prose-headings:text-[var(--text)] prose-headings:tracking-[-0.03em] prose-p:text-[var(--muted)] prose-li:text-[var(--muted)] dark:prose-invert">
                  <DetailMarkdown>{project.detail}</DetailMarkdown>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
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
