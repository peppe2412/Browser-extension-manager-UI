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
  div.classList.add("content-data-box");
  div.innerHTML = `
      <div class="logo-data-content-box">
        <img src="${dataContent.logo}" alt="${dataContent.name} Logo">
      </div>
      <div>
        <h4 style="margin: 0; margin-bottom: 5px;" class="bold-font">${dataContent.name}</h4>
        <small style="margin: 0;" class="regular-font">${dataContent.description}</small>
        <div class="container-checkbox">
          <input ${dataContent.isActive ? "checked" : ""} type="checkbox" 
          title="${dataContent.isActive ? "Disattiva" : "Attiva"}">
        </div>
      </div>
    `;
  content.appendChild(div);
}
