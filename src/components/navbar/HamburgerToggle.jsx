// components/navbar/HamburgerToggle.jsx
"use client";

import React from "react";

function HamburgerToggle({ isOpen, onToggle }) {
  const variantClass = isOpen
    ? "checkboxtoggler-dark"
    : "checkboxtoggler-light";

  return (
    <div className="checkbox-wrapper">
      <input
        id="nav-toggle"
        type="checkbox"
        checked={isOpen}
        onChange={onToggle}
      />
      <label htmlFor="nav-toggle">
        <div className={`checkboxtoggler ${variantClass}`}>
          <div className="line line-1" />
          <div className="line line-2" />
          <div className="line line-3" />
        </div>
      </label>
    </div>
  );
}

export default HamburgerToggle;
