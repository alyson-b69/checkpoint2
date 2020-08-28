import React from "react";
import { Switch, Route } from "react-router-dom";
import { GameProvider } from "./context/GameContext";
import "./App.css";
import HeaderNav from "./components/HeaderNav";
import GameList from "./components/GameList";
import GameDetails from "./components/GameDetails";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";

function App() {
  return (
    <GameProvider>
      <Container className="mw-100 p-0">
        <HeaderNav />
        <Switch>
          <Route exact path="/" component={GameList} />
          <Route path="/game/:gameid" component={GameDetails} />
        </Switch>
        <Footer />
      </Container>
    </GameProvider>
  );
}

export default App;
