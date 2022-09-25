import logo from './logo.svg';
import Nofications from './Notifications';
import * as EpnsAPI from "@epnsproject/sdk-restapi";
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const recipientAddress = 'eip155:42:0x70B60b1Ad43bc00f42a14f8C9738537CB1076b18'
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const notifications = async () => {
      const notifs = await EpnsAPI.user.getFeeds({
        user: recipientAddress,
        env: 'staging'
      })
      console.log(notifs)
      setNotifications(notifs);
    };
    notifications()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        {notifications && (
          <Nofications notifications={notifications}></Nofications>
        )}
      </header>
    </div>
  );
}

export default App;
