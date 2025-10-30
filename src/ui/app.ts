import { profile, projects } from '../data/profile'
import { t, type Lang } from '../data/i18n'

export function renderApp(lang: Lang) {
  // Ensure InterviewMate appears first
  const orderedProjects = (() => {
    const arr = [...projects]
    const idx = arr.findIndex((p) => p.title.en.toLowerCase().startsWith('interviewmate'))
    if (idx > 0) {
      const [it] = arr.splice(idx, 1)
      arr.unshift(it)
    }
    return arr
  })()
  const icons = [
    { img: 'Microsoft_Azure.svg.png', label: 'Azure' },
    { img: 'react.png', label: 'React' },
    { img: 'html.png', label: 'HTML5' },
    { img: 'css.png', label: 'CSS3' },
    { img: 'javascript.png', label: 'JavaScript' },
    { img: 'typescript.png', label: 'TypeScript' },
    { img: 'node.png', label: 'Node.js' },
    { img: 'Tailwind.png', label: 'Tailwind CSS' },
    { img: 'flutter.png', label: 'Flutter' },
    { img: 'dart.png', label: 'Dart' },
    { img: 'mongodb.png', label: 'MongoDB' },
    { img: 'python.png', label: 'Python' },
    { img: 'ai.png', label: 'Illustrator' },
    { img: 'ps.png', label: 'Photoshop' },
  ]
  const oneRow = (iconsArr: typeof icons) =>
    iconsArr
      .map(
        (i, idx) => `
          <img src="/images/${i.img}" alt="${i.label}"
            class="h-12 w-auto brightness-110 contrast-110 transition-transform duration-300 will-change-transform hover:scale-[1.3] hover:drop-shadow-[0_0_16px_rgba(255,255,255,0.28)] icon-bob"
            style="animation-delay: ${idx * 120}ms" loading="lazy" />
        `,
      )
      .join('')

  return `
    <section id="about" class="relative">
      <div class="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <h2 class="mb-6 text-2xl font-semibold tracking-tight">${t('about.title', lang)}</h2>
        <div class="grid gap-8 md:grid-cols-3">
          <div class="md:col-span-2">
            <p class="text-white/70">${profile.summary[lang]}</p>
            <p class="mt-4 text-white/70">${profile.about[lang]}</p>
          </div>
          <div class="">
            <div class="relative aspect-square w-full">
              <div class="pointer-events-none absolute -inset-[8%] z-0 rounded-full bg-brand-500/25 blur-[70px]"></div>
              <div class="relative overflow-hidden rounded-full ring-2 ring-brand-400/50 shadow-[0_0_40px_8px_rgba(139,92,246,0.25)]">
                <img src="/images/profile.jpg" alt="${profile.name}" class="h-full w-full object-cover opacity-95" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="experience" class="border-y border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent">
      <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 class="mb-6 text-2xl font-semibold tracking-tight">${t('experience.title', lang)}</h2>
        <div class="grid auto-cols-max grid-flow-col grid-rows-1 xl:grid-rows-2 items-center justify-center gap-8 sm:gap-10">${oneRow(icons)}</div>
      </div>
    </section>

    <section id="projects" class="relative">
      <div class="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <h2 class="mb-8 text-2xl font-semibold tracking-tight">${t('projects.title', lang)}</h2>
        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          ${orderedProjects
            .map((p) => {
              const card = `
                <article class=\"group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition hover:-translate-y-1 hover:bg-white/[0.07]\">
                  <div class=\"aspect-video overflow-hidden\">
                    <img src=\"${p.image}\" alt=\"${p.title.en}\" class=\"h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]\"/>
                  </div>
                  <div class=\"p-4\">
                    <h3 class=\"mb-2 text-lg font-semibold\">${p.title[lang]}</h3>
                    <p class=\"mb-4 text-sm text-white/70\">${p.description[lang]}</p>
                    <div class=\"flex flex-wrap gap-2\">
                      ${p.tags.map((t) => `<span class=\\\"rounded-md bg-white/5 px-2 py-1 text-xs text-white/80\\\">${t}</span>`).join('')}
                    </div>
                  </div>
                </article>`
              return p.link
                ? `<a href=\"${p.link}\" target=\"_blank\" rel=\"noreferrer\" class=\"block focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/60\">${card}</a>`
                : card
            })
            .join('')}
        </div>
      </div>
    </section>
  `
}
