import { reposBox } from "./elements.js";

const createRepoElement = (imgSrc, repoName, repoUrl) => {
  return `
  <a class="repo" href="${repoUrl}" target="_blank">
    <img class="image" src="${imgSrc}" alt="GitHub profile picture of ${repoName}">
    <p class="text">${repoName}</p>
  </a>
  `;
};

const displayRepos = (repoList) => {
  let newDomElements = [];

  if (repoList === null) {
    reposBox.innerHTML = "";
  } else {
    repoList.forEach((repo) => {
      const repoElement = createRepoElement(
        repo.avatar_url,
        repo.login,
        repo.html_url
      );
      newDomElements.push(repoElement);
    });
    reposBox.insertAdjacentHTML("afterbegin", newDomElements.join(""));
  }
};

export { displayRepos };
