/* OpenMotionFX — progressive enhancement only. The site works without this file. */
(function () {
  "use strict";
  document.documentElement.classList.add("js");

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* Scroll reveals — content is visible by default; this only adds the entrance. */
  if (!reduceMotion && "IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.05 });
    document.querySelectorAll(".reveal").forEach(function (el) { io.observe(el); });
  } else {
    document.querySelectorAll(".reveal").forEach(function (el) { el.classList.add("in"); });
  }

  /* Hero viewfinder: run the motion path, then run the identical move again.
     The point is the demo — take 2 lands exactly on take 1. */
  var vf = document.querySelector(".viewfinder");
  if (vf) {
    var takeEl = vf.querySelector("[data-take-label]");
    var tcEl = vf.querySelector(".timecode");
    var replay = vf.querySelector(".vf-replay");
    var tcTimer = null;
    var MOVE_MS = 2600;

    function runTimecode() {
      if (reduceMotion || !tcEl) return;
      var start = performance.now();
      cancelAnimationFrame(tcTimer);
      (function tick(now) {
        var t = Math.min(now - start, MOVE_MS);
        var frames = Math.floor(t / 1000 * 24);
        var ss = Math.floor(frames / 24);
        var ff = frames % 24;
        tcEl.textContent = "TC 00:00:" + String(ss).padStart(2, "0") + ":" + String(ff).padStart(2, "0");
        if (t < MOVE_MS) tcTimer = requestAnimationFrame(tick);
      })(start);
    }

    function runTake(n) {
      vf.classList.remove("run");
      // force reflow so the animation restarts
      void vf.offsetWidth;
      vf.dataset.take = n;
      if (takeEl) takeEl.textContent = "TAKE " + String(n).padStart(2, "0");
      vf.classList.add("run");
      runTimecode();
    }

    if (reduceMotion) {
      vf.classList.add("run"); // static end state via CSS
    } else {
      // Take 1 on load, take 2 shortly after — same path, same result.
      setTimeout(function () { runTake(1); }, 500);
      setTimeout(function () { runTake(2); }, 500 + MOVE_MS + 900);
      var takeCount = 2;
      if (replay) replay.addEventListener("click", function () {
        takeCount += 1;
        runTake(takeCount);
      });
    }
  }

  /* Rig cost calculator (system page). Sums real BOM ranges from the hardware spec. */
  var calc = document.querySelector("[data-calc]");
  if (calc) {
    var boxes = calc.querySelectorAll("input[type=checkbox]");
    var lowEl = document.querySelector("[data-calc-low]");
    var figEl = document.querySelector("[data-calc-figure]");
    var countEl = document.querySelector("[data-calc-count]");

    function update() {
      var lo = 0, hi = 0, n = 0;
      boxes.forEach(function (b) {
        if (b.checked) {
          lo += parseInt(b.dataset.lo, 10);
          hi += parseInt(b.dataset.hi, 10);
          n += 1;
        }
      });
      if (figEl) figEl.textContent = n === 0 ? "$0" : "$" + lo + "–" + hi;
      if (lowEl) lowEl.textContent = n;
      if (countEl) countEl.textContent = n === 1 ? "1 module" : n + " modules";
    }
    boxes.forEach(function (b) { b.addEventListener("change", update); });
    update();
  }
})();
