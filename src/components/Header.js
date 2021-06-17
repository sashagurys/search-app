import React from "react";

export default function Header({ activePage, setActivePage }) {
  return (
    <header className="header">
      <nav>
        <button
          className={`header-btn ${activePage === "search" ? "active" : ""}`}
          onClick={() => setActivePage("search")}
        >
          Search
        </button>
        <button
          className={`header-btn ${activePage === "history" ? "active" : ""}`}
          onClick={() => setActivePage("history")}
        >
          History
        </button>
      </nav>
    </header>
  );
}
