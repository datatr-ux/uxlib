module.exports = {
  plugins: {
    'postcss-import': {},
    tailwindcss: {},
    autoprefixer: {},
    // 'postcss-sort-media-queries': {
    //   sort: 'desktop-first', // Tailwind’s default behavior
    // },
    // 'postcss-prefix-selector': {
    //   prefix: '[data-uxlib]',
    //   transform: (prefix, selector, prefixedSelector, filePath) => {
    //     // --- 1️⃣ Skip non-Tailwind files (like your custom index.css) ---
    //     // Only prefix when processing Tailwind-generated layers
    //     if (
    //       !filePath.includes("tw-entry.css") && // adjust if your input differs
    //       !filePath.includes(".tmp") &&
    //       !filePath.includes(".cache")
    //     ) {
    //       return selector;
    //     }

    //     // --- 2️⃣ Skip root-level and dark-mode declarations ---
    //     if (
    //       selector.startsWith(":root") ||
    //       selector.startsWith(".dark") ||
    //       selector.startsWith("body") ||
    //       selector.startsWith("html") ||
    //       selector.startsWith("@")
    //     ) {
    //       return selector;
    //     }

    //     // --- 3️⃣ Apply prefix to Tailwind-generated selectors ---
    //     return prefixedSelector;
    //   },
    // },
  },
};
