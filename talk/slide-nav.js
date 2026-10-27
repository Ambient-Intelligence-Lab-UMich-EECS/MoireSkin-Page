// Slide navigator: a bar along the bottom edge that stays hidden until the
// pointer reaches the bottom of the window. Clicking a number jumps to the
// first step of that slide through the deck's own "goto" message (the one the
// presenter window uses), so dist/deck.js needs no change.
(() => {
  if (document.documentElement.classList.contains("export")) return;

  const EDGE = 64; // px from the bottom of the window that reveals the bar
  const HIDE_DELAY = 450;
  const pad = n => String(n).padStart(2, "0");
  const slides = [...document.querySelectorAll("section.slide")].map((el, i) => ({
    index: i,
    id: el.id,
    title: el.dataset.title || el.id,
  }));
  if (!slides.length) return;

  const style = document.createElement("style");
  style.textContent = `
#slide-nav {
  position: fixed;
  z-index: 100;
  left: 50%;
  bottom: 14px;
  max-width: calc(100vw - 32px);
  padding: 10px 12px 12px;
  border: 1px solid var(--line-strong);
  border-radius: 18px;
  background: rgb(9 16 29 / 86%);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  box-shadow: 0 18px 50px rgb(0 0 0 / 45%);
  color: var(--ink);
  font-family: Inter, "Helvetica Neue", Arial, sans-serif;
  opacity: 0;
  pointer-events: none;
  transform: translate(-50%, calc(100% + 24px));
  transition: transform 320ms var(--ease), opacity 220ms var(--ease);
  cursor: default;
}
#slide-nav.open {
  opacity: 1;
  pointer-events: auto;
  transform: translate(-50%, 0);
}
#slide-nav .label {
  height: 22px;
  margin: 0 4px 8px;
  overflow: hidden;
  color: var(--ink-3);
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 0.02em;
  white-space: nowrap;
  text-overflow: ellipsis;
}
#slide-nav .label b {
  margin-right: 8px;
  color: var(--fluo);
  font-weight: 700;
}
#slide-nav ol {
  display: flex;
  gap: 4px;
  margin: 0;
  padding: 0;
  overflow-x: auto;
  list-style: none;
  scrollbar-width: none;
}
#slide-nav button {
  width: 50px;
  height: 40px;
  padding: 0;
  border: 1px solid transparent;
  border-radius: 10px;
  background: transparent;
  color: var(--ink-3);
  font: inherit;
  font-size: 16px;
  font-weight: 650;
  font-variant-numeric: tabular-nums;
  cursor: pointer;
  transition: background 160ms, color 160ms, border-color 160ms;
}
#slide-nav button:hover {
  border-color: var(--line-strong);
  background: var(--fluo-soft);
  color: var(--ink);
}
#slide-nav button.current {
  background: var(--fluo);
  color: var(--bg);
}
`;
  document.head.append(style);

  const nav = document.createElement("nav");
  nav.id = "slide-nav";
  nav.setAttribute("aria-label", "Slides");
  const label = document.createElement("div");
  label.className = "label";
  const list = document.createElement("ol");
  const buttons = slides.map(s => {
    const li = document.createElement("li");
    const b = document.createElement("button");
    b.type = "button";
    b.tabIndex = -1;
    b.textContent = pad(s.index + 1);
    b.title = s.title;
    b.setAttribute("aria-label", `Slide ${s.index + 1}: ${s.title}`);
    // Keep focus off the button, so Space and Enter still drive the deck.
    b.addEventListener("mousedown", e => e.preventDefault());
    b.addEventListener("click", () => {
      window.postMessage({ type: "nav", action: "goto", index: s.index }, "*");
      setCurrent(s.index);
    });
    b.addEventListener("mouseenter", () => showLabel(s.index));
    li.append(b);
    list.append(li);
    return b;
  });
  nav.append(label, list);
  document.body.append(nav);

  let current = 0;
  function showLabel(i) {
    label.innerHTML = "";
    const n = document.createElement("b");
    n.textContent = pad(i + 1);
    label.append(n, slides[i].title);
  }
  function setCurrent(i) {
    if (i < 0 || i >= slides.length) return;
    buttons[current].classList.remove("current");
    current = i;
    buttons[current].classList.add("current");
    showLabel(current);
  }
  function readCurrent() {
    const id = decodeURIComponent(location.hash.slice(1)).split(".")[0];
    const i = slides.findIndex(s => s.id === id);
    setCurrent(i >= 0 ? i : 0);
  }
  readCurrent();
  nav.addEventListener("mouseleave", () => showLabel(current));

  // The deck rewrites the counter ("07 / 21") on every slide change.
  const counter = document.getElementById("counter");
  if (counter) {
    new MutationObserver(() => {
      const n = parseInt(counter.textContent, 10);
      if (n) setCurrent(n - 1);
    }).observe(counter, { childList: true, characterData: true, subtree: true });
  }
  window.addEventListener("hashchange", readCurrent);

  // Wheel and clicks on the bar belong to the bar, not to the slide behind it.
  nav.addEventListener("wheel", e => e.stopPropagation(), { passive: true });
  nav.addEventListener("pointerdown", e => e.stopPropagation());

  let hideTimer = 0;
  const open = () => {
    clearTimeout(hideTimer);
    if (!nav.classList.contains("open")) {
      readCurrent();
      nav.classList.add("open");
    }
  };
  const close = () => {
    clearTimeout(hideTimer);
    hideTimer = setTimeout(() => nav.classList.remove("open"), HIDE_DELAY);
  };
  window.addEventListener("pointermove", e => {
    if (e.pointerType === "touch") return;
    if (window.innerHeight - e.clientY <= EDGE || nav.contains(e.target)) open();
    else if (nav.classList.contains("open")) close();
  });
  document.addEventListener("pointerleave", close);
})();
