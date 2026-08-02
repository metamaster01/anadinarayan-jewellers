import type { Metadata } from "next";
import LegalPageHeader from "@/components/legal/LegalPageHeader";
import LegalSection from "@/components/legal/LegalSection";

export const metadata: Metadata = {
  title: "Terms of Service | Anandi Narayan",
  description: "The terms that govern your use of the Anandi Narayan website and app.",
};

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-black">
      <LegalPageHeader
        eyebrow="Legal"
        title="Terms of Service"
        description="Please read these terms carefully before using our website, mobile app, or purchasing from Anandi Narayan."
        lastUpdated="August 2, 2026"
      />

      <div className="mx-auto max-w-3xl px-6 py-4 sm:px-10 lg:py-8">
        <LegalSection title="1. Acceptance of Terms">
          <p>
            By accessing or using the Anandi Narayan website or mobile app,
            you agree to be bound by these Terms of Service and our{" "}
            <a href="/privacy-policy">Privacy Policy</a>. If you do not agree,
            please do not use our website or app.
          </p>
        </LegalSection>

        <LegalSection title="2. Use of the Website & App">
          <p>
            You agree to use our platforms only for lawful purposes and in a
            way that does not infringe the rights of, or restrict the use and
            enjoyment of, this site by any third party. You must not attempt
            to gain unauthorized access to any part of our systems.
          </p>
        </LegalSection>

        <LegalSection title="3. Account Registration">
          <p>
            Some features require you to create an account. You are
            responsible for maintaining the confidentiality of your login
            details and for all activity that occurs under your account.
            Please notify us immediately of any unauthorized use.
          </p>
        </LegalSection>

        <LegalSection title="4. Product Information & Pricing">
          <ul>
            <li>We make every effort to display our jewelry, gemstones, and pricing accurately, including any applicable making charges, taxes, or hallmarking fees.</li>
            <li>Product colors, finishes, and stone placement may vary slightly from images due to the handcrafted nature of each piece.</li>
            <li>Prices are subject to change without notice, particularly given fluctuations in gold and diamond market rates.</li>
          </ul>
        </LegalSection>

        <LegalSection title="5. Orders & Payment">
          <p>
            Placing an order constitutes an offer to purchase, which we may
            accept or decline at our discretion (for example, in cases of
            pricing errors or suspected fraud). Payment must be completed in
            full before an order is processed unless otherwise agreed.
          </p>
        </LegalSection>

        <LegalSection title="6. Intellectual Property">
          <p>
            All content on our website and app — including designs,
            photography, logos, and the Anandi Narayan name — is the
            property of Anandi Narayan and protected by applicable
            intellectual property laws. It may not be reproduced or used
            without our prior written consent.
          </p>
        </LegalSection>

        <LegalSection title="7. Limitation of Liability">
          <p>
            To the fullest extent permitted by law, Anandi Narayan shall not
            be liable for any indirect, incidental, or consequential damages
            arising from your use of our website, app, or products, beyond
            the value of the relevant order.
          </p>
        </LegalSection>

        <LegalSection title="8. Governing Law">
          <p>
            These Terms are governed by the laws of India, and any disputes
            shall be subject to the exclusive jurisdiction of the courts
            located in our place of business.
          </p>
        </LegalSection>

        <LegalSection title="9. Changes to These Terms">
          <p>
            We may revise these Terms from time to time. Continued use of our
            website or app after changes are posted constitutes acceptance of
            the updated Terms.
          </p>
        </LegalSection>

        <LegalSection title="10. Contact Us">
          <p>
            Questions about these Terms can be directed to us via our{" "}
            <a href="/contact">Contact Us</a> page.
          </p>
        </LegalSection>

        <p className="pb-16 pt-8 text-xs leading-relaxed text-white/35">
          This page is provided as a general template and does not constitute
          legal advice. Please have it reviewed by qualified legal counsel
          before publishing, so it accurately reflects your business
          practices and complies with applicable consumer-protection law.
        </p>
      </div>
    </main>
  );
}