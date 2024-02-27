const bars = document.querySelector(".bars");
const close = document.querySelector(".close");
const listContainer = document.querySelector(".list-container");

bars.addEventListener("click", () => {
  listContainer.classList.add("show-list-container");
});
close.addEventListener("click", () => {
  listContainer.classList.remove("show-list-container");
});
