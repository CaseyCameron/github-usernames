import { User } from "../../utils/types"

export default function GitHubUser({ 
  login, 
  html_url, 
  name, 
  public_repos, 
  public_gists, 
  followers, 
  following, 
  created_at
}: User) {
  return (
    <div className="github-user">
      <div><a href={html_url}>Profile: {login}</a></div>
      <div>Name: {name || "null"}</div>
      <div>Public Repos: {public_repos || "null"}</div>
      <div>Public Gists: {public_gists || "null"}</div>
      <div>Followers: {followers || "null"}</div>
      <div>Following: {following || "null"}</div>
      <div>Created At: {created_at || "null"}</div>
    </div>
  )
}
