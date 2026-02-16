const content = document.querySelector("#data-content");

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
        <h4 style="margin: 0; margin-bottom: 5px;" class="bold-font">${dataContent.name}</h4>
        <small style="margin: 0;" class="regular-font">${dataContent.description}</small>
        <div class="container-checkbox">
          <input ${isActive ? "checked" : ""} type="checkbox" 
          title="${isActive ? "Attiva" : "Disattiva"}">
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
}

function saveStatue(name, isCheck) {
  const save = JSON.parse(localStorage.getItem("save-check") || "{}");
  save[name] = isCheck;
  localStorage.setItem("save-check", JSON.stringify(save));
}
