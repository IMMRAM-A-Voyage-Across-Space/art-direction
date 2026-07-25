// Auto-render hex colour codes found in inline <code> spans as .swatch chips.
// Reuses the .swatch class already hand-authored elsewhere in the docs so
// auto-decorated swatches match the 91 existing ones pixel-for-pixel.
(function () {
  var HEX_RE = /^#(?:[0-9a-f]{3}|[0-9a-f]{6}|[0-9a-f]{8})$/i;

  function decorate() {
    document.querySelectorAll("code:not([data-swatch])").forEach(function (code) {
      code.setAttribute("data-swatch", "1"); // mark seen — idempotent, never re-checked
      if (code.closest("pre")) return; // skip fenced code blocks, inline only
      var text = code.textContent.trim();
      if (!HEX_RE.test(text)) return;
      var swatch = document.createElement("span");
      swatch.className = "swatch";
      swatch.style.background = text;
      swatch.setAttribute("aria-hidden", "true");
      code.parentNode.insertBefore(swatch, code);
    });
  }

  // Zensical/Material for MkDocs expose `document$`, an observable that
  // fires once on first load and again after every instant-navigation page
  // swap. A plain DOMContentLoaded listener only fires once, so the
  // decoration would vanish the moment the user clicks an internal link
  // with navigation.instant enabled — document$ is what survives that.
  if (typeof document$ !== "undefined" && document$.subscribe) {
    document$.subscribe(decorate);
  } else {
    document.addEventListener("DOMContentLoaded", decorate);
    var target = document.querySelector(".md-content") || document.body;
    new MutationObserver(decorate).observe(target, { childList: true, subtree: true });
  }
})();
