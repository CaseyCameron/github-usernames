import GitHubUser from './GitHubUser';
import { Users } from '../../utils/types'

const DisplayUsers = ({ users }: Users) => {
  return (
    <div>
      <div className="heading">Heading Info</div>
      {
        users.map(user => (
          <GitHubUser {...user} key={user.login}/>
          // Change the key to users.id
        ))
      }
    </div>
  )
}

export default DisplayUsers;
