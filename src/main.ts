import './styles.css'
import { initHeroScene } from './three/hero'
import { initBackgroundScene } from './three/background'
import { renderApp } from './ui/app'
import { getLang, setLang, t, type Lang } from './data/i18n'
import { profile } from './data/profile'

const app = document.querySelector<HTMLDivElement>('#app')!
let lang: Lang = getLang()

function mount() {
  app.innerHTML = `
    <header class="fixed inset-x-0 top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/40">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex h-16 items-center justify-between">
          <a href="#" class="font-semibold tracking-tight">Anuka<span class="text-brand-400">.</span></a>
          <nav class="hidden items-center gap-6 text-sm md:flex">
            <a href="#about" class="hover:text-brand-300">${t('nav.about', lang)}</a>
            <a href="#experience" class="hover:text-brand-300">${t('nav.experience', lang)}</a>
            <a href="#projects" class="hover:text-brand-300">${t('nav.projects', lang)}</a>
            <a href="#contact" class="hover:text-brand-300">${t('nav.contact', lang)}</a>
          </nav>
          <div class="flex items-center gap-3">
            <div class="inline-flex overflow-hidden rounded-md border border-white/10 text-xs">
              <button data-lang="en" class="px-3 py-1 ${lang === 'en' ? 'bg-white text-black' : 'text-white/80 hover:text-white'}">EN</button>
              <button data-lang="jp" class="px-3 py-1 ${lang === 'jp' ? 'bg-white text-black' : 'text-white/80 hover:text-white'}">日本語</button>
            </div>
            <a href="#contact" class="rounded-md bg-brand-600 px-4 py-2 text-sm font-medium hover:bg-brand-500">${t('header.hire', lang)}</a>
          </div>
        </div>
      </div>
    </header>
    <main>
      <section id="hero" class="relative overflow-hidden pt-24">
        <div id="hero-canvas" class="pointer-events-none absolute inset-0 -z-10"></div>
        <div class="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div class="grid items-center gap-10 md:grid-cols-2">
            <div>
              <p class="mb-2 text-sm text-brand-300">${t('hero.role', lang)}</p>
              <h1 class="mb-4 text-4xl font-semibold leading-tight sm:text-5xl">
                ${t('hero.title', lang)} <span class="text-brand-400">${profile.name}</span>
              </h1>
              <p class="mb-8 max-w-prose text-white/70">
                ${profile.summary[lang]}
              </p>
              <div class="flex gap-3">
                <a href="#projects" class="rounded-md bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-white/90">${t('hero.cta.work', lang)}</a>
                <a href="#contact" class="rounded-md border border-white/20 px-4 py-2 text-sm font-semibold hover:border-brand-400 hover:text-brand-300">${t('hero.cta.contact', lang)}</a>
              </div>
            </div>
            <div class="relative aspect-square w-full">
              <div class="absolute inset-0 rounded-3xl border border-white/10 bg-gradient-to-b from-brand-900/40 to-black/0"></div>
            </div>
          </div>
        </div>
      </section>

      ${renderApp(lang)}
    </main>
    <footer id="contact" class="border-t border-white/10 py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 class="mb-4 text-lg font-semibold tracking-tight">${t('contact.title', lang)}</h2>
        <p class="mb-6 text-white/70">${t('contact.desc', lang)}</p>
        <div class="flex items-center gap-3">
          <a href="https://www.linkedin.com/in/anuka-senarathna-a02644314" target="_blank" rel="noreferrer" aria-label="LinkedIn"
             class="group inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 transition hover:border-brand-400 hover:bg-white/10">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-5 w-5 text-white/80 group-hover:text-brand-300">
              <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.05c.53-1 1.84-2.2 3.78-2.2 4.04 0 4.79 2.66 4.79 6.1V24h-4v-7.3c0-1.74-.03-3.97-2.42-3.97-2.42 0-2.79 1.9-2.79 3.85V24h-4V8z"/>
            </svg>
          </a>
          <button type="button" data-mail-open aria-label="Email"
             class="group inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 transition hover:border-brand-400 hover:bg-white/10">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="h-5 w-5 text-white/80 group-hover:text-brand-300">
              <path d="M3 5h18a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z"/>
              <path d="m3 7 9 6 9-6"/>
            </svg>
          </button>
        </div>
      </div>
    </footer>

    <!-- Email Modal -->
    <div id="email-modal" class="fixed inset-0 z-50 hidden items-center justify-center p-4">
      <div data-mail-overlay class="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
      <div class="relative w-full max-w-md rounded-2xl border border-white/10 bg-black/80 p-6">
        <button data-mail-close class="absolute right-3 top-3 rounded-md border border-white/10 p-1 text-white/70 hover:text-white" aria-label="Close">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="h-4 w-4"><path d="M6 6l12 12M6 18L18 6"/></svg>
        </button>
        <h3 class="mb-2 text-lg font-semibold">Send me an email</h3>
        <p class="mb-4 text-sm text-white/60">I'll get back to you as soon as I can.</p>
        <form id="email-form" class="space-y-3">
          <input type="text" name="subject" placeholder="Subject" class="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm outline-none focus:border-brand-400" />
          <textarea name="message" rows="4" placeholder="Message" class="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm outline-none focus:border-brand-400"></textarea>
          <div class="flex justify-end gap-2 pt-2">
            <button type="button" data-mail-close class="rounded-md border border-white/10 px-4 py-2 text-sm text-white/80 hover:border-white/20">Cancel</button>
            <button type="submit" class="rounded-md bg-brand-600 px-4 py-2 text-sm font-medium hover:bg-brand-500">Send</button>
          </div>
        </form>
      </div>
    </div>
  `

  // Initialize scenes after DOM is set
  initHeroScene('#hero-canvas')
  initBackgroundScene('#site-bg')

  // Lang switchers
  document.querySelectorAll<HTMLButtonElement>('[data-lang]')?.forEach((btn) => {
    btn.addEventListener('click', () => {
      const next = (btn.getAttribute('data-lang') as Lang) || 'en'
      lang = next
      setLang(lang)
      mount()
    })
  })

  // Email modal controls
  const modal = document.getElementById('email-modal') as HTMLDivElement | null
  const openBtn = document.querySelector('[data-mail-open]') as HTMLButtonElement | null
  const overlay = document.querySelector('[data-mail-overlay]') as HTMLDivElement | null
  const closeBtns = document.querySelectorAll('[data-mail-close]')
  const form = document.getElementById('email-form') as HTMLFormElement | null
  const show = (v: boolean) => {
    if (!modal) return
    modal.classList.toggle('hidden', !v)
    modal.classList.toggle('flex', v)
    document.body.style.overflow = v ? 'hidden' : ''
  }
  openBtn?.addEventListener('click', () => show(true))
  overlay?.addEventListener('click', () => show(false))
  closeBtns.forEach((b) => b.addEventListener('click', () => show(false)))
  window.addEventListener('keydown', (e) => { if (e.key === 'Escape') show(false) })
  form?.addEventListener('submit', (e) => {
    e.preventDefault()
    const fd = new FormData(form!)
    const subject = encodeURIComponent(String(fd.get('subject') || ''))
    const message = encodeURIComponent(String(fd.get('message') || ''))
    const mailto = `mailto:anukasena7@gmail.com?subject=${subject}&body=${message}`
    window.location.href = mailto
    show(false)
  })
}

mount()

