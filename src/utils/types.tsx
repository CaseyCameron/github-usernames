export type User = {
  login: string;
  html_url: string;
  name?: string | null;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
};
