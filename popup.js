chrome.tabs.onUpdated.addListener(function (tab , info, tab) {
        chrome.tabs.sendMessage(tab.id, {text: 'report_back'});
});