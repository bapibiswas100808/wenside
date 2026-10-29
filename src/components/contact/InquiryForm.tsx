"use client";

import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";
import { useState, type FormEvent } from "react";
import { ArrowUpRight, Info } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { products } from "@/data/products";

const emailServiceId = "service_f0mg4z9";
const emailTemplateId = "template_5dlbvgd";
const emailPublicKey = "pardd_l1egH-PD540";

export default function InquiryForm() {
  const searchParams = useSearchParams();
  const productName = searchParams.get("product") ?? "";
  const inquiryType = searchParams.get("inquiry") ?? "";
  const model = searchParams.get("model") ?? "";
  const [isSending, setIsSending] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<
    "success" | { type: "error"; message: string; status?: number } | null
  >(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setIsSending(true);
    setSubmissionStatus(null);

    try {
      const fields = Object.fromEntries(new FormData(form));
      const name = String(fields.name ?? "");
      const email = String(fields.email ?? "");
      const product = String(fields.product ?? "");
      const inquiry = String(fields.inquiry ?? "");
      const subject = `New inquiry: ${product}${inquiry ? ` - ${inquiry}` : ""}`;

      await emailjs.send(
        emailServiceId,
        emailTemplateId,
        {
          ...fields,
          from_name: name,
          reply_to: email,
          subject,
        },
        {
          publicKey: emailPublicKey,
          limitRate: { id: "wenside-inquiry-form", throttle: 15000 },
        },
      );
      form.reset();
      setSubmissionStatus("success");
    } catch (error) {
      if (error instanceof EmailJSResponseStatus) {
        console.error("EmailJS inquiry submission failed", {
          status: error.status,
          text: error.text,
        });
        setSubmissionStatus({
          type: "error",
          message: error.text,
          status: error.status,
        });
      } else {
        console.error("Unexpected inquiry submission error", error);
        setSubmissionStatus({
          type: "error",
          message: error instanceof Error ? error.message : String(error),
        });
      }
    } finally {
      setIsSending(false);
    }
  }

  return (
    <form className="inquiry-form grid gap-6" onSubmit={handleSubmit}>
      <div className="form-grid grid grid-cols-2 gap-6 max-md:gap-6 max-sm:grid-cols-1">
        <label>
          Full name <span>*</span>
          <input name="name" autoComplete="name" required placeholder="Your name" />
        </label>
        <label>
          Company name <span>*</span>
          <input name="company" autoComplete="organization" required placeholder="Your company" />
        </label>
        <label>
          Business email <span>*</span>
          <input
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="you@company.com"
          />
        </label>
        <label>
          Country <span>*</span>
          <input
            name="country"
            autoComplete="country-name"
            required
            placeholder="Where are you based?"
          />
        </label>
        <label>
          Inquiry type <span>*</span>
          <select name="inquiry" required defaultValue={inquiryType}>
            <option value="" disabled>
              Select an inquiry
            </option>
            <option>Product sourcing</option>
            <option>OEM / private label</option>
            <option>Product catalogue</option>
            <option>Other</option>
          </select>
        </label>
        <label>
          Product of interest <span>*</span>
          <select name="product" required defaultValue={productName}>
            <option value="" disabled>
              Select a product
            </option>
            {products.map((product) => (
              <option value={product.name} key={product.id}>
                {product.name}
              </option>
            ))}
          </select>
        </label>
        {model && (
          <label>
            Model
            <input name="model" defaultValue={model} readOnly />
          </label>
        )}
        {!model && <input type="hidden" name="model" defaultValue="" />}
        <label className="form-full col-span-full max-sm:col-span-1">
          Message <span>*</span>
          <textarea
            name="message"
            rows={5}
            required
            placeholder="Tell us a little about what you need..."
          />
        </label>
      </div>
      <div
        className="form-disclaimer p-2.5 flex items-start gap-2 bg-stone-100 text-stone-500 text-xs
          leading-relaxed"
      >
        <Info size={17} />
        <span>
          Your inquiry will be sent through EmailJS to our team. We’ll use your contact details only
          to respond to your request.
        </span>
      </div>
      <div className="form-submit-row flex items-center gap-3.5 max-md:flex-col">
        <button
          className="button button-dark min-h-12 inline-flex items-center justify-center gap-4
            border text-sm font-semibold transition-transform bg-ink text-white"
          disabled={isSending}
          type="submit"
        >
          {isSending ? "Sending inquiry..." : "Send inquiry"}
          {!isSending && <ArrowUpRight size={17} />}
        </button>
        <span>
          Fields marked <b>*</b> are required.
        </span>
      </div>
      {submissionStatus === "success" && (
        <p
          className="form-demo-notice p-3 text-stone-700 bg-stone-100 text-xs leading-relaxed"
          role="status"
        >
          Thank you. Your inquiry has been sent to our team.
        </p>
      )}
      {submissionStatus && submissionStatus !== "success" && (
        <p
          className="form-demo-notice p-3 text-stone-700 bg-stone-100 text-xs leading-relaxed"
          role="alert"
        >
          We couldn’t send your inquiry
          {submissionStatus.status ? ` (EmailJS ${submissionStatus.status})` : ""}:{" "}
          {submissionStatus.message || "Unknown error"}. Please try again or email us directly at{" "}
          <a className="underline" href="mailto:info@wen-side.com">
            info@wen-side.com
          </a>
          .
        </p>
      )}
    </form>
  );
}
