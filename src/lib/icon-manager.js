import { MESSAGES } from './message.js';

export const LOGOS = {
  React: 'react',
  Vue: 'vue',
  Angular: 'angular',
  Svelte: 'svelte',
};

const ICON_SIZES = [16, 32, 48, 128];

export function updateTabIcon(tabId, framework) {
  console.log('framework', framework);
  const icon = LOGOS[framework] ?? 'none';

  const path = Object.fromEntries(
    ICON_SIZES.map((size) => [size, `icons/${icon}-${size}.png`]),
  );

  chrome.action.setIcon({ tabId, path });
  chrome.action.setTitle({
    tabId,
    title: framework
      ? MESSAGES.tooltipFound(framework)
      : MESSAGES.tooltipNotFound,
  });
}
