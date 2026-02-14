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
        <img src="${d.logo}" alt="${d.name} Logo">
        <h4>${d.name}</h4>
        <p>${d.description}</p>
        <button>${d.isActive}</button>
    `);
  });
}

function divElement(dataContent) {
  let div = document.createElement("div");
  div.innerHTML = dataContent;
  content.appendChild(div);
}
