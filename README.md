<div align="center">
# 🕵️ FrameSpy

**See which JavaScript framework a website uses, right on the toolbar icon.**

![Manifest V3](https://img.shields.io/badge/Manifest-V3-4285F4?logo=googlechrome&logoColor=white)
![No build step](https://img.shields.io/badge/build%20step-none-2ea44f)
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
| | Framework |
| :---: | --- |
| ⚛️ | **React** |
| 💚 | **Vue** |
| 🅰️ | **Angular** |
| 🔥 | **Svelte** |

</div>
If a page uses more than one, the first one found is shown on the icon.

## 🚀 Install

FrameSpy isn't on the Chrome Web Store yet, so for now you load it manually. It takes about a minute.

1. Download or clone this repository.
2. Open `chrome://extensions` in Chrome (or any Chromium browser).
3. Turn on **Developer mode** in the top right.
4. Click **Load unpacked** and choose the project folder.
5. Click the puzzle icon in the toolbar and **pin** FrameSpy.
   Now visit a site like [react.dev](https://react.dev) and watch the icon change.

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
