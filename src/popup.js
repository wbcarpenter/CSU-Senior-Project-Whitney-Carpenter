console.log("Popup script loaded!");

document.addEventListener("DOMContentLoaded", () => {
  loadLastResult();
  loadHistory();
  const checkBtn = document.getElementById("checkBtn");
  const passwordInput = document.getElementById("passwordInput");
  const clearHistoryBtn = document.getElementById("clearHistory");

  checkBtn.addEventListener("click", () => {
    const password = passwordInput.value;
    const result = evaluatePassword(password);
    displayResults(result);
    saveResult(result.label, result.suggestions);
    saveToHistory(password, result.label);
    loadHistory();
  });

  clearHistoryBtn.addEventListener("click", () => {
    chrome.storage.local.set({ history: [] }, loadHistory);
  });
});


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

function displayResults({ label, suggestions }) {
  document.getElementById("strength").textContent = label;
  const suggestionsEl = document.getElementById("suggestions");

  suggestionsEl.innerHTML = suggestions.length
    ? `<strong>Suggestions:</strong><ul>${suggestions.map(s => `<li>${s}</li>`).join("")}</ul>`
    : "Looks great!";
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

function maskPassword(pwd) {
  if (pwd.length <= 2) return "*".repeat(pwd.length);
  return pwd[0] + "*".repeat(pwd.length - 2) + pwd[pwd.length - 1];
}

function saveToHistory(password, label) {
  chrome.storage.local.get(["history"], (data) => {
    const history = data.history || [];

    history.push({
      masked: maskPassword(password),
      strength: label,
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
        <strong>${entry.masked}</strong> — ${entry.strength} <br>
        <small>${entry.time}</small>
      `;
      list.appendChild(li);
    });
  });
}
