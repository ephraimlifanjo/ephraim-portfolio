import Link from "next/link";
import Container from "@/components/Container";

export default function NotFound() {
  return <section className="grid min-h-[65svh] place-items-center py-20"><Container className="text-center"><p className="section-kicker">404</p><h1 className="mt-4 text-5xl font-semibold tracking-[-0.05em]">This page isn’t here.</h1><p className="mx-auto mt-4 max-w-lg text-base-content/60">The link may be old, or the content may have moved.</p><Link href="/" className="btn btn-primary mt-7 rounded-full">Back home</Link></Container></section>;
}
