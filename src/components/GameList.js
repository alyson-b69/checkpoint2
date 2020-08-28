import React, { useContext } from "react";
import Game from "./Game";
import GamesFilters from "./GamesFilters";
import { GameContext } from "../context/GameContext";
import { CardColumns, Container } from "react-bootstrap";

const GameList = () => {
  const { gameList } = useContext(GameContext);

  if (gameList) {
    return (
      <Container>
        <GamesFilters />

        <CardColumns className="Game">
          {gameList.map((game) => (
            <Game game={game} key={game.id} />
          ))}
        </CardColumns>
      </Container>
    );
  }

  return <div>Loading</div>;
};

export default GameList;
