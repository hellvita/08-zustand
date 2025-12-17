import type { Metadata } from "next";
import NotFoundClient from "./NotFound.client";

export const metadata: Metadata = {
  title: "Page not found",
  description: "Unfortunately, the page at this address does not exist!",
  openGraph: {
    title: "Page not found",
    description: "Unfortunately, the page at this address does not exist!",
    url: "https://07-routing-nextjs-ebon-six.vercel.app/",
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
  return (
    <>
      <NotFoundClient />
    </>
  );
}
