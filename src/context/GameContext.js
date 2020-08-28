import React, { useState, createContext, useEffect } from "react";
import axios from "axios";

export const GameContext = createContext();

export const GameProvider = (props) => {
  const [gameList, setGameList] = useState(null);

  useEffect(() => {
    axios
      .get("https://wild-games.herokuapp.com/api/v1")
      .then((response) => response.data)
      .then((data) => {
        setGameList(data);
      });
  }, []);

  return (
    <GameContext.Provider value={{ gameList, setGameList }}>
      {props.children}
    </GameContext.Provider>
  );
};
