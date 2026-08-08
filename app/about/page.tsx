import type { Metadata } from "next";
import AboutHeader from "@/components/about/AboutHeader";
import CraftsmanshipSection from "@/components/about/CraftmanshipSection";
import PhilosophyQuote from "@/components/about/PhilosophyQuote";
import CommitmentSection from "@/components/about/CommitmentSection";
import VisitStoreSection from "@/components/about/VisitStoreSection";

export const metadata: Metadata = {
  title: "About Us | Anandi Narayan",
  description:
    "Five decades of heritage craftsmanship — the story, philosophy, and commitments behind Anandi Narayan.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <AboutHeader />
      <CraftsmanshipSection />
      <PhilosophyQuote />
      <CommitmentSection />
      <VisitStoreSection />
    </main>
  );
}