import type { Metadata } from "next";
import LegalPageHeader from "@/components/legal/LegalPageHeader";
import LegalSection from "@/components/legal/LegalSection";

export const metadata: Metadata = {
  title: "Privacy Policy | Anandi Narayan",
  description: "How Anandi Narayan collects, uses, and protects your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-black">
      <LegalPageHeader
        eyebrow="Legal"
        title="Privacy Policy"
        description="Your trust matters to us as much as our craftsmanship. This policy explains what information we collect, how we use it, and the choices you have."
        lastUpdated="August 2, 2026"
      />

      <div className="mx-auto max-w-3xl px-6 py-4 sm:px-10 lg:py-8">
        <LegalSection title="1. Information We Collect">
          <p>
            We collect information you provide directly to us, such as when you
            create an account, place an order, join our mailing list, or
            contact our support team. This may include your name, email
            address, phone number, shipping and billing address, and payment
            details.
          </p>
          <p>
            We also automatically collect certain information when you use our
            website or mobile app, including device identifiers, IP address,
            browser type, and how you interact with our pages and products.
          </p>
        </LegalSection>

        <LegalSection title="2. How We Use Your Information">
          <ul>
            <li>To process and fulfil your orders, including shipping and payment confirmation.</li>
            <li>To provide customer support and respond to your enquiries.</li>
            <li>To personalize your shopping experience, including product recommendations and virtual try-ons.</li>
            <li>To send updates about new collections, private events, and offers, where you&apos;ve opted in.</li>
            <li>To improve our website, app, and services through analytics.</li>
            <li>To detect and prevent fraud, and to comply with legal obligations.</li>
          </ul>
        </LegalSection>

        <LegalSection title="3. Cookies & Tracking Technologies">
          <p>
            We use cookies and similar technologies to keep you signed in,
            remember your preferences, and understand how our website is
            used. You can control cookies through your browser settings,
            though disabling them may affect some site features.
          </p>
        </LegalSection>

        <LegalSection title="4. Sharing of Information">
          <p>
            We do not sell your personal information. We may share it with:
          </p>
          <ul>
            <li>Payment processors and logistics partners, solely to complete your order.</li>
            <li>Service providers who support our website, app, and marketing on our behalf.</li>
            <li>Law enforcement or regulators where required by applicable law.</li>
          </ul>
        </LegalSection>

        <LegalSection title="5. Data Security">
          <p>
            We use industry-standard safeguards — including encryption in
            transit and restricted access controls — to protect your
            information. No method of transmission or storage is completely
            secure, and we encourage you to use a strong, unique password for
            your account.
          </p>
        </LegalSection>

        <LegalSection title="6. Your Rights & Choices">
          <p>
            You may access, correct, or request deletion of your personal
            information, and you can unsubscribe from marketing emails at any
            time using the link in those emails. To make a request, please
            reach out through our{" "}
            <a href="/contact">Contact Us</a> page.
          </p>
        </LegalSection>

        <LegalSection title="7. Children's Privacy">
          <p>
            Our website and app are not directed at children under 16, and we
            do not knowingly collect personal information from them. If you
            believe a child has provided us with personal data, please
            contact us so we can remove it.
          </p>
        </LegalSection>

        <LegalSection title="8. Changes to This Policy">
          <p>
            We may update this Privacy Policy from time to time. Material
            changes will be reflected by an updated &ldquo;Last updated&rdquo;
            date at the top of this page.
          </p>
        </LegalSection>

        <LegalSection title="9. Contact Us">
          <p>
            If you have questions about this Privacy Policy or how we handle
            your data, please reach out via our{" "}
            <a href="/contact">Contact Us</a> page.
          </p>
        </LegalSection>

        <p className="pb-16 pt-8 text-xs leading-relaxed text-white/35">
          This page is provided as a general template and does not constitute
          legal advice. Please have it reviewed by qualified legal counsel
          before publishing, to ensure it accurately reflects your data
          practices and complies with applicable law (e.g. India&apos;s DPDP
          Act, GDPR, or other regional requirements relevant to your
          customers).
        </p>
      </div>
    </main>
  );
}