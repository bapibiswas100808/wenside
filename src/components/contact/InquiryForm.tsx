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
    <form className="inquiry-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <label>Full name <span>*</span><input name="name" autoComplete="name" required placeholder="Your name" /></label>
        <label>Company name <span>*</span><input name="company" autoComplete="organization" required placeholder="Your company" /></label>
        <label>Business email <span>*</span><input name="email" type="email" autoComplete="email" required placeholder="you@company.com" /></label>
        <label>Country <span>*</span><input name="country" autoComplete="country-name" required placeholder="Where are you based?" /></label>
        <label>Inquiry type <span>*</span>
          <select name="inquiry" required defaultValue={inquiryType}><option value="" disabled>Select an inquiry</option><option>Product sourcing</option><option>OEM / private label</option><option>Product catalogue</option><option>Other</option></select>
        </label>
        <label>Product of interest
          <select name="product" defaultValue={productName}>
            <option value="">Select a product (optional)</option>
            {products.map((product) => <option value={product.name} key={product.id}>{product.name}</option>)}
          </select>
        </label>
        {model && <label>Model<input name="model" defaultValue={model} readOnly /></label>}
        <label className="form-full">Message <span>*</span><textarea name="message" rows={5} required placeholder="Tell us a little about what you need..." /></label>
      </div>
      <div className="form-disclaimer"><Info size={17} /><span>This is a frontend demonstration form. Your details are not sent or stored. Connect a verified inquiry service before publishing.</span></div>
      <div className="form-submit-row">
        <button className="button button-dark" type="submit">Review inquiry <ArrowUpRight size={17} /></button>
        <span>Fields marked <b>*</b> are required.</span>
      </div>
      {submitted && <p className="form-demo-notice" role="status">Demo only: your entries have not been sent. Connect this form to a real submission service to receive inquiries.</p>}
    </form>
  );
}
