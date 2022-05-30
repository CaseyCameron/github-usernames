import { ChangeEvent } from 'react'

interface FormProps {
  formState: string;
  setFormState: Function;
  handleSubmit: React.FormEventHandler<HTMLFormElement>;
}

export default function UserForm({ formState, setFormState, handleSubmit }: FormProps) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormState(event.target.value);
  }

  return (
    <div className={form}>
      <form onSubmit={handleSubmit}>
        <label className={label}>Save GitHub Username to Database</label>
        <input className={input}
          type="text"
          name="username"
          value={formState}
          onChange={handleChange}
        />
      </form>
    </div>
  )
}

const form = `
  bg-white
  shadow-md
  rounded
  px-8
  pt-6
  pb-8
  mb-4
`
const label = `
  block
  text-gray-700>
  text-sm
  font-bold
  mb-2
`

const input = `
  drop-shadow
  appearance-none
  border
  rounded
  w-full
  py-2
  px-3
  text-gray-700
  leading-tight
  focus:outline-none
  focus:shadow-outline 
`
