import { redirect } from "next/navigation";
import { LockKeyhole } from "lucide-react";
import AdminLoginForm from "@/components/AdminLoginForm";
import { getSession } from "@/lib/auth";

export const metadata = { title: "Admin login", robots: { index: false, follow: false } };
export const dynamic = "force-dynamic";

export default async function AdminLoginPage() {
  const session = await getSession();
  if (session) redirect("/admin");

  return (
    <section className="grid min-h-[calc(100svh-4rem)] place-items-center px-5 py-14">
      <div className="w-full max-w-md rounded-[2rem] border border-base-content/10 bg-base-200/45 p-6 shadow-2xl sm:p-8">
        <div className="grid size-12 place-items-center rounded-2xl bg-primary text-primary-content"><LockKeyhole size={21} /></div>
        <p className="section-kicker mt-6">Private CMS</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-[-0.04em]">Portfolio admin</h1>
        <p className="mt-3 text-sm leading-6 text-base-content/58">Only the portfolio owner can edit projects, events, skills, experience, contact details and SEO content.</p>
        <AdminLoginForm />
      </div>
    </section>
  );
}
