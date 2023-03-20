import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./PokemonCard.css";

export default function PokemonCard(props) {
  const { pokemon } = props;

  return (
    <Card border="light" style={{ background: "#9E4784" }}>
      <Card.Img
        variant="top"
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
      />
      <Card.Body>
        <Card.Title bg="primary">{pokemon.name}</Card.Title>
        <Button variant="outline-light" onClick={pokemon.url}>
          Info
        </Button>
      </Card.Body>
    </Card>
  );
}
