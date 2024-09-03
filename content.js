function removeXrayPanel() {
  const xrayPanel = document.querySelector(".xrayQuickView");
  if (xrayPanel) {
    xrayPanel.remove();
  }
}

const observer = new MutationObserver(removeXrayPanel);
observer.observe(document.body, { childList: true, subtree: true });
removeXrayPanel();
