import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function PokemonCard(props) {
  const { pokemon } = props;

  return (
    <Card border="dark" style={{ width: "18rem" }}>
      <Card.Img variant="top" />
      <Card.Body>
        <Card.Title>{pokemon.name}</Card.Title>
        <Button variant="outline-light" onClick={pokemon.url}>Info</Button>
      </Card.Body>
    </Card>
  );
}
