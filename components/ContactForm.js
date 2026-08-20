"use client";

import { Send } from "lucide-react";
import { useState } from "react";

export default function ContactForm({ fallbackEmail }) {
  const [status, setStatus] = useState({ state: "idle", message: "" });

  async function submit(event) {
    event.preventDefault();
    setStatus({ state: "loading", message: "Sending…" });
    const form = new FormData(event.currentTarget);
    const payload = Object.fromEntries(form.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Message could not be sent.");
      event.currentTarget.reset();
      setStatus({ state: "success", message: "Message sent. I’ll get back to you as soon as I can." });
    } catch (error) {
      setStatus({ state: "error", message: `${error.message} You can also email ${fallbackEmail}.` });
    }
  }

  return (
    <form onSubmit={submit} className="grid gap-4" aria-label="Contact form">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="form-control gap-2">
          <span className="text-sm font-medium">Name</span>
          <input className="input input-bordered w-full rounded-2xl bg-base-100" name="name" autoComplete="name" minLength={2} maxLength={100} required />
        </label>
        <label className="form-control gap-2">
          <span className="text-sm font-medium">Email</span>
          <input className="input input-bordered w-full rounded-2xl bg-base-100" name="email" type="email" autoComplete="email" maxLength={180} required />
        </label>
      </div>
      <label className="form-control gap-2">
        <span className="text-sm font-medium">Subject</span>
        <input className="input input-bordered w-full rounded-2xl bg-base-100" name="subject" minLength={3} maxLength={140} required />
      </label>
      <label className="form-control gap-2">
        <span className="text-sm font-medium">Message</span>
        <textarea className="textarea textarea-bordered min-h-36 w-full rounded-2xl bg-base-100 leading-6" name="message" minLength={20} maxLength={5000} required />
      </label>
      <input name="website" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className={`text-sm ${status.state === "error" ? "text-error" : status.state === "success" ? "text-success" : "text-base-content/50"}`} role="status" aria-live="polite">
          {status.message || "No message is stored by the portfolio."}
        </p>
        <button className="btn btn-primary rounded-full px-6" disabled={status.state === "loading"}>
          <Send size={17} /> {status.state === "loading" ? "Sending" : "Send message"}
        </button>
      </div>
    </form>
  );
}
