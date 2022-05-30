import GitHubUser from './GitHubUser';
import { User } from '../../utils/types';
interface Users {
  users: User[]
}

const DisplayUsers = ({ users }: Users) => {
  return (
    <div className="overflow-auto">
    <table className={heading}>
      <thead>
        <tr>
          <th className="text-left p-2">Name</th>
          <th className="text-left p-2">Pubthc Repos</th>
          <th className="text-left p-2">Pubthc Gists</th>
          <th className="text-left p-2">Followers</th>
          <th className="text-left p-2">Profile</th>
          <th className="text-left p-2">Following</th>
          <th className="text-left p-2">Created At</th>
        </tr>
      </thead>
      <tbody>
      {
        users.map((user, index) => (
          <tr className={index % 2 === 0 ? tableRowBg : tableRow}>
            <GitHubUser {...user} key={user.login}/>
          </tr>
          ))
        }
      </tbody>
    </table>
    </div>
  )
}

export default DisplayUsers;

const heading = `
 table-fixed
 border
 shadow-md
`

const tableRow = `
  border
  text-center
`
const tableRowBg = `
  border
  text-center
  bg-gray-200
`
