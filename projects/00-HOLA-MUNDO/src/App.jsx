import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { TwitterFolowCard } from "./TwitterFollowCard";

const formatUserName = (username) => {
  return `@${username}`;
};

const returnUserName = (username) => {
  return `${username}`;
};

const users = [
  {
    id: "123aa",
    isFollowing: true,
    userName: "midudev",
    name: "Miguel Ángel Durán",
    formatUserName,
    initialIsFollowing: true,
  },
  {
    id: "1224243asdasf",
    isFollowing: true,
    userName: "midudev",
    name: "Miguel Ángel Durán",
    formatUserName,
  },
  {
    id: "12325525avsv",
    isFollowing: false,
    userName: "midudev",
    name: "Miguel Ángel Durán",
    returnUserName,
  },
];

function App() {
  return (
    <div className="App">
      {users.map((user) => {
        return (
          <TwitterFolowCard
            isFollowing={user.isFollowing}
            userName={user.userName}
            name={user.name}
            formatUserName={user.formatUserName}
            initialIsFollowing={user.initialIsFollowing || null}
            key={user.id}
          />
        );
      })}
    </div>
  );
}

export default App;
