(function () {
	console.log("SecurePass content script loaded");

	function createBubble(input) {
		if (input.dataset.securepassAttached) return;
		input.dataset.securepassAttached = "true";

		const wrapper = document.createElement("div");
		wrapper.style.position = "relative";
		wrapper.style.display = "inline-block";
		wrapper.style.width = input.offsetWidth + "px";

		input.parentNode.insertBefore(wrapper, input);
		wrapper.appendChild(input);

		const bubble = document.createElement("div");

		bubble.id = "securepass-bubble";

		const img = document.createElement("img");
		img.src = chrome.runtime.getURL("icons/lock.png");

		bubble.appendChild(img);
		bubble.style.right = "8px";
		bubble.style.top = "50%";
		bubble.style.transform = "translate(-50%)";

		wrapper.appendChild(bubble);

		input.style.paddingRight = "32px";

		bubble.addEventListener("click", () => {
			chrome.runtime.sendMessage({ action: "openPopup" });		});
	}

	function checkForPasswordFields() {
		const inputs = document.querySelectorAll("input[type='password']");
		inputs.forEach(createBubble);
	}

	checkForPasswordFields();

	const observer = new MutationObserver(checkForPasswordFields);
	observer.observe(document.body, { childList: true, subtree: true });
})();