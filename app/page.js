export const dynamic = "force-static";

const toolkit = [
  "JavaScript",
  "React",
  "Next.js",
  "React Native / Expo",
  "Node.js",
  "PostgreSQL",
  "Firebase",
  "Vercel",
];

const focus = [
  {
    emoji: "🧩",
    title: "Product-minded",
    text: "I care about the problem, the user experience, and the code that keeps the product maintainable.",
  },
  {
    emoji: "⚡",
    title: "Ship-first",
    text: "I prefer simple systems that reach real users quickly, then improve from feedback and evidence.",
  },
  {
    emoji: "📱",
    title: "Web + mobile",
    text: "I build across the JavaScript ecosystem, from responsive web experiences to mobile applications.",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <div className="shell nav-wrap">
          <a className="brand" href="#top" aria-label="Ephraim Lifanjo home">
            Ephraim <span>↗</span>
          </a>
          <nav aria-label="Main navigation">
            <a href="#about">About</a>
            <a href="#toolkit">Toolkit</a>
            <a className="nav-cta" href="#collaborate">Collaborate 🤝</a>
          </nav>
        </div>
      </header>

      <div className="shell" id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div className="availability"><span /> Available for collaboration</div>
            <p className="eyebrow">Hello, I&apos;m Ephraim 👋🏾</p>
            <h1 id="hero-title">
              I build <span className="marker marker-lime">useful software</span> for the web &amp; mobile.
            </h1>
            <p className="hero-text">
              Software engineer and full-stack developer focused on clear interfaces, reliable systems, and products people can actually use.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="#collaborate">Let&apos;s collaborate <span>→</span></a>
              <a className="button button-light" href="mailto:ephraimlifanjos@gmail.com">Email me</a>
            </div>
          </div>

          <aside className="profile-card" aria-label="Ephraim profile card">
            <div className="profile-topline"><span>CAMEROON</span><span>🌍</span></div>
            <img
              src="https://avatars.githubusercontent.com/u/311614928?v=4"
              alt="Ephraim Lifanjo"
              width="320"
              height="320"
              className="portrait"
            />
            <div className="profile-bottom">
              <div>
                <strong>Ephraim Lifanjo</strong>
                <span>Software Engineer</span>
              </div>
              <span className="profile-emoji" aria-hidden="true">⌁</span>
            </div>
          </aside>
        </section>

        <section className="about section" id="about">
          <p className="section-index">01 / ABOUT</p>
          <div className="section-body about-copy">
            <h2>I like software that feels <span className="marker marker-purple">simple</span>.</h2>
            <p>
              I&apos;m Ephraim Lifanjo Sewa, a software engineer based in Cameroon. I work across frontend, mobile, backend APIs, databases, and deployment — but I try to keep the experience uncomplicated for the person using the product.
            </p>
            <p>
              I&apos;m especially interested in useful digital products, education technology, business tools, and collaborations where engineering can create measurable value.
            </p>
            <div className="inline-links" aria-label="Social links">
              <a href="https://github.com/ephraimlifanjo" target="_blank" rel="noreferrer">GitHub ↗</a>
              <a href="https://www.linkedin.com/in/ephraim-lifanjo-5b2156329" target="_blank" rel="noreferrer">LinkedIn ↗</a>
              <a href="mailto:ephraimlifanjos@gmail.com">Email ↗</a>
            </div>
          </div>
        </section>

        <section className="section" id="toolkit">
          <p className="section-index">02 / TOOLKIT</p>
          <div className="section-body">
            <h2>Tools I enjoy building with 🛠️</h2>
            <div className="toolkit" aria-label="Technical toolkit">
              {toolkit.map((item) => <span key={item}>{item}</span>)}
            </div>
            <div className="focus-grid">
              {focus.map((item) => (
                <article className="focus-card" key={item.title}>
                  <span className="focus-emoji" aria-hidden="true">{item.emoji}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section collaborate" id="collaborate">
          <p className="section-index">03 / COLLABORATE</p>
          <div className="section-body collaborate-grid">
            <div className="collab-copy">
              <h2>Have something worth building? <span className="marker marker-orange">Tell me.</span></h2>
              <p>
                Share the idea, the problem, or the collaboration you have in mind. This form is intentionally simple and sends the message to my email inbox.
              </p>
              <div className="contact-note">
                <span>📬</span>
                <div><strong>Prefer email?</strong><a href="mailto:ephraimlifanjos@gmail.com">ephraimlifanjos@gmail.com</a></div>
              </div>
            </div>

            <form
              className="contact-form"
              action="https://formsubmit.co/ephraimlifanjos@gmail.com"
              method="POST"
            >
              <input type="hidden" name="_subject" value="New collaboration request — ephraim portfolio" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />
              <input className="honey" type="text" name="_honey" tabIndex="-1" autoComplete="off" />

              <div className="form-row">
                <label>
                  Your name
                  <input name="name" type="text" placeholder="Jane Doe" required />
                </label>
                <label>
                  Email
                  <input name="email" type="email" placeholder="jane@company.com" required />
                </label>
              </div>

              <label>
                What are we talking about?
                <select name="collaboration_type" defaultValue="Product collaboration">
                  <option>Product collaboration</option>
                  <option>Web development</option>
                  <option>Mobile development</option>
                  <option>Software engineering</option>
                  <option>Freelance / contract work</option>
                  <option>Something else</option>
                </select>
              </label>

              <label>
                Message
                <textarea name="message" rows="6" placeholder="Tell me what you want to build, improve, or explore together…" required />
              </label>

              <button className="button button-dark submit-button" type="submit">Send collaboration request <span>↗</span></button>
              <p className="form-small">No account. No dashboard. Just a message. ✨</p>
            </form>
          </div>
        </section>

        <footer>
          <p>© 2026 Ephraim Lifanjo Sewa.</p>
          <p>Built with Next.js · Kept intentionally simple.</p>
        </footer>
      </div>
    </main>
  );
}
