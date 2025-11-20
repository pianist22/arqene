// components/common/AnimatedButton.jsx
"use client";

import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div(({ $variant }) => {
  const palette = {
    dark: {
      baseText: "#181c24",
      baseBorder: "#181c24",
      baseBg: "transparent",
      hoverText: "#f5f5f5",
      hoverBg: "#181c24",
    },
    light: {
      baseText: "#ffffff",
      baseBorder: "#ffffff",
      baseBg: "transparent",
      hoverText: "#181c24",
      hoverBg: "#f5f5f5",
    },
  };

  const p = palette[$variant] || palette.dark;

  return `
    .animated-button {
      position: relative;
      display: flex;
      align-items: center;
      gap: 4px;
      padding: 12px 28px;                       /* reduced */
      border: 2px solid ${p.baseBorder};        /* reduced */
      font-size: 14px;                          /* reduced */
      background-color: ${p.baseBg};
      border-radius: 100px;
      font-weight: 600;
      color: ${p.baseText};
      box-shadow: 0 0 0 1.5px ${p.baseBorder};  /* reduced */
      cursor: pointer;
      overflow: hidden;
      transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
    }

    .animated-button svg {
      position: absolute;
      width: 22px;                              /* slightly smaller */
      fill: ${p.baseText};
      z-index: 4;
      transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
    }

    .animated-button .arr-1 {
      right: 14px;                              /* adjusted */
    }

    .animated-button .arr-2 {
      left: -24%;                               /* adjusted */
    }

    .animated-button .circle {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 16px;                              /* reduced */
      height: 16px;                             /* reduced */
      background-color: ${p.baseText};
      border-radius: 50%;
      opacity: 0;
      z-index: 0;
      transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
    }

    .animated-button .text {
      position: relative;
      z-index: 3;
      transform: translateX(-10px);             /* reduced movement */
      transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
      color: ${p.baseText};
    }

    .animated-button:hover {
      box-shadow: 0 0 0 10px transparent;       /* reduced */
      border-radius: 12px;
      background-color: ${p.hoverBg};
    }

    .animated-button:hover .text {
      transform: translateX(10px);              /* reduced movement */
      color: ${p.hoverText};
    }

    .animated-button:hover svg {
      fill: ${p.hoverText};
    }

    .animated-button:hover .arr-1 {
      right: -22%;                              /* adjusted */
    }

    .animated-button:hover .arr-2 {
      left: 14px;                               /* adjusted */
    }

    .animated-button:hover .circle {
      width: 200px;                             /* reduced from 220px */
      height: 200px;
      opacity: 1;
      background-color: ${p.baseText};
    }

    .animated-button:active {
      scale: 0.95;
      box-shadow: 0 0 0 3px ${p.baseBorder};    /* reduced */
    }
  `;
});

const Button = ({ label = "Modern Button", variant = "dark" }) => {
  return (
    <StyledWrapper $variant={variant}>
      <button className="animated-button" type="button">
        
        <svg className="arr-2" viewBox="0 0 24 24">
          <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
        </svg>

        <span className="text">{label}</span>

        <span className="circle" />

        <svg className="arr-1" viewBox="0 0 24 24">
          <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
        </svg>

      </button>
    </StyledWrapper>
  );
};

export default Button;
