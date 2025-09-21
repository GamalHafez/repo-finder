import { displayRepos } from "./displayRepos";
import { loader } from "./elements";

function setLoadingState(loadingState) {
  loader.classList.toggle("appear", loadingState);
  if (loadingState) displayRepos(null);
}

export { setLoadingState };
