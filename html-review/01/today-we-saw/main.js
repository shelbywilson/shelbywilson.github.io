const mainArea = document.querySelector("#main");

for (let i = 0; i < data.length; i++) {
  let item = data[i];
  let newItem = document.createElement("span");
  newItem.classList.add("item");
  newItem.setAttribute("id", `${data.indexOf(item)}`);
  i == data.length - 1
    ? (newItem.innerText = `and ${item.alt}.`)
    : (newItem.innerText = `${item.alt}, `);
  mainArea.appendChild(newItem);
}

const items = document.querySelectorAll(".item");
const bgImg = document.querySelector("#bgImg");
items.forEach((item) => {
  item.addEventListener("mouseover", () => {
    item.classList.add("active");
    let src = data[item.id].src;
    bgImg.src = src;
  });

  item.addEventListener("mouseleave", () => {
    item.classList.remove("active");
    bgImg.src = "";
  });
});
