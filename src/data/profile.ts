import type { Lang } from './i18n'

export const profile = {
  name: 'Anuka Senarathna',
  title: {
    en: 'Cloud Engineer / Web Developer',
    jp: 'クラウドエンジニア / Web開発者',
  },
  summary: {
    en: 'Cloud Computing Engineer building responsive, optimized cloud services and modern web experiences on Azure.',
    jp: 'Azure を中心に、応答性と最適化を重視したクラウドサービスとモダンな Web 体験を構築しています。',
  },
  about: {
    en:
      'I focus on reliable cloud infrastructure (Azure App Services, Functions, CI/CD) and performance‑minded web apps. I enjoy translating ideas into elegant UX, building UI systems with Tailwind/React, and shipping features that are accessible, fast, and maintainable.',
    jp:
      'Azure App Service / Functions / CI/CD による堅牢なクラウド基盤と、高速で使いやすい Web アプリの開発を得意としています。Tailwind/React での UI 設計、アクセシビリティとパフォーマンスを意識した実装、洗練された UX づくりが好きです。',
  },
  skills: [
    'Azure',
    'HTML',
    'CSS',
    'React',
    'MongoDB',
    'Python',
    'Adobe PS/AI',
  ],
  socials: {
    github: 'https://github.com/fina202404',
    linkedin: 'https://www.linkedin.com/in/anuka-senarathna-a02644314',
  },
}

export type Project = {
  title: Record<Lang, string>
  description: Record<Lang, string>
  image: string
  tags: string[]
  link?: string
}

export const projects: Project[] = [
  {
    title: {
      en: 'Eco‑friendly Product — Home Page',
      jp: 'エコ製品のホームページ',
    },
    description: {
      en: 'A homepage design for a sustainable product, focused on clean visuals, responsive layout, and eco‑conscious messaging.',
      jp: 'サステナブルな製品を紹介するホームページ。クリーンなビジュアル、レスポンシブなレイアウト、エコ志向のメッセージに焦点を当てています。',
    },
    image: '/images/project-top1.png',
    tags: ['Bootstrap', 'CSS', 'JS'],
  },
  {
    title: {
      en: 'Deploy a Web App with Microsoft Azure',
      jp: 'Microsoft Azure で Web アプリをデプロイ',
    },
    description: {
      en: 'Demonstrates deploying a modern web application using Azure App Services with CI/CD pipelines.',
      jp: 'Azure App Service と CI/CD パイプラインを使用して最新の Web アプリをデプロイするプロジェクト。',
    },
    image: '/images/project-azure.png',
    tags: ['Azure', 'CI/CD', 'Web App'],
  },
  {
    title: {
      en: 'ZOI Wellness — Mobile App',
      jp: 'ZOI ウェルネス — モバイルアプリ',
    },
    description: {
      en: 'Mobile wellness app focused on daily progress, balance, and gentle habits — designed for clarity and calm UX.',
      jp: '毎日の進捗や習慣づけに焦点を当てたウェルネスアプリ。落ち着いた UX と見やすさを重視して設計。',
    },
    image: '/images/zoi.png',
    tags: ['React Native', 'TypeScript', 'UX'],
  },
  {
    title: {
      en: 'InterviewMate — AI Interview Trainer',
      jp: 'InterviewMate — AI 面接トレーナー',
    },
    description: {
      en: 'AI‑powered interview practice with feedback, resume assistance, and answer analysis to prepare for any role.',
      jp: 'AI による面接練習・フィードバック、履歴書作成支援、回答分析を提供する面接支援サービス。',
    },
    image: '/images/interviewmate.png',
    tags: ['Next.js', 'AI', 'Design'],
    link: 'https://aiinterviewmate.com/'
  },
  {
    title: {
      en: 'iMarketPredict — AI Stock Prediction',
      jp: 'iMarketPredict — AI 株価予測',
    },
    description: {
      en: 'AI‑powered stock market prediction site. I contributed to the AI/ML part with the team and integrated the results into a clean web experience.',
      jp: 'AI による株式市場予測サイト。チームで AI/ML を担当し、結果をわかりやすい Web 体験として統合しました。',
    },
    image: '/images/imarket.png',
    tags: ['AI/ML', 'Prediction', 'Team'],
  },
  {
    title: {
      en: 'Wais Architecture Platform',
      jp: 'Wais Architecture Platform',
    },
    description: {
      en: 'An architecture platform built with TypeScript and Tailwind, featuring expressive 3D design elements via Three.js.',
      jp: 'TypeScript と Tailwind を用い、Three.js による表現力のある 3D デザイン要素を備えたアーキテクチャ プラットフォーム。',
    },
    image: '/images/wais.png',
    tags: ['TypeScript', 'Tailwind', 'Three.js'],
  },
]
