import type { Metadata } from "next";
import { Suspense } from "react";
import CollectionsPage from "@/components/collections/CollectionPage";

export const metadata: Metadata = {
  title: "The Heritage Collections | Anandi Narayan",
  description:
    "Discover a timeless fusion of ancestral craftsmanship and contemporary elegance across Anandi Narayan's full jewelry collection.",
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <CollectionsPage />
    </Suspense>
  );
}