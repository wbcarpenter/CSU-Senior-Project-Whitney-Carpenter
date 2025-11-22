chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
	if (msg.action === "openPopup") {
		chrome.windows.create({
			url: chrome.runtime.getURL("popup.html"),
			type: "popup",
			width: 400,
			height: 600
		});
	}
});