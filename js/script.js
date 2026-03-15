function setLang(lang) {
  document.getElementById("btn-en").classList.toggle("active", lang === "en");
  document.getElementById("btn-es").classList.toggle("active", lang === "es");

  document.querySelectorAll("[data-en]").forEach(function (el) {
    var val = el.getAttribute("data-" + lang);
    if (val !== null) el.innerHTML = val;
  });

  document.querySelectorAll("[data-href-en]").forEach(function (el) {
    el.href = el.getAttribute("data-href-" + lang);
  });

  document.documentElement.lang = lang;

  document.title =
    lang === "es"
      ? "Juan Camilo Escobar — Portafolio"
      : "Juan Camilo Escobar — Portfolio";

  localStorage.setItem("lang", lang);
}

(function () {
  var stored = localStorage.getItem("lang");
  var browser =
    navigator.language && navigator.language.startsWith("es") ? "es" : "en";
  setLang(stored || browser);
})();

document.querySelectorAll("[data-href-en]").forEach(function (el) {
  el.href = el.getAttribute("data-href-" + lang);
});
