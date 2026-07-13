"use client";

import { useEffect } from "react";

export default function Root() {
  useEffect(() => {
    const locale = navigator.language
      .toLowerCase()
      .startsWith("pt")
      ? "pt"
      : "en";

    window.location.replace(`/${locale}/`);
  }, []);

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
      }}
    >
      <p>Loading BHeard…</p>
    </main>
  );
}
