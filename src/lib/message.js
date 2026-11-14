const DESCRIPTIONS = {
  React:
    'A JavaScript library for building user interfaces from reusable components.',
  Vue: 'A progressive JavaScript framework for building web interfaces.',
  Angular: 'A TypeScript-based framework for building large web applications.',
  Svelte: 'A compiler that turns components into lightweight JavaScript.',
};

export const MESSAGES = {
  found: (name) => ({
    title: `This page is using the ${name} framework. ✅`,
    text: DESCRIPTIONS[name] ?? 'A JavaScript framework.',
  }),

  notFound: {
    title: 'No JavaScript framework detected. ❌',
    text: "This page may be plain HTML, or it may use a framework FrameSpy doesn't recognize yet.",
  },

  notScanned: {
    title: "This page hasn't been scanned yet. 🔄",
    text: 'Refresh the page, then open FrameSpy again.',
  },
};
