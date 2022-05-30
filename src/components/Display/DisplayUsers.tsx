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
          <th className="text-center p-2">Username</th>
          <th className="text-center p-2">Name</th>
          <th className="text-center p-2">Public Repos</th>
          <th className="text-center p-2">Public Gists</th>
          <th className="text-center p-2">Followers</th>
          <th className="text-center p-2">Following</th>
          <th className="text-center p-2">Created At</th>
        </tr>
      </thead>
      <tbody>
      {
        users.map((user, index) => (
          <tr className={index % 2 === 0 ? tableRowBg : tableRow} key={user.login}>
            <GitHubUser {...user} />
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
 table-auto
 border
 shadow-md
 w-full
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
