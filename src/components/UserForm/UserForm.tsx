import { ChangeEvent } from 'react'
import { FormProps } from '../../utils/types';

export default function UserForm({ formState, setFormState, handleSubmit }: FormProps) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormState(event.target.value);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Enter GitHub Username</label>
        <input 
          type="text"
          name="username"
          value={formState}
          onChange={handleChange}
        />
      </form>
    </>
  )
}
