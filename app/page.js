import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaBrain, FaCode, FaEnvelope, FaLaptopCode, FaWhatsapp } from "react-icons/fa";
import ThemeToggle from "@/components/ThemeToggle";
import SocialLinks from "@/components/SocialLinks";
import { collaborationTypes, site } from "@/data/site";

export const revalidate = false;

export default function Home() {
  return (
    <main>
      <header className="site-header shell">
        <Link href="/" className="brand" aria-label="Ephraim Lifanjo home">
          <span className="brand-mark">EP</span>
          <span>Ephraim.</span>
        </Link>
        <nav className="nav-links" aria-label="Main navigation">
          <Link href="/toolkit">Toolkit</Link>
          <Link href="#collaborate">Collaborate</Link>
          <ThemeToggle />
        </nav>
      </header>

      <section className="hero shell">
        <div className="hero-copy">
          <p className="kicker">👋 Software engineer from Cameroon</p>
          <h1>
            I build <span className="marker">useful</span> software,
            <br />from scratch.
          </h1>
          <p className="hero-lead">
            Full-stack web, mobile & desktop developer. I model complex architectures, build reliable products,
            and integrate AI into real systems when it creates meaningful value.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#collaborate">Collaborate with me <FaArrowRight /></a>
            <Link className="btn btn-ghost" href="/toolkit">Explore my toolkit 🧰</Link>
          </div>
          <SocialLinks compact />
        </div>

        <div className="portrait-wrap">
          <div className="portrait-badge">open to ideas ✨</div>
          <div className="portrait-frame">
            <Image
              src="/ephraim.webp"
              alt="Ephraim Lifanjo, software engineer"
              width={296}
              height={402}
              priority
              sizes="(max-width: 760px) 72vw, 330px"
            />
          </div>
          <p className="portrait-note">Engineering · Product · Architecture · AI</p>
        </div>
      </section>

      <section className="statement shell">
        <div>
          <p className="kicker">What I do</p>
          <h2>Build the system. Ship the product. Improve the experience.</h2>
        </div>
        <div className="statement-grid">
          <article>
            <FaCode />
            <h3>Software engineering</h3>
            <p>Modern web platforms, APIs, mobile applications and desktop software with maintainable foundations.</p>
          </article>
          <article>
            <FaLaptopCode />
            <h3>Architecture from scratch</h3>
            <p>I turn product requirements into practical frontend, backend, data, offline and deployment architectures.</p>
          </article>
          <article>
            <FaBrain />
            <h3>AI integration</h3>
            <p>AI-assisted workflows, OCR, automation and intelligent product features designed around the real system.</p>
          </article>
        </div>
      </section>

      <section className="availability shell">
        <p className="kicker">🤝 Open to collaboration</p>
        <h2>Websites, mobile apps, desktop software, hackathons, bootcamps and serious tech challenges.</h2>
        <p>
          I’m open to building with founders, teams, students, communities and engineers — from an early idea to a working product.
        </p>
        <div className="chips">
          {collaborationTypes.slice(0, 9).map((item) => <span key={item}>{item}</span>)}
        </div>
      </section>

      <section id="collaborate" className="contact shell">
        <div className="contact-copy">
          <p className="kicker">Say hello 👋</p>
          <h2>Have an idea?<br />Let’s collaborate.</h2>
          <p>Tell me what you’re building, the kind of collaboration you need, and where I can help.</p>
          <div className="contact-direct">
            <a href={`mailto:${site.email}`}><FaEnvelope /> {site.email}</a>
            <a href={site.whatsapp} target="_blank" rel="noreferrer"><FaWhatsapp /> {site.phone}</a>
          </div>
        </div>

        <form className="form-card" action={`https://formsubmit.co/${site.email}`} method="POST">
          <input type="hidden" name="_subject" value="New collaboration from ephraimlifanjo.vercel.app" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_next" value={`${site.url}/thanks/`} />
          <input type="text" name="_honey" tabIndex="-1" autoComplete="off" aria-hidden="true" style={{ display: "none" }} />
          <label>
            <span>Name</span>
            <input name="name" placeholder="Your name" autoComplete="name" required />
          </label>
          <label>
            <span>Email</span>
            <input type="email" name="email" placeholder="you@example.com" autoComplete="email" required />
          </label>
          <label>
            <span>Collaboration</span>
            <select name="collaboration" defaultValue="Website">
              {collaborationTypes.map((item) => <option key={item}>{item}</option>)}
            </select>
          </label>
          <label>
            <span>Message</span>
            <textarea name="message" rows="6" placeholder="Tell me about the idea, challenge or event…" required />
          </label>
          <button className="btn btn-primary form-submit" type="submit">Send message <FaArrowRight /></button>
          <p className="form-fallback">
            No account or API key is required. If the form service is unavailable, you can also <a href={`mailto:${site.email}?subject=Collaboration%20with%20Ephraim`}>email me directly</a> or use WhatsApp.
          </p>
        </form>
      </section>

      <section className="social-section shell">
        <div>
          <p className="kicker">Find me online 🌍</p>
          <h2>Developer profiles & social accounts</h2>
        </div>
        <SocialLinks />
      </section>

      <footer className="footer shell">
        <span>© 2026 Ephraim Lifanjo.</span>
        <span>Software Engineer · Cameroon</span>
      </footer>
    </main>
  );
}
