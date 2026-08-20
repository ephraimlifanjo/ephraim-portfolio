export default function SectionHeading({ eyebrow, title, description, align = "left" }) {
  const centered = align === "center";
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"} data-reveal>
      {eyebrow ? <p className="section-kicker">{eyebrow}</p> : null}
      <h2 className="mt-3 text-balance text-3xl font-semibold tracking-[-0.04em] sm:text-4xl lg:text-5xl">{title}</h2>
      {description ? (
        <p className="mt-5 max-w-2xl text-pretty text-base leading-7 text-base-content/65 sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
