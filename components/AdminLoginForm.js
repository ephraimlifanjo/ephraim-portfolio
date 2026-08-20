"use client";

import { LockKeyhole, LogIn } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AdminLoginForm() {
  const router = useRouter();
  const [status, setStatus] = useState({ loading: false, error: "" });

  async function submit(event) {
    event.preventDefault();
    setStatus({ loading: true, error: "" });
    const form = new FormData(event.currentTarget);
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: form.get("email"), password: form.get("password") }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Login failed.");
      router.replace("/admin");
      router.refresh();
    } catch (error) {
      setStatus({ loading: false, error: error.message });
      return;
    }
    setStatus({ loading: false, error: "" });
  }

  return (
    <form onSubmit={submit} className="mt-8 grid gap-4">
      <label className="form-control gap-2">
        <span className="text-sm font-medium">Admin email</span>
        <input className="input input-bordered w-full rounded-2xl" type="email" name="email" autoComplete="username" required />
      </label>
      <label className="form-control gap-2">
        <span className="text-sm font-medium">Password</span>
        <input className="input input-bordered w-full rounded-2xl" type="password" name="password" autoComplete="current-password" minLength={8} required />
      </label>
      {status.error ? <p className="text-sm text-error" role="alert">{status.error}</p> : null}
      <button className="btn btn-primary mt-2 rounded-full" disabled={status.loading}>
        {status.loading ? <span className="loading loading-spinner loading-sm" /> : <LogIn size={17} />}
        {status.loading ? "Signing in" : "Sign in"}
      </button>
    </form>
  );
}
