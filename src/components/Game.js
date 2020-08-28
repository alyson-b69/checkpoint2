import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GameContext } from "../context/GameContext";
import { FaRegCalendarAlt } from "react-icons/fa";
import { Card, Button } from "react-bootstrap";

const Game = ({ game }) => {
  const { gameList, setGameList } = useContext(GameContext);

  const gameLink = "/game/" + game.id;

  const deleteGame = (e) => {
    e.preventDefault();
    setGameList(gameList.filter((item) => item.id !== game.id));
  };

  return (
    <Card key={game.id}>
      <Card.Img variant="top" src={game.background_image} />
      <Card.Body className="center">
        <Card.Title>{game.name}</Card.Title>
        <Card.Text as="div">
          <p>
            <strong>Rating : </strong>
            {game.rating} / 5
          </p>

          <ul className="details-list">
            <strong>Rating : </strong>
            {game.genres.map((genre) => (
              <li key={genre.id} className="details-item">
                {genre.name}{" "}
              </li>
            ))}
          </ul>

          <Link to={{ pathname: gameLink, state: { detail: game } }}>
            <Button className="mr-2">View Game</Button>
          </Link>
          <Button variant="outline-danger" onClick={deleteGame}>
            Delete Game
          </Button>
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <FaRegCalendarAlt /> {game.released}
      </Card.Footer>
    </Card>
  );
};

export default Game;
