const CONFIG = {
  // profile setting (required)
  profile: {
    name: "yunchaehyun",
    image: "/chae.png", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "Frontend Developer",
    bio: "",
    email: "dbscogus4467@naver.com",
    linkedin: "",
    github: "yunchaehyun",
    instagram: "",
  },
  projects: [
    {
      name: "Git Challenge",
      href: "https://github.com/boostcampwm2023/web01-GitChallenge",
      image: "/git-challenge.png",
    },
    {
      name: "우리의 가계부, 우리가",
      href: "https://github.com/Uliga/Uliga_Frontend",
      image: "/uliga.png",
    },
  ],
  // blog setting (required)
  blog: {
    title: "chae-devlog",
    description: "",
  },

  // CONFIG configration (required)
  link: "https://chae-dev.vercel.app",
  since: 2023, // If leave this empty, current year will be used.
  lang: "ko-KR", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: "yunchaehyun/comments",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 1000, // revalidate time for [slug], index
}

module.exports = { CONFIG }
