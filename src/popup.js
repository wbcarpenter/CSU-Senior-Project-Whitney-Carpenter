document.getElementById("checkBtn").addEventListener("click", () => {
  const password = document.getElementById("passwordInput").value;
  const strength = strength = evaluatePassword(password);
  displayResults(strength);
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
  const suggestionsE1 = document.getElementById("suggestions");
  suggestions E1.innerHTML = suggestions.length
    ? <strong>Suggestions:</strong><ul>${suggestions.map(s => `<li>${s}</li>`).join("")}</ul>`
    : "Looks great!";
}
