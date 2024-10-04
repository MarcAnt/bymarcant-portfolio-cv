(async (d) => {
  let $enButton = d.querySelector("#en-button"),
    $esButton = d.querySelector("#es-button");

  function translator(translations) {
    d.querySelectorAll("[data-lang]").forEach((element) => {
      const dataLangKey = element.getAttribute("data-lang");

      for (const translate in translations) {
        if (typeof translations[translate] === "object") {
          for (const key in translations[translate]) {
            let dataKey = dataLangKey.split(".").at(-1);
            if (key === dataKey) {
              element.innerHTML = translations[translate][key];
            }
          }
        } else {
          if (translate === dataLangKey) {
            element.innerHTML = translations[translate];
          }
        }
      }
    });
  }

  async function fetchLang(lang = "en") {
    let urlFile = `../lang/lang.json`;
    try {
      const getLang = await fetch(urlFile);
      const json = await getLang.json();
      const langTranslations = json[lang];
      translator(langTranslations);
    } catch (error) {
      throw new Error("No lang file");
    }
  }

  function main() {
    fetchLang();

    $enButton.addEventListener("click", (e) => {
      e.target.classList.add("active-lang");
      $esButton.classList.remove("active-lang");
      $enButton.setAttribute("title", "English");
      $esButton.setAttribute("title", "Spanish");
      fetchLang("en");
    });
    $esButton.addEventListener("click", (e) => {
      e.target.classList.add("active-lang");
      $enButton.classList.remove("active-lang");
      $enButton.setAttribute("title", "Inglés");
      $esButton.setAttribute("title", "Español");
      fetchLang("es");
    });
  }

  d.addEventListener("DOMContentLoaded", main);
})(document);
