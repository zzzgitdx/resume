export type ProjectImage = {
  src: string
  alt: string
}

export type Project = {
  key: string
  title: string
  role: string
  tag: string
  summary: string
  body: string
  detail: string
  coverImage?: ProjectImage
  images: ProjectImage[]
}
