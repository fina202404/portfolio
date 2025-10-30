export type Lang = 'en' | 'jp'

export const LANG_KEY = 'anuka_lang'

export const getLang = (): Lang => {
  const v = (localStorage.getItem(LANG_KEY) || 'en') as Lang
  return v === 'jp' ? 'jp' : 'en'
}

export const setLang = (lang: Lang) => {
  localStorage.setItem(LANG_KEY, lang)
}

type Dict = Record<string, { en: string; jp: string }>

export const dict: Dict = {
  'nav.about': { en: 'About', jp: '自己紹介' },
  'nav.experience': { en: 'Experience', jp: '経験' },
  'nav.projects': { en: 'Projects', jp: 'プロジェクト' },
  'nav.contact': { en: 'Contact', jp: 'お問い合わせ' },
  'hero.role': { en: 'Cloud Engineer • Web Developer', jp: 'クラウドエンジニア・Web開発者' },
  'hero.title': { en: 'Hello, I’m', jp: 'こんにちは、私は' },
  'hero.cta.work': { en: 'See work', jp: '制作実績を見る' },
  'hero.cta.contact': { en: 'Contact', jp: 'お問い合わせ' },
  'about.title': { en: 'About', jp: '自己紹介' },
  'experience.title': { en: 'Experience', jp: '経験' },
  'projects.title': { en: 'Projects', jp: 'プロジェクト' },
  'contact.title': { en: 'Contact', jp: 'お問い合わせ' },
  'contact.desc': { en: 'Feel free to reach out!', jp: 'お気軽にご連絡ください。' },
  'header.hire': { en: 'Hire me', jp: '仕事の依頼' },
}

export const t = (key: keyof typeof dict | string, lang: Lang) => {
  const e = (dict as Dict)[key]
  if (!e) return key
  return lang === 'jp' ? e.jp : e.en
}

