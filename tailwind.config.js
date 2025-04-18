export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        theme: {
          bg: 'var(--color-bg)',
          text: 'var(--color-text)',
          accent: 'var(--color-accent)',
          secondary: 'var(--color-secondary)',
          link: 'var(--color-link)',
        },
      },
    },
  },
  plugins: [],
};
