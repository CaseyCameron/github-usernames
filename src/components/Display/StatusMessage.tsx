interface StatusMessageProps {
  statusMessage: string;
}

const StatusMessage = ({statusMessage}: StatusMessageProps) => {
  return (
    <div className={status}>
      Status: <span className={statusMessage === "Success" ? "text-green-700" : "text-red-700"}>{statusMessage}</span>
    </div>
  )
}

export default StatusMessage;

const status = `
  text-black-300
  shadow-sm
  rounded
  bg-slate-50
  m-2
`
