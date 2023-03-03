/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  // because colors and fonts are dynamically set, we need to ensure they are
  // not excluded from the minified bundle
  safelist: [
    { pattern: /(bg|border|divide|text)-gs-/ },
    { pattern: /font-(sans|mono|acid)/ },
    {
      pattern:
        /font-(thin|extralight|light|normal|medium|semibold|bold|extrabold|black)/,
    },
    {
      pattern: /tracking-(tighter|tight|normal|wide|wider|widest)/,
    },
  ],
}
