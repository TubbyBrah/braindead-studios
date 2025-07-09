import React from "react";
import logoImage from "/assets/logo.svg";

export default function Logo() {
  return (
    <img
      src={logoImage}
      alt="Braindead Studios Logo"
      className="w-[420px] max-w-full block"
    />
  );
}
