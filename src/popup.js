console.log("Popup script loaded!");

document.addEventListener("DOMContentLoaded", () => {
  loadLastResult();
  loadHistory();
  const checkBtn = document.getElementById("checkBtn");
  const passwordInput = document.getElementById("passwordInput");
  const clearHistoryBtn = document.getElementById("clearHistory");

  checkBtn.addEventListener("click", async () => {
    const password = passwordInput.value;
    const result = evaluatePassword(password);
    displayResults(password, result);
    const hash = await hashPassword(password);
    if (COMMON_PASSWORD_HASHES.has(hash)) {
      result.label = "Very Weak";
      result.suggestions.push("This password is extremely common and easily guessed.");
    }
    saveResult(result.label, result.suggestions);
    saveToHistory(hash, result.label, password.length);
    loadHistory();
  });

  clearHistoryBtn.addEventListener("click", () => {
    chrome.storage.local.set({ history: [] }, loadHistory);
  });
});

async function hashPassword(password) {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);

  const hashBuffer = await crypto.subtle.digest("SHA-256", data);

  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray
    .map(byte => byte.toString(16).padStart(2, "0"))
    .join("");
  return hashHex;
}


function evaluatePassword(password) {
  let score = 0;
  const suggestions = [];

  if (password.length >= 12) score += 2;
  else if (password.length >= 8) score += 1;
  else suggestions.push("Use at least 8-12 characters.");

  if (/[A-Z]/.test(password)) score++;
  else suggestions.push("Add uppercase letters.");

  if (/[a-z]/.test(password)) score++;
  else suggestions.push("Add lowercase letters.");

  if (/[0-9]/.test(password)) score++;
  else suggestions.push("Include numbers.");

  if (/[^A-Za-z0-9]/.test(password)) score++;
  else suggestions.push("Include special characters.");

  let label = "Weak";
  if (score >= 5) label = "Very Strong";
  else if (score === 4) label = "Strong";
  else if (score === 3) label = "Moderate";

  return {label, suggestions };
}

function displayResults(password, { label, suggestions }) {
  const strengthE1 = document.getElementById("strength");
  const suggestionsEl = document.getElementById("suggestions");
  const bar = document.getElementById("entropyBar");
  const entropyValue = document.getElementById("entropyValue");

  const entropy = calculateEntropy(password);

  strengthE1.textContent = label;

  entropyValue.textContent = `Entropy: ${entropy} bits`;

  const maxEntropy = 80;
  const percentage = Math.min((entropy / maxEntropy) * 100, 100);
  bar.style.width = percentage + "%";

  if (entropy < 40) {
    bar.style.backgroundColor = "red";
  } else if (entropy < 60) {
    bar.style.backgroundColor = "orange";
  } else {
    bar.style.backgroundColor = "green";
  }

  if (suggestions.length > 0) {
    suggestionsEl.innerHTML =
      `<strong>Suggestions:</strong>
      <ul>${suggestions.map(s => `<li>${s}</li>`).join("")}</ul>`;
  }else {
    suggestionsE1.textContent = "Looks great!";
  }
}

function saveResult(label, suggestions) {
  chrome.storage.local.set(
    {
      lastStrength: label,
      lastSuggestions: suggestions,
      lastCheckedAt: new Date().toISOString()
    },
    () => console.log("Password result saved!")
  );
}

function loadLastResult() {
  chrome.storage.local.get(
    ["lastStrength", "lastSuggestions", "lastCheckedAt"],
    (data) => {
      if (data.lastStrength) {
        document.getElementById("strength").textContent = data.lastStrength;

        const suggestionsEl = document.getElementById("suggestions");

        if (data.lastSuggestions && data.lastSuggestions.length > 0) {
          suggestionsEl.innerHTML =
            `<strong>Previous Suggestions:</strong><ul>${data.lastSuggestions
              .map(s => `<li>${s}</li>`)
              .join("")}</ul>`

        } else {
          suggestionsEl.textContent = "Looks great (previous check)!";
        }
      }
    }
  );
}

function saveToHistory(hash, label, length) {
  chrome.storage.local.get(["history"], (data) => {
    const history = data.history || [];

    history.push({
      hash: hash,
      strength: label,
      length: length,
      time: new Date().toLocaleString()
    });

    chrome.storage.local.set({ history });
  });
}

function loadHistory() {
  chrome.storage.local.get(["history"], (data) => {
    const list = document.getElementById("historyList");
    list.innerHTML = "";

    const history = data.history || [];

    history.forEach(entry => {
      const li = document.createElement("li");
      li.innerHTML = `
        <strong>${entry.length} characters</strong> — ${entry.strength} <br>
        <small>${entry.time}</small>
      `;
      list.appendChild(li);
    });
  });
}

function calculateEntropy(password) {
  let charsetSize = 0;

  if (/[a-z]/.test(password)) charsetSize += 26;
  if (/[A-Z]/.test(password)) charsetSize += 26;
  if (/[0-9]/.test(password)) charsetSize += 10;
  if (/[^A-Za-z0-9]/.test(password)) charsetSize += 32;

  if (charsetSize === 0) return 0;

  const entropy = password.length * Math.log2(charsetSize);
  return Math.round(entropy);
}