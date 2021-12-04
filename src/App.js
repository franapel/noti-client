import { useState } from "react"

const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  rectangle: {
    width: 300,
    height: 200,
    position: 'relative',
    borderRadius: 20,
    backgroundColor: 'blue'
  },
  bubble: {
    width: 60,
    height: 60,
    position: 'absolute',
    top: -20,
    right: -20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    backgroundColor: 'red',
    color: 'white',
    fontSize: 30
  },
  popup: {
    position: 'absolute',
    bottom: 50,
    right: 50,
    padding: 8,
    border: '8px solid gray',
    borderRadius: 10,
    color: 'gray'
  },
  hidden: {
    visibility: 'hidden'
  }
}


const App = () => {

  const [notifications, setNotifications] = useState([])

  return (
    <div style={styles.container}>
      <div style={styles.rectangle}>
        <div style={styles.bubble}>
          {notifications.length}
        </div>
      </div>
      <div style={styles.popup}>
        Nueva Notificacion
      </div>
    </div>
  )
}

export default App
