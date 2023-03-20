import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <button>
        <Link to="/list">List</Link>
      </button>
    </>
  );
}
