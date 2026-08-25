import Link from "next/link";

export default function Brand({ href = "/" }) {
  return (
    <Link href={href} className="brand" aria-label="Ephraim Lifanjo home">
      <img
        className="brand-logo"
        src="/icon.svg"
        alt=""
        width="44"
        height="44"
        decoding="async"
        fetchPriority="high"
        style={{
          width: 44,
          height: 44,
          borderRadius: 0,
          boxShadow: "none",
          filter: "drop-shadow(0 6px 12px rgba(37, 99, 235, .18))",
          objectFit: "contain",
        }}
      />
      <span className="brand-label">Ephraim.</span>
    </Link>
  );
}
