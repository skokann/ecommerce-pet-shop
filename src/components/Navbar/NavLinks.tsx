import React from "react";

export default function NavLinks() {
  return (
    <div
      className="flex font-medium
		 text-md  gap-12 text-[#003459] "
    >
      <a href="/">Domů</a>
      <a href="/category">Kategorie</a>
      <a href="/about">O nás</a>
      <a href="/contact">Kontakt</a>
    </div>
  );
}
