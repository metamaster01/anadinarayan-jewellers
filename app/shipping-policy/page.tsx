import type { Metadata } from "next";
import LegalPageHeader from "@/components/legal/LegalPageHeader";
import LegalSection from "@/components/legal/LegalSection";

export const metadata: Metadata = {
  title: "Shipping Policy | Anandi Narayan",
  description: "Processing times, shipping charges, delivery timelines, and order tracking.",
};

export default function ShippingPolicyPage() {
  return (
    <main className="min-h-screen bg-black">
      <LegalPageHeader
        eyebrow="Support"
        title="Shipping Policy"
        description="Every piece is fully insured from our workshop to your door. Here's what to expect once your order is placed."
        lastUpdated="August 2, 2026"
      />

      <div className="mx-auto max-w-3xl px-6 py-4 sm:px-10 lg:py-8">
        <LegalSection title="1. Order Processing Time">
          <p>
            Ready-to-ship pieces are processed within 1–2 business days. Made-
            to-order and bridal pieces requiring custom sizing or finishing
            may take 5–15 business days to craft before dispatch — the
            estimated timeline is shown on the product page and at checkout.
          </p>
        </LegalSection>

        <LegalSection title="2. Shipping Methods & Charges">
          <ul>
            <li>Standard shipping across India is complimentary on all prepaid orders.</li>
            <li>Express shipping is available at checkout for an additional charge, where serviceable.</li>
            <li>International shipping is available to select countries; charges and duties are calculated at checkout based on destination.</li>
          </ul>
        </LegalSection>

        <LegalSection title="3. Insured Shipping">
          <p>
            Every shipment is fully insured for its full declared value until
            it reaches your doorstep. In the rare event of loss or damage in
            transit, please retain all original packaging and contact us
            within 48 hours of delivery so we can file a claim on your
            behalf.
          </p>
        </LegalSection>

        <LegalSection title="4. Delivery Timelines">
          <ul>
            <li>Metro cities: 3–5 business days after dispatch.</li>
            <li>Rest of India: 5–8 business days after dispatch.</li>
            <li>International: 8–15 business days after dispatch, depending on destination and customs clearance.</li>
          </ul>
          <p>
            Timelines are estimates and may be affected by courier delays,
            regional restrictions, or force majeure events beyond our
            control.
          </p>
        </LegalSection>

        <LegalSection title="5. Order Tracking">
          <p>
            You&apos;ll receive a tracking link by email and SMS once your
            order is dispatched. You can also track your order anytime from
            the &ldquo;My Orders&rdquo; section of the Anandi Narayan app.
          </p>
        </LegalSection>

        <LegalSection title="6. Signature on Delivery">
          <p>
            Given the value of our pieces, all shipments require an adult
            signature on delivery. Please ensure someone is available to
            receive the package at the provided address.
          </p>
        </LegalSection>

        <LegalSection title="7. Delays & Undeliverable Packages">
          <p>
            If a shipment is delayed beyond the estimated window, or returned
            to us as undeliverable, our support team will reach out to
            arrange re-delivery or a resolution. Please ensure your shipping
            address and contact details are accurate at checkout.
          </p>
        </LegalSection>

        <LegalSection title="8. Contact Us">
          <p>
            For any shipping-related questions, reach out via our{" "}
            <a href="/contact">Contact Us</a> page, and our team will be glad
            to help.
          </p>
        </LegalSection>

        <p className="pb-16 pt-8 text-xs leading-relaxed text-white/35">
          This page is provided as a general template. Please confirm actual
          processing times, carriers, insurance terms, and international
          shipping availability with your logistics and insurance partners
          before publishing.
        </p>
      </div>
    </main>
  );
}