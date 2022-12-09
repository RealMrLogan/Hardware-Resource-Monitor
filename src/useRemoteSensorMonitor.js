import { useEffect, useState } from "react"
const { ipcRenderer } = window.require('electron')

const INTERVAL = 250 //ms

const useRemoteSensorMonitor = () => {
  const [state, setState] = useState()

  useEffect(() => {
    const request = async () => {
      const data = await ipcRenderer.sendSync('resource-monitor', 'ping')
      setState(data)
    }
    const interval = setInterval(request, INTERVAL)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return state
}

export default useRemoteSensorMonitor