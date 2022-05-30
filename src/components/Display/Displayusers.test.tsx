import { render, screen } from '@testing-library/react';
import DisplayUsers from './DisplayUsers';
import { User } from '../../utils/types';

const values: User[] = [
  { 
    login: 'CaseyCameron',
    html_url: 'https://github.com/CaseyCameron',
    name: 'null',
    public_gists: 0,
    public_repos: 112,
    followers: 23,
    following: 36,
    created_at: '06/24/2017'
  },
  { 
    login: 'DwayneJohnson',
    html_url: 'https://github.com/DwayneJohnson',
    name: 'Dwayne',
    public_gists: 0,
    public_repos: 24,
    followers: 25,
    following: 100,
    created_at: '01/24/2020'
  },
]

test('renders each user in a table', () => {
  render(<DisplayUsers users={values}/>);
  
  // validate one table row at a time
  values.forEach(({ login, created_at }, index) => {
    // validate the profile/username and it's href
    expect(screen.getByText(login).textContent).toEqual(values[index].login);
    const link = screen.getByText(values[index].login) as HTMLAnchorElement;
    expect(link.href).toEqual(values[index].html_url);

    // validate using data-testid's to accommodate or duplicate values elsewhere in row
    expect(screen.getByTestId(`${values[index].login}-name`).textContent).toEqual(values[index].name);
    expect(screen.getByTestId(`${values[index].login}-gists`).textContent).toEqual(String(values[index].public_gists));
    expect(screen.getByTestId(`${values[index].login}-repos`).textContent).toEqual(String(values[index].public_repos));
    expect(screen.getByTestId(`${values[index].login}-followers`).textContent).toEqual(String(values[index].followers));
    expect(screen.getByTestId(`${values[index].login}-following`).textContent).toEqual(String(values[index].following));
    
    // validate the date
    expect(screen.getByText(created_at).textContent).toEqual(values[index].created_at);
  })
});
