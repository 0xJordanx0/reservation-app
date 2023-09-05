import React from "react";
import Header from "./components/Header";

export default function RestuarantLayout({children}:{children: React.ReactNode}) {
  return (
    <section>
      <Header />
      {children}
    </section>
  )
}
