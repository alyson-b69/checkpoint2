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
        <Col xs={2} className="h3 mr-2">
          Filtres
        </Col>
        <Col xs={6}>
          <Button onClick={viewBest}>
            {isViewBest ? "All Games" : "Best Games"}
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default GamesFilters;
