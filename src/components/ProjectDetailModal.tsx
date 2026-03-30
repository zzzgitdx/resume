import { useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import ReactMarkdown from 'react-markdown'

import type { Project } from '../portfolio-types'

type ProjectDetailModalProps = {
  isMobile: boolean
  project: Project | null
  selectedImageIndex: number
  onSelectImage: (index: number) => void
  onShowPrevious: () => void
  onShowNext: () => void
  onClose: () => void
}

export default function ProjectDetailModal({
  isMobile,
  project,
  selectedImageIndex,
  onSelectImage,
  onShowPrevious,
  onShowNext,
  onClose,
}: ProjectDetailModalProps) {
  const mobileGalleryRef = useRef<HTMLDivElement | null>(null)
  const mobileScrollTimeoutRef = useRef<number | null>(null)
  const mobileUserScrollingRef = useRef(false)

  useEffect(() => {
    return () => {
      if (mobileScrollTimeoutRef.current) {
        window.clearTimeout(mobileScrollTimeoutRef.current)
      }
    }
  }, [])

  useEffect(() => {
    if (!isMobile || !project?.images.length || !mobileGalleryRef.current || mobileUserScrollingRef.current) return
    const container = mobileGalleryRef.current
    const targetLeft = container.clientWidth * selectedImageIndex
    if (Math.abs(container.scrollLeft - targetLeft) < 4) return
    container.scrollTo({
      left: targetLeft,
      behavior: 'smooth',
    })
  }, [isMobile, project, selectedImageIndex])

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
                  {isMobile ? (
                    <div className="overflow-hidden rounded-[1.5rem] border border-[color:var(--line-strong)] bg-[color:var(--surface)] shadow-[inset_0_1px_0_rgba(255,255,255,0.45)]">
                      <div
                        ref={mobileGalleryRef}
                        onScroll={(event) => {
                          if (project.images.length < 2) return
                          const container = event.currentTarget
                          const width = container.clientWidth || 1
                          const nextIndex = Math.max(0, Math.min(project.images.length - 1, Math.round(container.scrollLeft / width)))
                          mobileUserScrollingRef.current = true
                          if (mobileScrollTimeoutRef.current) {
                            window.clearTimeout(mobileScrollTimeoutRef.current)
                          }
                          mobileScrollTimeoutRef.current = window.setTimeout(() => {
                            mobileUserScrollingRef.current = false
                          }, 90)
                          if (nextIndex !== selectedImageIndex) {
                            onSelectImage(nextIndex)
                          }
                        }}
                        className="flex snap-x snap-mandatory overflow-x-auto overscroll-x-contain touch-pan-x [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
                      >
                        {project.images.map((image) => (
                          <div key={image.src} className="w-full shrink-0 snap-center">
                            <div className="aspect-[16/9] overflow-hidden">
                              <img src={image.src} alt={image.alt} draggable={false} className="h-full w-full object-cover" />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="relative overflow-hidden rounded-[1.5rem] border border-[color:var(--line-strong)] bg-[color:var(--surface)] shadow-[inset_0_1px_0_rgba(255,255,255,0.45)]">
                      {project.images.length > 1 ? (
                        <>
                          <button
                            type="button"
                            onClick={onShowPrevious}
                            aria-label="gallery previous image"
                            className="absolute left-3 top-1/2 z-10 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/35 text-white transition hover:bg-black/55"
                          >
                            <ChevronLeft className="h-5 w-5" />
                          </button>
                          <button
                            type="button"
                            onClick={onShowNext}
                            aria-label="gallery next image"
                            className="absolute right-3 top-1/2 z-10 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/35 text-white transition hover:bg-black/55"
                          >
                            <ChevronRight className="h-5 w-5" />
                          </button>
                        </>
                      ) : null}

                      <AnimatePresence initial={false} mode="wait">
                        <motion.div
                          key={project.images[selectedImageIndex].src}
                          drag={project.images.length > 1 ? 'x' : false}
                          dragConstraints={{ left: 0, right: 0 }}
                          dragElastic={0.08}
                          onDragEnd={(_, info) => {
                            if (project.images.length < 2) return
                            if (Math.abs(info.offset.x) < 72) return
                            if (info.offset.x > 0) {
                              onShowPrevious()
                              return
                            }
                            onShowNext()
                          }}
                          initial={{ opacity: 0.42, x: 18 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0.42, x: -18 }}
                          transition={{ duration: 0.18, ease: 'easeOut' }}
                          className={`aspect-[16/9] overflow-hidden ${project.images.length > 1 ? 'cursor-grab active:cursor-grabbing' : ''}`}
                        >
                          <img
                            src={project.images[selectedImageIndex].src}
                            alt={project.images[selectedImageIndex].alt}
                            draggable={false}
                            className="h-full w-full object-cover"
                          />
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  )}
                  <div className="mt-4 flex gap-3 overflow-x-auto pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
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
