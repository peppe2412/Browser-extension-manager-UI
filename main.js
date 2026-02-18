const content = document.querySelector("#data-content");
const buttonAll = document.querySelector("#button-all");
const buttonActive = document.querySelector("#button-active");
const buttonInactive = document.querySelector("#button-inactive");

fetch("data.json")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    return appendData(data);
  })
  .catch((error) => {
    console.error(error);
  });

function appendData(data) {
  data.forEach((d) => {
    divElementDataContent(d);
  });
}

function divElementDataContent(dataContent) {
  let div = document.createElement("div");

  const getContent = JSON.parse(localStorage.getItem("save-check") || "{}");
  const isActive = getContent[dataContent.name] ?? dataContent.isActive;

  div.classList.add("content-data-box");
  div.innerHTML = `
      <div class="logo-data-content-box">
        <img src="${dataContent.logo}" alt="${dataContent.name} Logo">
      </div>
      <div>
        <h2 class="bold-font title-data-content">${dataContent.name}</h2>
        <small style="margin: 0;" class="regular-font">${dataContent.description}</small>
        <div class="container-checkbox">
          <input aria-label="Select to change" name="input-checked" ${isActive ? "checked" : ""} type="checkbox" title="${isActive ? "Attiva" : "Disattiva"}">
        </div>
      </div>
    `;
  content.appendChild(div);

  const checkboxInput = div.querySelector('input[type= "checkbox"]');
  checkboxInput.addEventListener("change", (e) => {
    const isChecked = e.target.checked;
    saveStatue(dataContent.name, isChecked);
    e.target.title = isChecked ? "Disattiva" : "Attiva";
  });

  buttonActive.addEventListener("click", () => {
    getDataContents("active");
  });

  buttonInactive.addEventListener("click", () => {
    getDataContents("inactive");
  });

  buttonAll.addEventListener("click", () => {
    getDataContents("all");
  });
}

function getDataContents(filterType) {
  const inputsChecked = document.querySelectorAll(
    'input[name="input-checked"]',
  );

  inputsChecked.forEach((input) => {
    const dataContentBox = input.closest(".content-data-box");

    switch (filterType) {
      case "active":
        dataContentBox.style.display = input.checked ? "flex" : "none";
        break;
      case "inactive":
        dataContentBox.style.display = !input.checked ? "flex" : "none";
        break;
      case "all":
        dataContentBox.style.display = "flex";
        break;
      default:
        dataContentBox.style.display = "flex";
        console.error("Si è verificato un errore!");
        break;
    }
  });
}

function saveStatue(name, isCheck) {
  const save = JSON.parse(localStorage.getItem("save-check") || "{}");
  save[name] = isCheck;
  localStorage.setItem("save-check", JSON.stringify(save));
}
