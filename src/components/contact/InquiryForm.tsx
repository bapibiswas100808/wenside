"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight, Info } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { products } from "@/data/products";

export default function InquiryForm() {
  const searchParams = useSearchParams();
  const productName = searchParams.get("product") ?? "";
  const inquiryType = searchParams.get("inquiry") ?? "";
  const model = searchParams.get("model") ?? "";
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
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
          Product of interest
          <select name="product" defaultValue={productName}>
            <option value="">Select a product (optional)</option>
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
          This is a frontend demonstration form. Your details are not sent or stored. Connect a
          verified inquiry service before publishing.
        </span>
      </div>
      <div className="form-submit-row flex items-center gap-3.5 max-md:flex-col">
        <button
          className="button button-dark min-h-12 inline-flex items-center justify-center gap-4
            border text-sm font-semibold transition-transform bg-ink text-white"
          type="submit"
        >
          Review inquiry <ArrowUpRight size={17} />
        </button>
        <span>
          Fields marked <b>*</b> are required.
        </span>
      </div>
      {submitted && (
        <p
          className="form-demo-notice p-3 text-stone-700 bg-stone-100 text-xs leading-relaxed"
          role="status"
        >
          Demo only: your entries have not been sent. Connect this form to a real submission service
          to receive inquiries.
        </p>
      )}
    </form>
  );
}
