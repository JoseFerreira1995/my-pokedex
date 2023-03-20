import React from "react";
import { Link } from "react-router-dom";
import "./Logo.css";

export default function Logo() {
  return (
    <Link to="/">
      <div>
        <img
          className="pokedex-img"
          src="https://archives.bulbagarden.net/media/upload/4/4b/Pok%C3%A9dex_logo.png"
          alt="pokedex"
        ></img>
      </div>
    </Link>
  );
}
