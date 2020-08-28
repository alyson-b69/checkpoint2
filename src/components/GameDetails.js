import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { Card, Image, Container } from "react-bootstrap";

const GameDetails = (props) => {
  const game = props.location.state.detail;

  return (
    <Container className="mt-5 mb-5 text-center">
      <Card key={game.id}>
        <Card.Img variant="top" src={game.background_image} />
        <Card.Body className="center">
          <Card.Title>
            <h1>{game.name}</h1>
          </Card.Title>
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

            <div>
              {game.short_screenshots.map((screenshot) => (
                <Image
                  src={screenshot.image}
                  alt={screenshot.id}
                  key={screenshot.id}
                  width="20%"
                  thumbnail
                  className="mr-2"
                />
              ))}
            </div>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <FaRegCalendarAlt /> {game.released}
        </Card.Footer>
      </Card>
    </Container>
  );
};

export default GameDetails;
