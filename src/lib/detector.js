export function detectAll() {
  const elements = document.querySelectorAll('*');
  const keys = new Set();
  const names = [];

  elements.forEach((el) => {
    Object.keys(el).forEach((k) => keys.add(k));
  });

  const hasKey = (prefix) => [...keys].some((k) => k.startsWith(prefix));
  const has = (selector) => !!document.querySelector(selector);

  if (window.React || hasKey('__reactFiber$')) names.push('React');
  if (window.Vue || hasKey('__vue_app__') || hasKey('__vue__'))
    names.push('Vue');
  if (has('[ng-version]')) names.push('Angular');
  if (has('[class*="svelte-"]')) names.push('Svelte');

  return names;
}
