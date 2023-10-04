(() => {
  (() => {
    "use strict";
    var r = {};
    function n(t, e) {
      return `${t}^${e} = ${t ** e}`;
    }
    function o() {
      const t = document.getElementById("root");
      if (t) t.textContent = n(2, 5);
      else throw new Error("root element not found!");
    }
    o();
  })();
})();
