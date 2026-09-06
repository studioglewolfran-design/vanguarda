export function SectionHeading({ index, eyebrow, title, description }: { index?: string; eyebrow: string; title: string; description: string }) {
  return (
    <header className="grid gap-5 border-b border-surface-300 pb-8 lg:grid-cols-[1fr_minmax(260px,420px)] lg:items-end">
      <div>
        <p className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-kobold">
          {index ? <span className="font-mono text-surface-500">{index}</span> : null}{eyebrow}
        </p>
        <h1 className="mt-4 max-w-4xl font-sans text-4xl font-medium leading-[0.96] tracking-[0.02em] text-surface-950 sm:text-5xl xl:text-6xl">{title}</h1>
      </div>
      <p className="max-w-xl text-sm leading-6 text-surface-600 lg:pb-1">{description}</p>
    </header>
  )
}
