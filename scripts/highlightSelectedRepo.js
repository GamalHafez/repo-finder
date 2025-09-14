const highlightSelectedRepo = (event) => {
  const target = event.currentTarget;
  if (!target) return;

  const previousChecked = document.querySelector(".checked");

  if (previousChecked && previousChecked !== target) {
    previousChecked.classList.remove("checked");
  }

  target.classList.add("checked");
};

export { highlightSelectedRepo };
