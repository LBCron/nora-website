import type { Metadata } from "next";
import { Header } from "@/components/header";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Modeling inquiries for Nora Womack, an aspiring model based in Vancouver, BC.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="contact-page">
        <h1 className="contact-title">
          New connections,<br /><em>new possibilities.</em>
        </h1>
        <div className="contact-grid">
          <p>
            Nora is beginning her modeling journey in Vancouver, BC.
            All modeling inquiries must be coordinated through her
            parent or guardian.
          </p>
          <div>
            <h2>Inquiries</h2>
            <p>Contact details are not currently published.</p>
          </div>
          <div>
            <h2>Based in</h2>
            <p>Vancouver, British Columbia</p>
          </div>
        </div>
      </main>
    </>
  );
}
