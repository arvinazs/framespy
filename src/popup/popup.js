import { MESSAGES } from '../lib/message.js';

function render(root, { title, text }) {
  const titleEl = document.createElement('div');
  titleEl.className = 'title';
  titleEl.textContent = title;

  const textEl = document.createElement('div');
  textEl.className = 'text';
  textEl.textContent = text;

  root.replaceChildren(titleEl, textEl);
}

async function show() {
  const root = document.getElementById('root');

  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  const key = 'tab' + tab.id;
  const data = await chrome.storage.local.get(key);
  const entry = data[key];

  if (!entry) {
    render(root, MESSAGES.notScanned);
    return;
  }

  if (entry.length === 0) {
    render(root, MESSAGES.notFound);
    return;
  }

  render(root, MESSAGES.found(entry[0]));
}

show();
