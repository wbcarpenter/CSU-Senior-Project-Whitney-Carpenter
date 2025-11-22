(function () {
	let bubble;

	function createBubble() {
		if (bubble) return;

		bubble = document.createElement("div");
		bubble.id = "securepass-bubble";

		const img = document.createElement("img");
		img.src = chrome.runtime.getURL("icons/lock.png");

		bubble.appendChild(img);
		document.body.appendChild(bubble);

		bubble.addEventListener("click", () => {
			chrome.runtime.sendMessage({ action: "openPopup"});
		});
	}

	function removeBubble() {
		if (bubble) {
			bubble.remove();
			bubble = null;
		}
	}

	function checkForPasswordFields() {
		const hasPassword = document.querySelector("input[type='password']");
		if (hasPassword) createBubble();
		else removeBubble();
	}

	checkForPasswordFields();

	const observer = new MutationObserver(checkForPasswordFields);
	observer.observe(document.body, { childList: true, subtree: true });
})();