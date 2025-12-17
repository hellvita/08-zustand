"use client";

import type { Metadata } from "next";
import { useRouter } from "next/navigation";
import css from "./not-found.module.css";

export const metadata: Metadata = {
  title: "Page not found",
  description: "Unfortunately, the page at this address does not exist!",
  openGraph: {
    title: "Page not found",
    description: "Unfortunately, the page at this address does not exist!",
    url: "coming soon",
    images: [
      {
        url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
        width: 1200,
        height: 630,
        alt: "NoteHub",
      },
    ],
  },
};

export default function NotFound() {
  const router = useRouter();
  const handleBack = () => router.back();
  return (
    <div className={css.container}>
      <h1 className={css.title}>404 - Page not found</h1>
      <p className={css.description}>
        Sorry, the page you are looking for does not exist.
      </p>
      <button onClick={handleBack} className={css.btn}>
        Go back
      </button>
    </div>
  );
}
