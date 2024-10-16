(async (d) => {
  let globalLang = "en";

  const portfolioHeader = d.querySelector(".header-content-modal");
  const contactHeader = d.querySelector(".header-content-modal-contact");
  const skillsHeader = d.querySelector(".header-content-modal-skills");
  const goalsHeader = d.querySelector(".header-content-modal-goals");
  const infoContainer = d.querySelector(".title-container");

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

  async function fetchLang(lang = globalLang) {
    let urlFile =
      `https://raw.githubusercontent.com/MarcAnt/bymarcant-portfolio-cv/refs/heads/main/lang/lang.json` ||
      "../lang/lang.json";
    try {
      const getLang = await fetch(urlFile, {
        headers: {
          Accept: "application/json",
        },
      });
      const json = await getLang.json();
      const langTranslations = json[lang];
      translator(langTranslations);
    } catch (error) {
      throw new Error("No lang file");
    }
  }

  const buttonLangContainer = (section = "contact", addClass = "") => {
    return `<div class="buttons-lang-container">
      <button
        type="button"
        id="en-button-${section}"
        class="button-lang active-lang ${addClass}"
        data-text-lang="en"
        title="English"
        tabindex="0"
      >En
      </button>
      <button
        type="button"
        id="es-button-${section}"
         data-text-lang="es"
        class="button-lang ${addClass}"
        title="Español"
        tabindex="0"
      >Es
      </button>
    
      <div class="lang-icon">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802" />
        </svg>
      </div>
    </div>
      
    
`;
  };

  function main() {
    fetchLang(globalLang);

    const buttonCloseModalPorfolio = portfolioHeader.children[1];
    const buttonCloseModalContact = contactHeader.children[1];
    const buttonCloseModalSkills = skillsHeader.children[1];
    const buttonCloseModalGoals = goalsHeader.children[1];

    const sections = ["info", "portfolio", "skills", "goals", "contact"];

    infoContainer.insertAdjacentHTML(
      "beforeend",
      buttonLangContainer("info", "isOver")
    );

    buttonCloseModalPorfolio.insertAdjacentHTML(
      "beforebegin",
      buttonLangContainer("portfolio")
    );

    buttonCloseModalContact.insertAdjacentHTML(
      "beforebegin",
      buttonLangContainer("contact")
    );

    buttonCloseModalSkills.insertAdjacentHTML(
      "beforebegin",
      buttonLangContainer("skills", "light")
    );

    buttonCloseModalGoals.insertAdjacentHTML(
      "beforebegin",
      buttonLangContainer("goals", "light")
    );

    sections.forEach((element) => {
      d.querySelector(`#en-button-${element}`).addEventListener("click", () => {
        d.querySelectorAll(`.button-lang`).forEach((element) => {
          const dataLangText = element.getAttribute("data-text-lang");

          if (
            element.textContent.trim().toLowerCase() === "en" &&
            dataLangText === "en"
          ) {
            element.classList.add("active-lang");
          } else {
            element.classList.remove("active-lang");
          }
        });
        fetchLang("en");
        globalLang = "en";
      });

      d.querySelector(`#es-button-${element}`).addEventListener(
        "click",
        (e) => {
          d.querySelectorAll(`.button-lang`).forEach((element) => {
            const dataLangText = element.getAttribute("data-text-lang");

            console.log(dataLangText);

            if (
              element.textContent.trim().toLowerCase() === "es" &&
              dataLangText === "es"
            ) {
              element.classList.add("active-lang");
            } else {
              element.classList.remove("active-lang");
            }
          });

          fetchLang("es");
          globalLang = "es";
        }
      );
    });
  }

  d.addEventListener("DOMContentLoaded", main);
})(document);
