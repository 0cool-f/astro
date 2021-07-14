export default {
  dist: './docs',
  buildOptions: {
    sitemap: true,
  },
  devOptions: {
    tailwindConfig: './tailwind.config.js',
  },
  renderers: [
    '@astrojs/renderer-vue'
  ]
};