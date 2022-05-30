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
      <td>{name || "null"}</td>
      <td>{public_repos || "null"}</td>
      <td>{public_gists || "null"}</td>
      <td>{followers || "null"}</td>
      <td>{following || "null"}</td>
      <td>{created_at || "null"}</td>
    </>
  )
}

export default GitHubUser;
