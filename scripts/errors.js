import { errorMessage } from "./elements";
import { setLoadingState } from "./setLoadingState";

const errors = {
  emptyInput: "Type a repo name to search.",
  undefinedRepo: "Select a repo type to search.",
  networkIssues: "Network issues, Try again.",
  unknownError: "Unknown error, Try again.",
  undefinedRepos: "Didn't find repos with this name",
};

const errorsCheck = (searchOutput, selectedRepo) => {
  switch (true) {
    case !searchOutput:
      displayError("emptyInput");
      return true;

    case !selectedRepo:
      displayError("undefinedRepo");
      return true;

    default:
      displayError(null);
      return false;
  }
};

const displayError = (errorType) => {
  errorMessage.textContent = "";

  if (!errorType) {
    errorMessage.classList.remove("appear");
    return;
  }

  const message = errors[errorType] || "Unknown error";

  errorMessage.textContent = message;
  errorMessage.classList.add("appear");
  setLoadingState(false);
};

export { errorsCheck, displayError };
