import { displayRepos } from "./displayRepos";
import { displayError } from "./errors";
import { setLoadingState } from "./setLoadingState";

const USERS_API = "https://api.github.com/search/users?q=";

async function performSearch(selectedRepo, searchOutput) {
  try {
    const urlToSearch = `${USERS_API}${searchOutput}+type:${selectedRepo}`;

    const response = await fetch(urlToSearch);
    if (!response.ok) throw new Error("networkIssues");

    const repos = await response.json();
    if (!repos) throw new Error("networkIssues");
    if (!repos.items.length) throw new Error("undefinedRepos");

    const relatedRepos = repos.items.slice(0, 9);

    setLoadingState(false);
    displayRepos(relatedRepos);
  } catch (error) {
    displayError(error.message || "unknownError");
  }
}

export { performSearch };
