Readme · MD
<div align="center">
# 🕵️ FrameSpy

**See which JavaScript framework a website uses, right on the toolbar icon.**

![Manifest V3](https://img.shields.io/badge/Manifest-V3-4285F4?logo=googlechrome&logoColor=white)
![Built with Parcel](https://img.shields.io/badge/built%20with-Parcel-21374b)
![License](https://img.shields.io/badge/license-ISC-blue)

</div>
---

FrameSpy is a tiny Chrome extension for the curious. Open any website and the extension icon turns into the logo of the framework the page is built with. Click it for a short, friendly explanation.

No setup, no accounts, and nothing ever leaves your browser.

<!-- Add a screenshot or GIF here:
<div align="center"><img src="docs/demo.gif" width="480" alt="FrameSpy demo" /></div>
-->

## ✨ Features

- **Automatic**: every page is checked as soon as it finishes loading. No clicking required.
- **Per-tab icons**: each tab keeps its own icon, so you can see what all your tabs are built with at a glance.
- **Works on open tabs**: tabs that were already open get their icon right after the extension loads, without a refresh.
- **Friendly popup**: click the icon to see which framework the page uses, with a short description of it.
- **Private by design**: everything happens on your device. FrameSpy collects nothing and sends nothing anywhere.

## 🎯 Supported frameworks

<div align="center">
<table>
  <tr>
    <td align="center"><img src="src/icons/react-48.png" width="48" alt="React" /><br /><b>React</b></td>
    <td align="center"><img src="src/icons/vue-48.png" width="48" alt="Vue" /><br /><b>Vue</b></td>
    <td align="center"><img src="src/icons/angular-48.png" width="48" alt="Angular" /><br /><b>Angular</b></td>
    <td align="center"><img src="src/icons/svelte-48.png" width="48" alt="Svelte" /><br /><b>Svelte</b></td>
  </tr>
</table>
</div>
If a page uses more than one, the first one found is shown on the icon.

## 🚀 Install

FrameSpy isn't on the Chrome Web Store yet, so for now you build it and load it manually. It takes a couple of minutes.

You'll need [Node.js](https://nodejs.org) installed.

1. Download or clone this repository.
2. Install the dependencies and build the extension:

```bash
npm install
npm run build
```

This creates a `dist` folder. That folder is the extension. 3. Open `chrome://extensions` in Chrome (or any Chromium browser). 4. Turn on **Developer mode** in the top right. 5. Click **Load unpacked** and choose the **`dist`** folder (not the project folder). 6. Click the puzzle icon in the toolbar and **pin** FrameSpy.

Now open a React website and watch the icon change.

> Chrome loads the built files in `dist`, so after changing anything in `src`, run `npm run build` again and press the reload button on the extension's card in `chrome://extensions`.

## 🔐 Privacy

FrameSpy only looks at what a page is built with. It doesn't read what you type, your cookies, or the content of the pages you visit, and it never connects to the internet. The results stay in your browser.

## ⚠️ Good to know

FrameSpy recognizes frameworks by the traces they leave on a page, so it isn't perfect:

- A framework it doesn't know about will show up as "nothing detected".
- A page that loads its framework very late may be checked too early. A refresh usually fixes it.
- Some heavily optimized or server-rendered sites hide the usual traces.
- Browser pages such as `chrome://` pages and the Chrome Web Store can't be checked.
- It tells you which framework is used, not which version or build mode.

## 📄 License

[ISC](LICENSE) © Arvin Azs
