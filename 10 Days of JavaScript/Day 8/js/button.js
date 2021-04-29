let button = document.createElement("button");
button.innerHTML = 0;
button.id = "btn";
button.style.fontSize = "24px";
button.style.width = "96px";
button.style.height = "48px";
button.addEventListener("click", () => {
  return button.innerHTML++;
});
document.body.appendChild(button);
