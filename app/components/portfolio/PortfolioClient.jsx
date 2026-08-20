"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { FaGithub, FaLinkedin, FaFacebook, FaWhatsapp, FaDev, FaStackOverflow, FaReddit, FaXTwitter } from "react-icons/fa6";
import { SiBluesky } from "react-icons/si";
import { HiOutlineArrowUpRight, HiOutlineEnvelope, HiOutlineMapPin } from "react-icons/hi2";
import Hero3D from "./Hero3D";
import { useLanguage } from "./LanguageProvider";
import { profile, projects, skills, experience, education } from "@/utils/data/portfolio-data";

const reveal={initial:{opacity:0,y:28},whileInView:{opacity:1,y:0},viewport:{once:true,amount:.18},transition:{duration:.55,ease:"easeOut"}};
const social=[
  [FaGithub,profile.github,"GitHub"],[FaLinkedin,profile.linkedin,"LinkedIn"],[FaXTwitter,profile.twitter,"X"],[FaDev,profile.devto,"DEV"],[FaStackOverflow,profile.stackoverflow,"Stack Overflow"],[SiBluesky,profile.bluesky,"Bluesky"],[FaReddit,profile.reddit,"Reddit"],[FaFacebook,profile.facebook,"Facebook"]
];

function SectionTitle({eyebrow,title}){return <div className="mb-8"><p className="text-xs font-semibold uppercase tracking-[.28em] text-cyan-300">{eyebrow}</p><h2 className="mt-2 text-3xl font-black tracking-tight text-white sm:text-4xl">{title}</h2></div>}

export default function PortfolioClient(){
  const {lang,t,setLang}=useLanguage();
  const heroRef=useRef(null);
  useEffect(()=>{ if(heroRef.current) gsap.fromTo(heroRef.current.querySelectorAll("[data-hero]"),{opacity:0,y:20},{opacity:1,y:0,duration:.7,stagger:.11,ease:"power3.out"});},[]);
  return <>
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#07111f]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-4 lg:px-8">
        <Link href="#home" className="font-black tracking-[.18em] text-white">EPHRAIM<span className="text-cyan-300">.</span></Link>
        <nav className="hidden gap-5 text-sm text-slate-300 lg:flex">{t.nav.map((x,i)=><Link key={x} href={`#${["about","experience","skills","projects","education","contact"][i]}`} className="hover:text-white">{x}</Link>)}</nav>
        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 p-1">{["en","fr","de"].map(x=><button key={x} onClick={()=>setLang(x)} className={`rounded-full px-3 py-1 text-xs font-bold uppercase ${lang===x?"bg-cyan-300 text-slate-950":"text-slate-300 hover:text-white"}`}>{x}</button>)}</div>
      </div>
    </header>

    <main className="mx-auto max-w-7xl px-5 lg:px-8">
      <section id="home" ref={heroRef} className="relative grid min-h-[88vh] items-center gap-10 py-16 lg:grid-cols-[1.1fr_.9fr] lg:py-24">
        <div>
          <div data-hero className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/5 px-4 py-2 text-xs font-semibold uppercase tracking-[.2em] text-cyan-200"><span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400"/>Available for collaboration</div>
          <p data-hero className="text-lg font-semibold text-slate-300">{t.hello}</p>
          <h1 data-hero className="mt-2 text-5xl font-black leading-[.98] tracking-[-.045em] text-white sm:text-6xl lg:text-7xl">Ephraim<br/><span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-violet-400 bg-clip-text text-transparent">Lifanjo Sewa</span></h1>
          <h2 data-hero className="mt-5 max-w-3xl text-xl font-bold text-slate-200 sm:text-2xl">{t.role}</h2>
          <p data-hero className="mt-5 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">{t.intro}</p>
          <div data-hero className="mt-8 flex flex-wrap gap-3">
            <Link href={profile.whatsapp} target="_blank" className="rounded-full bg-cyan-300 px-6 py-3 font-bold text-slate-950 transition hover:scale-[1.03]">{t.hire}</Link>
            <Link href={`mailto:${profile.email}`} className="rounded-full border border-white/15 bg-white/5 px-6 py-3 font-bold text-white hover:bg-white/10">{t.collaborate}</Link>
          </div>
          <div data-hero className="mt-8 flex flex-wrap gap-3">{social.slice(0,5).map(([Icon,url,label])=><Link key={label} aria-label={label} href={url} target="_blank" className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition hover:-translate-y-1 hover:border-cyan-300/40 hover:text-cyan-200"><Icon/></Link>)}</div>
        </div>
        <div className="relative mx-auto w-full max-w-xl">
          <div className="absolute inset-0 -z-10 rounded-full bg-cyan-400/10 blur-3xl"/>
          <Hero3D/>
          <div className="absolute inset-0 grid place-items-center pointer-events-none">
            <div className="relative h-64 w-52 overflow-hidden rounded-[2rem] border border-white/20 bg-slate-900/80 shadow-2xl shadow-cyan-950/40 sm:h-80 sm:w-64">
              <Image src="/profile/ephraim-portrait.jpg" fill sizes="256px" alt="Ephraim Lifanjo Sewa" className="object-cover object-top" priority/>
            </div>
          </div>
        </div>
      </section>

      <motion.section {...reveal} id="about" className="grid gap-8 border-t border-white/10 py-20 lg:grid-cols-[.8fr_1.2fr]">
        <SectionTitle eyebrow="01 / Profile" title={t.aboutTitle}/>
        <div><p className="text-xl leading-9 text-slate-300">{t.about}</p><div className="mt-8 grid gap-4 sm:grid-cols-3"><Stat n="700+" label="Nova Studio community"/><Stat n="8+" label="Products & projects"/><Stat n="EN · FR · DE" label="Languages"/></div></div>
      </motion.section>

      <motion.section {...reveal} id="experience" className="border-t border-white/10 py-20"><SectionTitle eyebrow="02 / Work" title={t.exp}/><div className="grid gap-5">{experience.map((e,i)=><article key={e.role} className="rounded-3xl border border-white/10 bg-white/[.035] p-6 sm:p-8"><div className="flex flex-col justify-between gap-2 sm:flex-row"><div><p className="text-sm font-semibold text-cyan-300">{e.company}</p><h3 className="mt-1 text-2xl font-bold text-white">{e.role}</h3><p className="text-sm text-slate-500">{e.location}</p></div><p className="text-sm font-semibold text-slate-400">{e.date}</p></div><ul className="mt-5 grid gap-2 text-slate-300">{e.bullets.map(b=><li key={b} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300"/>{b}</li>)}</ul></article>)}</div></motion.section>

      <motion.section {...reveal} id="skills" className="border-t border-white/10 py-20"><SectionTitle eyebrow="03 / Stack" title={t.skills}/><div className="flex flex-wrap gap-3">{skills.map(s=><span key={s} className="rounded-full border border-white/10 bg-white/[.04] px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-cyan-300/40 hover:bg-cyan-300/5 hover:text-cyan-200">{s}</span>)}</div></motion.section>

      <motion.section {...reveal} id="projects" className="border-t border-white/10 py-20"><SectionTitle eyebrow="04 / Build" title={t.projects}/><div className="grid gap-5 md:grid-cols-2">{projects.map(p=><article key={p.title} className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#0b1728] p-6 sm:p-8"><div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${p.accent}`}/><p className="text-xs font-bold uppercase tracking-[.18em] text-cyan-300">{p.kicker}</p><h3 className="mt-3 text-2xl font-black text-white">{p.title}</h3><p className="mt-4 leading-7 text-slate-400">{p.description}</p><div className="mt-5 flex flex-wrap gap-2">{p.tags.map(x=><span key={x} className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-300">{x}</span>)}</div><div className="mt-6 flex gap-4 text-sm font-bold">{p.code?<Link target="_blank" href={p.code} className="inline-flex items-center gap-1 text-cyan-300 hover:text-cyan-200">{t.source}<HiOutlineArrowUpRight/></Link>:<span className="text-slate-500">{t.private}</span>}</div></article>)}</div></motion.section>

      <motion.section {...reveal} id="education" className="border-t border-white/10 py-20"><SectionTitle eyebrow="05 / Learn" title={t.education}/><div className="grid gap-4">{education.map((e,i)=><div key={e.title} className="grid gap-2 rounded-2xl border border-white/10 bg-white/[.03] p-5 sm:grid-cols-[1fr_auto]"><div><h3 className="font-bold text-white">{e.title}</h3><p className="text-sm text-slate-400">{e.school}</p></div><p className="text-sm font-semibold text-cyan-300">{e.date}</p></div>)}</div></motion.section>

      <motion.section {...reveal} className="border-t border-white/10 py-20"><div className="grid items-center gap-8 lg:grid-cols-2"><div className="relative aspect-square overflow-hidden rounded-[2rem] border border-white/10"><Image src="/work/ephraim-work-1.jpg" fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" alt="Ephraim working on software"/></div><div><SectionTitle eyebrow="06 / Product mindset" title="Engineering is only useful when it ships."/><p className="text-lg leading-8 text-slate-400">I care about usable interfaces, maintainable systems, business value, offline realities, deployment, distribution and the people who will actually use the product.</p><div className="mt-6 rounded-3xl border border-white/10 bg-white/[.035] p-6"><div className="flex items-center gap-4"><Image src="/brand/nova-studio.png" alt="Nova Studio" width={72} height={72} className="rounded-2xl"/><div><p className="font-black text-white">Nova Studio</p><p className="text-sm text-slate-400">Platform, products, community and collaboration.</p></div></div></div></div></div></motion.section>

      <motion.section {...reveal} id="contact" className="border-y border-white/10 py-20"><SectionTitle eyebrow="07 / Contact" title={t.contact}/><div className="grid gap-8 lg:grid-cols-[1fr_auto]"><div><p className="max-w-2xl text-lg leading-8 text-slate-400">{t.contactText}</p><div className="mt-6 grid gap-3 text-slate-300"><a href={`mailto:${profile.email}`} className="flex items-center gap-3 hover:text-white"><HiOutlineEnvelope className="text-cyan-300"/>{profile.email}</a><a href={profile.whatsapp} target="_blank" className="flex items-center gap-3 hover:text-white"><FaWhatsapp className="text-cyan-300"/>{profile.phone}</a><span className="flex items-center gap-3"><HiOutlineMapPin className="text-cyan-300"/>{profile.location}</span></div></div><div className="flex flex-wrap gap-3 lg:max-w-sm lg:justify-end">{social.map(([Icon,url,label])=><Link key={label} href={url} target="_blank" className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 hover:text-white"><Icon/>{label}</Link>)}</div></div></motion.section>
    </main>
    <footer className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-10 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between lg:px-8"><p>© 2026 Ephraim Lifanjo Sewa. Built as a product, not a template dump.</p><p>Cameroon · Web · Mobile · Product Engineering</p></footer>
  </>
}

function Stat({n,label}){return <div className="rounded-2xl border border-white/10 bg-white/[.035] p-5"><p className="text-2xl font-black text-white">{n}</p><p className="mt-1 text-sm text-slate-500">{label}</p></div>}
