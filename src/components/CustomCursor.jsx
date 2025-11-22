"use client";

import { useEffect, useState } from "react";
import clsx from "clsx"; // optional; or just use template strings

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [variant, setVariant] = useState("default"); // "default" | "small"

  useEffect(() => {
    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("pointermove", move);

    // custom events so sections can tell the cursor to change style
    const enterSmall = () => setVariant("small");
    const leaveSmall = () => setVariant("default");

    window.addEventListener("cursor-small-enter", enterSmall);
    window.addEventListener("cursor-small-leave", leaveSmall);

    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("cursor-small-enter", enterSmall);
      window.removeEventListener("cursor-small-leave", leaveSmall);
    };
  }, []);

  const size = variant === "default" ? 28 : 10; // px

  return (
    <div
      className={clsx(
        "pointer-events-none fixed z-[9999] -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-150 ease-out",
        variant === "default"
          ? "bg-[#d1c4b5]/20 mix-blend-normal"
          : "bg-black"
      )}
      style={{
        width: size,
        height: size,
        left: position.x,
        top: position.y,
      }}
    />
  );
}
