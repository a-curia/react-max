import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function HelpLayout() {
  return (
    <div className="root-layout">
      <header>
        <nav>
          <h1>Help page</h1>
          <NavLink to="faq">faq</NavLink>
          <NavLink to="contact">contact</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
