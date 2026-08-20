"use client";

import { Download, ExternalLink, ImagePlus, LogOut, Plus, Save, Trash2, Upload, Code2 } from "lucide-react";
import { useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";

const objectConfigs = {
  site: [
    ["name", "Display name"], ["title", "Professional title"], ["eyebrow", "Hero eyebrow"], ["tagline", "Tagline"],
    ["bio", "Bio", "textarea"], ["location", "Location"], ["availability", "Availability", "textarea"], ["email", "Email"],
    ["phone", "Phone"], ["avatar", "Hero photo path"], ["avatarAlt", "Hero photo alt"], ["secondaryImage", "Secondary photo path"], ["secondaryImageAlt", "Secondary photo alt"], ["resumeUrl", "Resume PDF path"],
    ["primaryCta", "Primary CTA"], ["secondaryCta", "Secondary CTA"], ["copyright", "Copyright name"]
  ],
  seo: [["title", "SEO title"], ["description", "Meta description", "textarea"], ["keywords", "Keywords", "list"]],
  copy: [
    ["heroLead", "Hero lead"], ["heroAccent", "Hero accent"], ["locationLabel", "Location label"], ["focusLabel", "Focus label"], ["focusValue", "Focus value"], ["resumeLabel", "Resume button"],
    ["workEyebrow", "Work eyebrow"], ["workTitle", "Work title"], ["workDescription", "Work description", "textarea"], ["allProjectsLabel", "All projects label"],
    ["aboutEyebrow", "About eyebrow"], ["aboutTitle", "About title"], ["aboutDescription", "About description", "textarea"], ["aboutCardOneTitle", "About card 1 title"], ["aboutCardOneText", "About card 1 text", "textarea"], ["aboutCardTwoTitle", "About card 2 title"], ["aboutCardTwoText", "About card 2 text", "textarea"], ["skillsLabel", "Skills label"],
    ["experienceEyebrow", "Experience eyebrow"], ["experienceTitle", "Experience title"], ["educationLabel", "Education label"],
    ["servicesEyebrow", "Services eyebrow"], ["servicesTitle", "Services title"], ["servicesDescription", "Services description", "textarea"],
    ["eventsEyebrow", "Events eyebrow"], ["eventsTitle", "Events title"], ["eventsDescription", "Events description", "textarea"], ["allEventsLabel", "All events label"],
    ["testimonialsEyebrow", "Testimonials eyebrow"], ["testimonialsTitle", "Testimonials title"],
    ["contactEyebrow", "Contact eyebrow"], ["contactTitle", "Contact title"], ["contactDescription", "Contact description", "textarea"],
    ["footerStatement", "Footer statement", "textarea"], ["talkLabel", "Navbar CTA"],
    ["projectsPageEyebrow", "Projects page eyebrow"], ["projectsPageTitle", "Projects page title"], ["projectsPageDescription", "Projects page description", "textarea"],
    ["eventsPageEyebrow", "Events page eyebrow"], ["eventsPageTitle", "Events page title"], ["eventsPageDescription", "Events page description", "textarea"], ["resumePageEyebrow", "Resume page eyebrow"], ["resumeDownloadLabel", "Resume download label"]
  ],
};

const arrayConfigs = {
  navigation: [["href", "Href"], ["label", "Label"]],
  stats: [["value", "Value"], ["label", "Label"]],
  socials: [["label", "Label"], ["url", "URL"], ["icon", "Lucide icon name"]],
  skills: [["category", "Category"], ["items", "Skills", "list"]],
  projects: [
    ["title", "Title"], ["slug", "Slug"], ["featured", "Featured", "boolean"], ["category", "Category"], ["status", "Status"], ["role", "Role"],
    ["shortDescription", "Short description", "textarea"], ["fullDescription", "Full description", "textarea"], ["coverImage", "Cover image path"], ["coverFit", "Cover fit (cover/contain)"],
    ["gallery", "Gallery image paths", "list"], ["technologies", "Technologies", "list"], ["problem", "Problem", "textarea"],
    ["solution", "Solution", "textarea"], ["responsibilities", "Responsibilities", "textarea"], ["challenges", "Challenges", "textarea"],
    ["results", "Results", "textarea"], ["videoUrl", "YouTube video URL"], ["githubUrl", "GitHub URL"], ["liveUrl", "Live URL"], ["storeUrl", "Store URL"], ["year", "Year"], ["metaTitle", "SEO meta title"], ["metaDescription", "SEO meta description", "textarea"], ["socialImage", "SEO social image"]
  ],
  experience: [["organization", "Organization"], ["role", "Role"], ["period", "Period"], ["location", "Location"], ["description", "Description", "textarea"], ["technologies", "Technologies", "list"]],
  education: [["school", "School"], ["program", "Program"], ["period", "Period"], ["location", "Location"], ["description", "Description", "textarea"]],
  services: [["title", "Title"], ["description", "Description", "textarea"], ["icon", "Lucide icon name"]],
  credentials: [["title", "Title"], ["issuer", "Issuer"], ["date", "Date"], ["location", "Location"], ["description", "Description", "textarea"], ["image", "Image path"]],
  events: [["title", "Title"], ["slug", "Slug"], ["date", "Start date", "date"], ["endDate", "End date", "date"], ["time", "Time"], ["location", "Location"], ["status", "Status"], ["summary", "Summary", "textarea"], ["description", "Description", "textarea"], ["image", "Image path"], ["organizer", "Organizer"], ["registrationUrl", "Registration URL"], ["featured", "Featured", "boolean"], ["metaTitle", "SEO meta title"], ["metaDescription", "SEO meta description", "textarea"], ["socialImage", "SEO social image"]],
  testimonials: [["name", "Name"], ["organization", "Organization"], ["quote", "Quote", "textarea"], ["photo", "Photo path"]],
};

const tabs = ["site", "copy", "seo", "navigation", "projects", "events", "skills", "experience", "education", "services", "credentials", "socials", "stats", "testimonials", "advanced"];

const blankTemplates = {
  navigation: { href: "/", label: "New link" },
  stats: { value: "", label: "" },
  socials: { label: "", url: "", icon: "ExternalLink" },
  skills: { category: "New category", items: [] },
  projects: { title: "New project", slug: "new-project", featured: false, category: "", status: "", role: "Product & engineering", shortDescription: "", fullDescription: "", coverImage: "/images/ephraim-office.jpg", coverFit: "cover", gallery: [], technologies: [], problem: "", solution: "", responsibilities: "", challenges: "", results: "", videoUrl: "", githubUrl: "", liveUrl: "", storeUrl: "", year: new Date().getFullYear().toString(), metaTitle: "", metaDescription: "", socialImage: "/images/ephraim-office.jpg" },
  experience: { organization: "", role: "", period: "", location: "", description: "", technologies: [] },
  education: { school: "", program: "", period: "", location: "", description: "" },
  services: { title: "", description: "", icon: "Blocks" },
  credentials: { title: "", issuer: "", date: "", location: "", description: "", image: "" },
  events: { title: "New event", slug: "new-event", date: new Date().toISOString().slice(0, 10), endDate: new Date().toISOString().slice(0, 10), time: "", location: "", status: "Upcoming", summary: "", description: "", image: "/images/innovation-event.jpg", organizer: "", registrationUrl: "", featured: false, metaTitle: "", metaDescription: "", socialImage: "/images/innovation-event.jpg" },
  testimonials: { name: "", organization: "", quote: "", photo: "" },
};

export default function AdminDashboard({ initialContent, adminEmail, initialPersistence }) {
  const router = useRouter();
  const [content, setContent] = useState(initialContent);
  const [active, setActive] = useState("site");
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const [dirty, setDirty] = useState(false);
  const [persistence, setPersistence] = useState(initialPersistence);
  const [jsonDraft, setJsonDraft] = useState(() => JSON.stringify(initialContent, null, 2));
  const fileRef = useRef(null);

  const totalItems = useMemo(() => Object.values(arrayConfigs).reduce((count, _, i) => count + (content[Object.keys(arrayConfigs)[i]]?.length || 0), 0), [content]);

  function mark(next) {
    setContent(next);
    setJsonDraft(JSON.stringify(next, null, 2));
    setDirty(true);
  }

  function updateObject(section, key, value) {
    mark({ ...content, [section]: { ...content[section], [key]: value } });
  }

  function updateArray(section, index, key, value) {
    const items = [...(content[section] || [])];
    items[index] = { ...items[index], [key]: value };
    mark({ ...content, [section]: items });
  }

  function addItem(section) {
    const template = blankTemplates[section] || {};
    mark({ ...content, [section]: [...(content[section] || []), structuredClone(template)] });
  }

  function removeItem(section, index) {
    if (!window.confirm("Delete this item?")) return;
    mark({ ...content, [section]: content[section].filter((_, i) => i !== index) });
  }

  async function save() {
    setStatus({ type: "loading", message: "Saving content…" });
    try {
      const response = await fetch("/api/cms/content", { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(content) });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Save failed.");
      setDirty(false);
      setPersistence(data.persistence || persistence);
      setStatus({ type: "success", message: data.message || "Saved." });
      router.refresh();
    } catch (error) {
      setStatus({ type: "error", message: error.message });
    }
  }

  async function logout() {
    await fetch("/api/auth/logout", { method: "POST" });
    router.replace("/admin/login");
    router.refresh();
  }

  function exportJson() {
    const blob = new Blob([JSON.stringify(content, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "portfolio-content-backup.json";
    a.click();
    URL.revokeObjectURL(url);
  }

  function applyAdvancedJson() {
    try {
      const parsed = JSON.parse(jsonDraft);
      mark(parsed);
      setStatus({ type: "success", message: "JSON applied locally. Click Save to persist it." });
    } catch (error) {
      setStatus({ type: "error", message: `Invalid JSON: ${error.message}` });
    }
  }

  async function uploadImage(file) {
    if (!file) return;
    setStatus({ type: "loading", message: `Uploading ${file.name}…` });
    const body = new FormData();
    body.append("file", file);
    try {
      const response = await fetch("/api/cms/upload", { method: "POST", body });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Upload failed.");
      await navigator.clipboard?.writeText(data.url);
      setStatus({ type: "success", message: `Uploaded: ${data.url}. The path was copied to your clipboard.` });
    } catch (error) {
      setStatus({ type: "error", message: error.message });
    } finally {
      if (fileRef.current) fileRef.current.value = "";
    }
  }

  return (
    <div>
      <div className="flex flex-col gap-5 rounded-[2rem] border border-base-content/10 bg-base-200/40 p-5 sm:p-7 lg:flex-row lg:items-center lg:justify-between">
        <div><p className="section-kicker">Private CMS</p><h1 className="mt-2 text-3xl font-semibold tracking-[-0.04em]">Portfolio content manager</h1><p className="mt-2 text-sm text-base-content/55">Signed in as {adminEmail} · {persistence === "github" ? "GitHub-backed production persistence" : "local file persistence"} · {totalItems} editable records</p></div>
        <div className="flex flex-wrap gap-2">
          <a className="btn btn-ghost btn-sm rounded-full border border-base-content/10" href="/" target="_blank" rel="noreferrer">Preview <ExternalLink size={15} /></a>
          <button className="btn btn-ghost btn-sm rounded-full border border-base-content/10" onClick={exportJson}><Download size={15} /> Backup</button>
          <input ref={fileRef} type="file" accept="image/jpeg,image/png,image/webp,image/avif" className="hidden" onChange={(e) => uploadImage(e.target.files?.[0])} />
          <button className="btn btn-ghost btn-sm rounded-full border border-base-content/10" onClick={() => fileRef.current?.click()}><ImagePlus size={15} /> Upload image</button>
          <button className="btn btn-ghost btn-sm rounded-full border border-base-content/10" onClick={logout}><LogOut size={15} /> Sign out</button>
          <button className="btn btn-primary btn-sm rounded-full px-5" onClick={save} disabled={!dirty || status.type === "loading"}><Save size={15} /> {dirty ? "Save changes" : "Saved"}</button>
        </div>
      </div>

      <div className="mt-4 min-h-6" aria-live="polite">
        {status.message ? <div className={`alert py-3 text-sm ${status.type === "error" ? "alert-error" : status.type === "success" ? "alert-success" : ""}`}>{status.type === "loading" ? <span className="loading loading-spinner loading-sm" /> : null}<span>{status.message}</span></div> : null}
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[230px_minmax(0,1fr)]">
        <aside className="h-fit rounded-[1.75rem] border border-base-content/10 bg-base-200/35 p-2 lg:sticky lg:top-24">
          <nav className="grid gap-1" aria-label="CMS sections">
            {tabs.map((tab) => <button key={tab} type="button" className={`btn btn-sm justify-start rounded-xl ${active === tab ? "btn-primary" : "btn-ghost"}`} onClick={() => setActive(tab)}>{tab === "advanced" ? <Code2 size={15} /> : null}{pretty(tab)}</button>)}
          </nav>
        </aside>

        <div className="min-w-0 rounded-[1.75rem] border border-base-content/10 bg-base-100 p-4 sm:p-6">
          {objectConfigs[active] ? (
            <ObjectEditor title={pretty(active)} value={content[active]} fields={objectConfigs[active]} onChange={(key, value) => updateObject(active, key, value)} />
          ) : null}
          {arrayConfigs[active] ? (
            <ArrayEditor section={active} items={content[active] || []} fields={arrayConfigs[active]} onChange={(index, key, value) => updateArray(active, index, key, value)} onAdd={() => addItem(active)} onRemove={(index) => removeItem(active, index)} />
          ) : null}
          {active === "advanced" ? (
            <div>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"><div><h2 className="text-2xl font-semibold">Advanced JSON editor</h2><p className="mt-1 text-sm text-base-content/55">This exposes every content field. Use the normal editors when possible and keep a backup before large edits.</p></div><button className="btn btn-outline btn-sm rounded-full" onClick={applyAdvancedJson}>Apply JSON</button></div>
              <textarea className="textarea textarea-bordered mt-5 min-h-[65svh] w-full rounded-2xl font-mono text-xs leading-5" value={jsonDraft} onChange={(e) => setJsonDraft(e.target.value)} spellCheck={false} />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

function ObjectEditor({ title, value, fields, onChange }) {
  return <div><h2 className="text-2xl font-semibold">{title}</h2><p className="mt-1 text-sm text-base-content/50">Edit the public-facing values below.</p><div className="mt-6 grid gap-5 md:grid-cols-2">{fields.map(([key, label, type]) => <Field key={key} label={label} type={type} value={value?.[key]} onChange={(next) => onChange(key, next)} full={type === "textarea" || type === "list"} />)}</div></div>;
}

function ArrayEditor({ section, items, fields, onChange, onAdd, onRemove }) {
  return <div><div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"><div><h2 className="text-2xl font-semibold">{pretty(section)}</h2><p className="mt-1 text-sm text-base-content/50">{items.length} item{items.length === 1 ? "" : "s"}</p></div><button className="btn btn-primary btn-sm rounded-full" onClick={onAdd}><Plus size={15} /> Add {singular(section)}</button></div><div className="mt-6 space-y-5">{items.map((item, index) => <div key={`${section}-${index}`} className="rounded-[1.5rem] border border-base-content/10 bg-base-200/25 p-4 sm:p-5"><div className="mb-5 flex items-center justify-between gap-3"><div><p className="font-mono text-[10px] uppercase tracking-[0.16em] text-base-content/40">{singular(section)} {index + 1}</p><p className="mt-1 font-semibold">{item.title || item.name || item.category || item.organization || item.program || item.label || item.value || "Untitled"}</p></div><button className="btn btn-ghost btn-sm btn-circle text-error" onClick={() => onRemove(index)} aria-label={`Delete ${singular(section)} ${index + 1}`}><Trash2 size={16} /></button></div><div className="grid gap-5 md:grid-cols-2">{fields.map(([key, label, type]) => <Field key={key} label={label} type={type} value={item[key]} onChange={(next) => onChange(index, key, next)} full={type === "textarea" || type === "list"} />)}</div></div>)}</div></div>;
}

function Field({ label, value, type = "text", onChange, full }) {
  if (type === "boolean") return <label className={`flex items-center justify-between gap-4 rounded-2xl border border-base-content/10 px-4 py-3 ${full ? "md:col-span-2" : ""}`}><span className="text-sm font-medium">{label}</span><input type="checkbox" className="toggle toggle-primary" checked={Boolean(value)} onChange={(e) => onChange(e.target.checked)} /></label>;
  if (type === "textarea") return <label className={`form-control gap-2 ${full ? "md:col-span-2" : ""}`}><span className="text-sm font-medium">{label}</span><textarea className="textarea textarea-bordered min-h-28 w-full rounded-2xl" value={value || ""} onChange={(e) => onChange(e.target.value)} /></label>;
  if (type === "list") return <label className={`form-control gap-2 ${full ? "md:col-span-2" : ""}`}><span className="text-sm font-medium">{label}</span><textarea className="textarea textarea-bordered min-h-20 w-full rounded-2xl font-mono text-xs" value={Array.isArray(value) ? value.join("\n") : ""} onChange={(e) => onChange(e.target.value.split("\n").map((item) => item.trim()).filter(Boolean))} /><span className="text-[11px] text-base-content/40">One value per line.</span></label>;
  return <label className={`form-control gap-2 ${full ? "md:col-span-2" : ""}`}><span className="text-sm font-medium">{label}</span><input className="input input-bordered w-full rounded-2xl" type={type === "date" ? "date" : "text"} value={value || ""} onChange={(e) => onChange(e.target.value)} /></label>;
}

function pretty(value) { return value.charAt(0).toUpperCase() + value.slice(1).replaceAll("_", " "); }
function singular(value) { return value.endsWith("ies") ? `${value.slice(0, -3)}y` : value.endsWith("s") ? value.slice(0, -1) : value; }
