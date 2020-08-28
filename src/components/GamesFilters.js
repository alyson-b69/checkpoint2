import React, { useContext, useState } from "react";
import axios from "axios";
import { GameContext } from "../context/GameContext";
import { Button, Container, Row, Col } from "react-bootstrap";

const GamesFilters = () => {
  const { gameList, setGameList } = useContext(GameContext);
  const [isViewBest, setIsViewBest] = useState(false);

  const viewBest = () => {
    if (!isViewBest) {
      setGameList(gameList.filter((game) => game.rating > 4.5));
      setIsViewBest(true);
    } else {
      axios
        .get("https://wild-games.herokuapp.com/api/v1")
        .then((response) => response.data)
        .then((data) => {
          setGameList(data);
          setIsViewBest(false);
        });
    }
  };

  return (
    <Container className="mb-3">
      <Row>
        <h3 className="mr-2">Filtres </h3>
        <Button onClick={viewBest}>
          {isViewBest ? "All Games" : "Best Games"}
        </Button>
      </Row>
    </Container>
  );
};

export default GamesFilters;
