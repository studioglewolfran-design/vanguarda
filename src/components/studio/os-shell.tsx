"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LogOut, Menu, PanelLeftClose, Search, X } from "lucide-react"
import { useState } from "react"

import { logout } from "@/app/auth/actions"
import { Button } from "@/components/ui/button"
import { StudioMark } from "@/components/studio/studio-mark"
import { cn } from "@/lib/utils"
import { osNavigation } from "@/lib/studio/navigation"

function Navigation({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname()

  return (
    <nav aria-label="Módulos do Studio OS" className="space-y-1.5">
      {osNavigation.map((item) => {
        const active = item.href === "/os" ? pathname === item.href : pathname.startsWith(item.href)
        const Icon = item.icon
        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onNavigate}
            aria-current={active ? "page" : undefined}
            className={cn(
              "group flex items-center gap-3 rounded-xl px-3 py-3 text-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-atmos",
              active ? "bg-white text-surface-950" : "text-surface-400 hover:bg-surface-800 hover:text-white"
            )}
          >
            <span className={cn("grid size-8 shrink-0 place-items-center rounded-lg", active ? "bg-brand-antar text-brand-kobold" : "bg-surface-800 text-surface-400 group-hover:text-brand-atmos")}>
              <Icon className="size-4" aria-hidden="true" />
            </span>
            <span>
              <span className="block font-medium">{item.label}</span>
              <span className={cn("mt-0.5 hidden text-[10px] xl:block", active ? "text-surface-600" : "text-surface-500")}>{item.description}</span>
            </span>
          </Link>
        )
      })}
    </nav>
  )
}

export function OsShell({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <div className="min-h-screen bg-surface-100 text-surface-950">
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-[292px] flex-col border-r border-surface-800 bg-surface-950 lg:flex">
        <div className="border-b border-surface-800 px-6 py-6">
          <StudioMark href="/os" inverted />
          <div className="mt-5 flex items-center justify-between">
            <span className="rounded-full border border-brand-atmos/30 bg-brand-atmos/10 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.16em] text-brand-atmos">Studio OS · Alpha</span>
            <PanelLeftClose className="size-4 text-surface-600" aria-hidden="true" />
          </div>
        </div>
        <div className="flex-1 overflow-y-auto px-3 py-5"><Navigation /></div>
        <div className="border-t border-surface-800 p-5">
          <p className="text-[10px] uppercase tracking-[0.16em] text-surface-500">Ambiente privado</p>
          <p className="mt-2 text-xs leading-5 text-surface-400">Memória operacional e direção do Studio em um único lugar.</p>
          <Link href="/" className="mt-4 inline-flex text-xs font-semibold text-brand-atmos hover:text-white">Ver site público →</Link>
          <form action={logout} className="mt-4">
            <button type="submit" className="inline-flex items-center gap-2 text-xs text-surface-500 transition hover:text-white"><LogOut className="size-3.5" /> Sair do ambiente</button>
          </form>
        </div>
      </aside>

      {mobileOpen ? (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button className="absolute inset-0 bg-surface-950/70 backdrop-blur-sm" aria-label="Fechar menu" onClick={() => setMobileOpen(false)} />
          <aside className="relative flex h-full w-[min(88vw,320px)] flex-col bg-surface-950 p-5 shadow-2xl">
            <div className="flex items-start justify-between"><StudioMark href="/os" inverted /><Button variant="ghost" size="icon" className="text-white hover:bg-surface-800" onClick={() => setMobileOpen(false)}><X /><span className="sr-only">Fechar menu</span></Button></div>
            <div className="mt-8 flex-1 overflow-y-auto"><Navigation onNavigate={() => setMobileOpen(false)} /></div>
          </aside>
        </div>
      ) : null}

      <div className="lg:pl-[292px]">
        <header className="sticky top-0 z-30 border-b border-surface-300 bg-surface-white/90 backdrop-blur-xl">
          <div className="flex h-16 items-center gap-3 px-4 sm:px-7 lg:px-10">
            <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setMobileOpen(true)}><Menu /><span className="sr-only">Abrir menu</span></Button>
            <div className="lg:hidden"><StudioMark href="/os" compact /></div>
            <div className="ml-auto hidden min-w-72 items-center gap-2 rounded-full border border-surface-300 bg-surface-100 px-4 py-2 text-xs text-surface-500 sm:flex">
              <Search className="size-3.5" aria-hidden="true" /> Buscar no Studio <span className="ml-auto font-mono text-[9px]">EM BREVE</span>
            </div>
            <span className="ml-auto size-2 rounded-full bg-brand-midori sm:ml-1" title="Sistema operacional" />
          </div>
        </header>
        <main>{children}</main>
      </div>
    </div>
  )
}
