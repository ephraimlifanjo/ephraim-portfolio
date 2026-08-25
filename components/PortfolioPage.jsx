import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import Brand from "@/components/Brand";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import ThemeToggle from "@/components/ThemeToggle";
import SocialLinks from "@/components/SocialLinks";
import { collaborationTypes, site } from "@/data/site";
import { getLocaleInfo, localePath } from "@/data/i18n";

const cardEmojis = ["💻", "🏗️", "🧠"];

export default function PortfolioPage({ locale = "en", dictionary: t }) {
  const localeInfo = getLocaleInfo(locale);
  const homePath = localePath(locale);

  return (
    <main lang={locale} dir={localeInfo.dir}>
      <header className="site-header shell">
        <Brand href={homePath} />
        <nav className="nav-links" aria-label="Main navigation">
          <Link href="/toolkit/">{t.toolkitNav}</Link>
          <a className="collaborate-nav" href="#collaborate">{t.collaborateNav}</a>
          <LanguageSwitcher currentLocale={locale} autoDetect={locale === "en"} />
          <ThemeToggle />
        </nav>
      </header>

      <section className="hero shell">
        <div className="hero-copy">
          <p className="kicker">{t.heroKicker}</p>
          <h1>
            {t.heroPrefix} <span className="marker">{t.heroFocus}</span><br />{t.heroSuffix}
          </h1>
          <p className="hero-lead">{t.heroLead}</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#collaborate">{t.collaborateCta} <FaArrowRight aria-hidden="true" /></a>
            <Link className="btn btn-ghost" href="/toolkit/">{t.toolkitCta}</Link>
          </div>
          <SocialLinks compact />
        </div>

        <div className="portrait-wrap">
          <div className="portrait-badge">open to ideas ✨</div>
          <div className="portrait-frame" title="Ephraim Lifanjo">
            <Image
              src="/ephraim.webp"
              alt="Ephraim Lifanjo, software engineer"
              width={296}
              height={402}
              priority
              sizes="(max-width: 760px) 72vw, 330px"
            />
            <span className="portrait-shine" aria-hidden="true" />
          </div>
          <p className="portrait-note">Engineering, Product, Architecture, AI</p>
        </div>
      </section>

      <section className="statement shell content-auto">
        <div>
          <p className="kicker">{t.whatKicker}</p>
          <h2>{t.whatTitle}</h2>
        </div>
        <div className="statement-grid">
          {t.cards.map((card, index) => (
            <article key={card[0]}>
              <span
                aria-hidden="true"
                style={{ display: "block", fontSize: 30, lineHeight: 1, marginBottom: 42 }}
              >
                {cardEmojis[index] || "✨"}
              </span>
              <h3>{card[0]}</h3>
              <p>{card[1]}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="availability shell content-auto">
        <p className="kicker">{t.openKicker}</p>
        <h2>{t.openTitle}</h2>
        <p>{t.openText}</p>
        <div className="chips">
          {collaborationTypes.map((item) => <span key={item}>{item}</span>)}
        </div>
      </section>

      <section id="collaborate" className="contact shell content-auto">
        <div className="contact-copy">
          <p className="kicker">{t.contactKicker}</p>
          <h2>{t.contactTitle}</h2>
          <p>{t.contactText}</p>
          <div className="contact-direct">
            <a href={`mailto:${site.email}`}><FaEnvelope aria-hidden="true" style={{ color: "#ea4335" }} /> {site.email}</a>
            <a href={site.whatsapp} target="_blank" rel="noopener noreferrer"><FaWhatsapp aria-hidden="true" style={{ color: "#25d366" }} /> {site.phone}</a>
          </div>
        </div>

        <form className="form-card" action={`https://formsubmit.co/${site.email}`} method="POST">
          <input type="hidden" name="_subject" value="New collaboration from ephraimlifanjo.vercel.app" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_next" value={`${site.url}/thanks/`} />
          <input type="text" name="_honey" tabIndex="-1" autoComplete="off" aria-hidden="true" className="honey-field" />
          <label>
            <span>{t.formName}</span>
            <input name="name" placeholder={t.formName} autoComplete="name" required />
          </label>
          <label>
            <span>{t.formEmail}</span>
            <input type="email" name="email" placeholder="you@example.com" autoComplete="email" required />
          </label>
          <label>
            <span>{t.formType}</span>
            <select name="collaboration" defaultValue="Website">
              {collaborationTypes.map((item) => <option key={item}>{item}</option>)}
            </select>
          </label>
          <label>
            <span>{t.formMessage}</span>
            <textarea name="message" rows="6" placeholder={t.formMessage} required />
          </label>
          <button className="btn btn-primary form-submit" type="submit">{t.formSend} <FaArrowRight aria-hidden="true" /></button>
          <p className="form-fallback">{t.formHint}</p>
        </form>
      </section>

      <section className="social-section shell content-auto">
        <div>
          <p className="kicker">{t.socialKicker}</p>
          <h2>{t.socialTitle}</h2>
        </div>
        <SocialLinks />
      </section>

      <footer className="footer shell">
        <span>© 2026 Ephraim Lifanjo.</span>
        <span>{t.footer}</span>
      </footer>
    </main>
  );
}
