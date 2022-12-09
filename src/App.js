import { Children } from "react"
import useRemoteSensorMonitor from "./useRemoteSensorMonitor"

function App() {
  const data = useRemoteSensorMonitor()
  console.log({ data })

  if (!data || !data.length) return null

  return (
    <table>
      <thead>
        <tr>
          {Children.toArray(
            Object.keys(data[0]).map((key) => <th>{key}</th>)
          )}
        </tr>
      </thead>
      <tbody>
        {Children.toArray(
          data.map((obj) => (
            <tr>
              {Children.toArray(Object.values(obj).map((value) => <td>{value}</td>))}
            </tr>
          ))
        )}
      </tbody>
    </table>
  )
}

export default App
