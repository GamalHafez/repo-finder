import { finderForm, searchInput, labels } from "./scripts/elements.js";
import { errorsCheck } from "./scripts/errors.js";
import { highlightSelectedRepo } from "./scripts/highlightSelectedRepo.js";
import { performSearch } from "./scripts/performSearch.js";
import { setLoadingState } from "./scripts/setLoadingState.js";

const labelsAccessability = (event) => {
  if (event.key === " " || event.code === "Space") {
    event.currentTarget.click();
  }
};

labels.forEach((label) => {
  label.addEventListener("keydown", labelsAccessability);
  label.addEventListener("click", highlightSelectedRepo);
});

const formHandler = async (event) => {
  event.preventDefault();

  const searchOutput = searchInput.value.trim();
  const selectedRepo = document.querySelector('input[type="radio"]:checked');

  const areThereErrors = errorsCheck(searchOutput, selectedRepo);
  if (!areThereErrors) {
    setLoadingState(true);
    performSearch(selectedRepo.value, searchOutput);
  }
};

finderForm.addEventListener("submit", formHandler);
