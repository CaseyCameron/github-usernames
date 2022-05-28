import GitHubUser from './GitHubUser';
import { User } from '../../utils/types'

interface Users {
  users: User[]
}

const DisplayUsers = ({ users }: Users) => {
  return (
    <div>
      {
        users.map(user => (
          <GitHubUser {...user} key={user.name}/>
          // Change the key to users.id
        ))
      }
    </div>
  )
}

export default DisplayUsers;
