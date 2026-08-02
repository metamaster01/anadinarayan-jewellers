import type { Metadata } from "next";
import LegalPageHeader from "@/components/legal/LegalPageHeader";
import LegalSection from "@/components/legal/LegalSection";

export const metadata: Metadata = {
  title: "Returns & Exchange | Anandi Narayan",
  description: "Our returns, exchange, and lifetime buyback policy.",
};

export default function ReturnsPage() {
  return (
    <main className="min-h-screen bg-black">
      <LegalPageHeader
        eyebrow="Support"
        title="Returns & Exchange"
        description="We stand behind every piece we craft with a transparent, lifetime exchange promise."
        lastUpdated="August 2, 2026"
      />

      <div className="mx-auto max-w-3xl px-6 py-4 sm:px-10 lg:py-8">
        <LegalSection title="1. Return Eligibility">
          <p>
            Ready-to-ship pieces can be returned within 7 days of delivery,
            provided they are unworn, in their original condition, and
            accompanied by the original packaging, invoice, and any
            certification (BIS hallmark card, IGI certificate, etc.).
          </p>
          <p>
            Made-to-order, engraved, and resized pieces are final sale and
            not eligible for return, but remain covered under our lifetime
            exchange policy below.
          </p>
        </LegalSection>

        <LegalSection title="2. Lifetime Exchange Policy">
          <p>
            Every Anandi Narayan piece is backed by a lifetime exchange
            policy. You may exchange your piece at any time for another of
            equal or greater value, with the original piece&apos;s value
            assessed at the prevailing gold/diamond rate and purity at the
            time of exchange. A nominal making-charge adjustment may apply.
          </p>
        </LegalSection>

        <LegalSection title="3. How to Initiate a Return or Exchange">
          <ul>
            <li>Raise a request from the &ldquo;My Orders&rdquo; section of the app, or contact our support team.</li>
            <li>Our team will arrange a secure, insured pickup from your address.</li>
            <li>Once the piece passes quality verification at our facility, your refund or exchange will be processed.</li>
          </ul>
        </LegalSection>

        <LegalSection title="4. Refunds">
          <p>
            Approved refunds are issued to the original payment method within
            7–10 business days of the returned piece passing quality
            verification. Shipping charges, if any, are non-refundable.
          </p>
        </LegalSection>

        <LegalSection title="5. Buyback Value">
          <p>
            For pieces purchased from us, we offer a transparent buyback at
            the prevailing rate for the metal content, subject to
            verification of purity and authenticity. Gemstone and craftsmanship
            value are not included in the buyback price.
          </p>
        </LegalSection>

        <LegalSection title="6. Non-Returnable Items">
          <ul>
            <li>Custom or made-to-order pieces, including custom engravings and resized rings.</li>
            <li>Pieces showing signs of wear, damage, or alteration by a third party.</li>
            <li>Items missing their original certification or packaging.</li>
          </ul>
        </LegalSection>

        <LegalSection title="7. Damaged or Incorrect Items">
          <p>
            If you receive a damaged or incorrect item, please contact us
            within 48 hours of delivery with photos of the piece and
            packaging, and we&apos;ll arrange a free replacement or full
            refund.
          </p>
        </LegalSection>

        <LegalSection title="8. Contact Us">
          <p>
            For help with a return, exchange, or buyback, reach out via our{" "}
            <a href="/contact">Contact Us</a> page.
          </p>
        </LegalSection>

        <p className="pb-16 pt-8 text-xs leading-relaxed text-white/35">
          This page is provided as a general template. Please confirm actual
          return windows, exchange terms, and buyback rates with your
          operations team before publishing, as these directly affect
          customer transactions.
        </p>
      </div>
    </main>
  );
}