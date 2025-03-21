chrome.runtime.onInstalled.addListener(() => {
  setInterval(() => {
    chrome.action.openPopup();
  }, get_random_num());
});

function get_random_num() {
  return Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000;
}
