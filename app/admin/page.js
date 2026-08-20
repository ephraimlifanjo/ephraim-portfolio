import { redirect } from "next/navigation";
import AdminDashboard from "@/components/AdminDashboard";
import Container from "@/components/Container";
import { getSession } from "@/lib/auth";
import { getContent } from "@/lib/content";
import { hasGitHubPersistence } from "@/lib/github-content";

export const metadata = { title: "Portfolio CMS", robots: { index: false, follow: false } };
export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const session = await getSession();
  if (!session) redirect("/admin/login");
  const content = getContent();
  return (
    <section className="min-h-[80svh] py-8 sm:py-10">
      <Container>
        <AdminDashboard initialContent={content} adminEmail={session.email} initialPersistence={hasGitHubPersistence() ? "github" : "local"} />
      </Container>
    </section>
  );
}
