import { User } from "../../utils/types"

const GitHubUser = ({ 
  login, 
  html_url, 
  name, 
  public_repos, 
  public_gists, 
  followers, 
  following, 
  created_at
}: User) => {

  return (
    <>
      <td><a href={html_url} className="text-blue-500 underline">{login}</a></td>
      <td data-testid={`${login}-name`} >{name || "null"}</td>
      <td data-testid={`${login}-repos`}>{public_repos || 0}</td>
      <td data-testid={`${login}-gists`}>{public_gists || 0}</td>
      <td data-testid={`${login}-followers`}>{followers || 0}</td>
      <td data-testid={`${login}-following`}>{following || 0}</td>
      <td>{created_at}</td>
    </>
  )
}

export default GitHubUser;
