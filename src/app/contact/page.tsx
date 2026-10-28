import type { Metadata } from "next";
import { ArrowDownRight, ArrowUpRight, Globe2, Mail, Phone } from "lucide-react";
import { Suspense } from "react";
import InquiryForm from "@/components/contact/InquiryForm";
import { siteConfig } from "@/data/site";

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
          <a className="contact-method" href={`mailto:${siteConfig.contactEmail}`}><span><Mail size={20} /></span><div><b>Email</b><small>{siteConfig.contactEmail}</small></div><ArrowUpRight size={16} /></a>
          <a className="contact-method" href={`tel:${siteConfig.phoneLink}`}><span><Phone size={20} /></span><div><b>Telephone</b><small>{siteConfig.phone}</small></div><ArrowUpRight size={16} /></a>
          <a className="contact-method" href={siteConfig.website} target="_blank" rel="noreferrer"><span><Globe2 size={20} /></span><div><b>Website</b><small>wen-side.com</small></div><ArrowUpRight size={16} /></a>
          <a className="contact-method" href={siteConfig.zapWrapWebsite} target="_blank" rel="noreferrer"><span><Globe2 size={20} /></span><div><b>ZapWrap</b><small>zap-wrap.com</small></div><ArrowUpRight size={16} /></a>
          <div className="contact-note"><span className="note-star">✳</span><p>Social handle in the catalogue: {siteConfig.socialHandle}. A platform or profile URL was not specified, so no social link is assumed.</p></div>
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
