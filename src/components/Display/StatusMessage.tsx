interface StatusMessageProps {
  statusMessage: string;
}

const StatusMessage = ({statusMessage}: StatusMessageProps) => {
  return (
    <div className={status}>
      Status: <span className="text-gray-700">{statusMessage}</span>
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
