import type { Metadata } from "next";
import { ArrowDownRight, ArrowUpRight, Mail, MessageCircle } from "lucide-react";
import { Suspense } from "react";
import InquiryForm from "@/components/contact/InquiryForm";

export const metadata: Metadata = {
  title: "Contact Wenside",
  description: "Discuss product sourcing, private-label options, and business inquiries with Wenside.",
};

export default function ContactPage() {
  return (
    <main className="contact-page">
      <section className="page-hero contact-hero">
        <div className="page-hero-main">
          <span className="eyebrow">GOOD THINGS START WITH A HELLO</span>
          <h1>Let’s talk<br /><em>good business.</em></h1>
          <p>Have a product in mind or a question about working together? Tell us a little about your project.</p>
        </div>
        <div className="page-hero-aside"><span className="round-arrow"><ArrowDownRight size={25} /></span><span>WE’RE ALL<br />EARS</span><span>CONTACT / 2026</span></div>
      </section>
      <section className="contact-content section">
        <div className="contact-details">
          <span className="eyebrow">THE FIRST STEP IS EASY</span>
          <h2>Tell us what<br /><em>you have in mind.</em></h2>
          <p>Share your requirements and our team can follow up once verified contact details and a submission service have been connected.</p>
          <div className="contact-method"><span><Mail size={20} /></span><div><b>Email</b><small>Add verified company email</small></div><ArrowUpRight size={16} /></div>
          <div className="contact-method"><span><MessageCircle size={20} /></span><div><b>WhatsApp</b><small>Add verified business number</small></div><ArrowUpRight size={16} /></div>
          <div className="contact-note"><span className="note-star">✳</span><p>We haven’t added contact details yet rather than guess. Replace these prompts with confirmed company contact information before launch.</p></div>
        </div>
        <div className="contact-form-wrap">
          <Suspense fallback={<div className="catalogue-loading" aria-label="Loading inquiry form" />}>
            <InquiryForm />
          </Suspense>
        </div>
      </section>
    </main>
  );
}
