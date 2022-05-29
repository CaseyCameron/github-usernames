export const fetchGitHubProfile = async (username: string) => {
  try {
    const data = await fetch(`https://api.github.com/users/${username}`)
    return data.json();
  } catch (error: any) {
    console.log(error.message);
  }
}
