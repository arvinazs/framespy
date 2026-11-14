import { detectAll } from './lib/detector.js';
import { updateTabIcon } from './lib/icon-manager.js';

chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
  if (changeInfo.status === 'loading') {
    updateTabIcon(tabId);
    return;
  }

  if (changeInfo.status !== 'complete') return;
  if (!tab.url || !tab.url.startsWith('http')) return;

  
  const [res] = await chrome.scripting.executeScript({
    target: { tabId },
    world: 'MAIN',
    func: detectAll,
  });
  const names = res.result;

  updateTabIcon(tabId, names[0]);
  chrome.storage.local.set({ ['tab' + tabId]: names });
});

chrome.tabs.onActivated.addListener(async ({ tabId }) => {
  const key = `tab${tabId}`;
  const data = await chrome.storage.local.get(key);
  const names = data[key];
  if (!names) return;
  updateTabIcon(tabId, names[0]);
});

chrome.tabs.onRemoved.addListener((tabId) => {
  chrome.storage.local.remove('tab' + tabId);
});
