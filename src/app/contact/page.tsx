import type { Metadata } from "next";
import { ArrowDownRight, ArrowUpRight, Globe2, Mail, Phone } from "lucide-react";
import { Suspense } from "react";
import InquiryForm from "@/components/contact/InquiryForm";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact Wenside",
  description:
    "Discuss product sourcing, private-label options, and business inquiries with Wenside.",
};

export default function ContactPage() {
  return (
    <main className="contact-page">
      <section
        className="page-hero contact-hero relative min-h-96 flex justify-between items-end
          bg-stone-100 max-md:min-h-80 max-md:pt-16 px-6 pb-11 min-h-96 max-md:min-h-80"
      >
        <div className="page-hero-main max-w-3xl">
          <span
            className="eyebrow inline-flex items-center gap-2 text-muted text-xs font-bold
              tracking-widest leading-normal"
          >
            GOOD THINGS START WITH A HELLO
          </span>
          <h1>
            Let’s talk
            <br />
            <em>good business.</em>
          </h1>
          <p>
            Have a product in mind or a question about working together? Tell us a little about your
            project.
          </p>
        </div>
        <div
          className="page-hero-aside min-w-28 flex flex-col items-end gap-2.5 text-muted text-xs
            font-bold tracking-widest text-right max-md:min-w-16"
        >
          <span
            className="round-arrow w-12 h-12 grid place-items-center text-orange border
              rounded-full"
          >
            <ArrowDownRight size={25} />
          </span>
          <span>
            WE’RE ALL
            <br />
            EARS
          </span>
          <span>CONTACT / 2026</span>
        </div>
      </section>
      <section
        className="contact-content section pt-20 pb-28 grid grid-cols-2 gap-6 max-xl:gap-6
          max-md:pt-14 max-md:pb-16 max-md:grid-cols-1 max-md:gap-9 w-full max-w-7xl mx-auto"
      >
        <div className="contact-details">
          <span
            className="eyebrow inline-flex items-center gap-2 text-muted text-xs font-bold
              tracking-widest leading-normal"
          >
            THE FIRST STEP IS EASY
          </span>
          <h2>
            Tell us what
            <br />
            <em>you have in mind.</em>
          </h2>
          <p>
            Share your requirements and our team can follow up once verified contact details and a
            submission service have been connected.
          </p>
          <a
            className="contact-method min-h-16 flex items-center gap-3 border-b"
            href={`mailto:${siteConfig.contactEmail}`}
          >
            <span>
              <Mail size={20} />
            </span>
            <div>
              <b>Email</b>
              <small>{siteConfig.contactEmail}</small>
            </div>
            <ArrowUpRight size={16} />
          </a>
          <a
            className="contact-method min-h-16 flex items-center gap-3 border-b"
            href={`tel:${siteConfig.phoneLink}`}
          >
            <span>
              <Phone size={20} />
            </span>
            <div>
              <b>Telephone</b>
              <small>{siteConfig.phone}</small>
            </div>
            <ArrowUpRight size={16} />
          </a>
          <a
            className="contact-method min-h-16 flex items-center gap-3 border-b"
            href={siteConfig.website}
            target="_blank"
            rel="noreferrer"
          >
            <span>
              <Globe2 size={20} />
            </span>
            <div>
              <b>Website</b>
              <small>wen-side.com</small>
            </div>
            <ArrowUpRight size={16} />
          </a>
          <a
            className="contact-method min-h-16 flex items-center gap-3 border-b"
            href={siteConfig.zapWrapWebsite}
            target="_blank"
            rel="noreferrer"
          >
            <span>
              <Globe2 size={20} />
            </span>
            <div>
              <b>ZapWrap</b>
              <small>zap-wrap.com</small>
            </div>
            <ArrowUpRight size={16} />
          </a>
          <div className="contact-note mt-6 p-3.5 flex items-start gap-2.5 bg-stone-100">
            {/* <span className="note-star text-orange text-2xl">✳</span> */}
            <div className="mt-4 flex items-center gap-3">
              <a
                className="grid size-10 place-items-center rounded-full border border-stone-500
                  text-stone-300 transition hover:border-orange hover:text-orange"
                href="https://www.facebook.com/wenside1"
                target="_blank"
                rel="noreferrer"
                aria-label="Wenside on Facebook"
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5 fill-current">
                  <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V8c0-.9.3-1.5 1.6-1.5h1.7V3.7c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2H7.3V13h2.8v8h3.4Z" />
                </svg>
              </a>
              <a
                className="grid size-10 place-items-center rounded-full border border-stone-500
                  text-stone-300 transition hover:border-orange hover:text-orange"
                href="https://www.instagram.com/wenside1"
                target="_blank"
                rel="noreferrer"
                aria-label="Wenside on Instagram"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="size-5 fill-none stroke-current"
                  strokeWidth="1.8"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" className="fill-current stroke-none" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="contact-form-wrap p-7 bg-stone-100 max-md:py-5 px-3.5">
          <Suspense
            fallback={
              <div
                className="catalogue-loading animate-pulse min-h-96 bg-cover"
                aria-label="Loading inquiry form"
              />
            }
          >
            <InquiryForm />
          </Suspense>
        </div>
      </section>
    </main>
  );
}
