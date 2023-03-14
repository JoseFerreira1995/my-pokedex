import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function PokemonCard(props) {
  const { pokemon, sprite } = props;

  return (
    <Card style={{ width: "10rem", height: "10rem" }}>
      <Card.Img variant="top" src={sprite} alt={pokemon.name} />
      <Card.Body>
        <Card.Title>{pokemon.name}</Card.Title>
        <Button variant="outline-light" onClick={pokemon.url}>
          Info
        </Button>
      </Card.Body>
    </Card>
  );
}
