export function greet(name) {
  return `Hello, ${name}!`;
}

if (typeof document !== "undefined") {
  const heading = document.getElementById("greeting");

  if (heading) {
    heading.textContent = greet("Jabbar");
  }
}
const status = document.getElementById("#schedule");
const tbody = document.getElementById("#schedule");
tbody.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-day]");
  if (!button) return;
  console.log(button.dataset.day);
});
