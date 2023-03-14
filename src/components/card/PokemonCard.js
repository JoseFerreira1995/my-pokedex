import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./PokemonCard.css";

export default function PokemonCard(props) {
  const { pokemon, sprite } = props;

  return (
    <Card border="primary" bg="secondary">
      <Card.Img variant="top" src={sprite} alt={pokemon.name} />
      <Card.Body>
        <Card.Title bg="primary">{pokemon.name}</Card.Title>
        <Button variant="outline-light" onClick={pokemon.url}>
          Info
        </Button>
      </Card.Body>
    </Card>
  );
}
