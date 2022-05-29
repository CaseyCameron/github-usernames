export const mungeGitHubData = (userData: GitHubData) => {
  const {
    login, 
    html_url, 
    name, 
    public_repos, 
    public_gists, 
    followers, 
    following, 
    created_at
  } = userData;
  // userData.created_at = created_at.getDate()
  const date = mungeDate(created_at);
  return { login, html_url, name, public_repos, public_gists, followers, following, date }
}

export const mungeDate = (date: string) => {
  return `${date.slice(5,7)}/${date.slice(8,10)}/${date.slice(0,4)}`
}

interface GitHubData {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  name?: any;
  company?: any;
  blog: string;
  location: string;
  email?: any;
  hireable?: any;
  bio: string;
  twitter_username?: any;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: Date;
}
