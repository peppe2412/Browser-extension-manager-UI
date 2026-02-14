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
    divElement(`
      <div class="logo-data-content-box">
        <img src="${d.logo}" alt="${d.name} Logo">
      </div>
      <div>
        <h4 style="margin: 0; margin-bottom: 5px;" class="bold-font">${d.name}</h4>
        <small style="margin: 0;" class="regular-font">${d.description}</small>
        <div class="container-checkbox">
          <input type="checkbox" title="Attiva">
        </div>
      </div>
    `);
  });
}

function divElement(dataContent) {
  let div = document.createElement("div");
  div.classList.add("content-data-box");
  div.innerHTML = dataContent;
  content.appendChild(div);
}
