async function fetchData() {
  const username = "leandrodiascarvalho";
  const url = `https://api.github.com/users/${username}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    document.getElementById("profile-avatar").src = data.avatar_url;
    document.getElementById("profile-name").textContent = data.name;
    document.getElementById("profile-username").textContent = `@${data.login}`;
    document.getElementById("repos-count").textContent = data.public_repos;
    document.getElementById("followers-count").textContent = data.followers;
    document.getElementById("following-count").textContent = data.following;
    document.getElementById("profile-link").textContent =
      data.html_url || "No bio available";
  } catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
  }
}
window.onload = fetchData;
