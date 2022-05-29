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
      <div className="heading">Heading Info</div>
      <div><a href={html_url}>{login}</a></div>
      <div>{name}</div>
      <div>{public_repos}</div>
      <div>{public_gists}</div>
      <div>{followers}</div>
      <div>{following}</div>
      <div>{created_at}</div>
    </div>
  )
}
