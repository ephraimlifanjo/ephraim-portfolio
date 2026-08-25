import Image from "next/image";
import Link from "next/link";

export default function Brand({ href = "/" }) {
  return (
    <Link href={href} className="brand" aria-label="Ephraim Lifanjo home">
      <Image className="brand-logo" src="/icon.svg" alt="Ephraim Lifanjo EP logo" width={38} height={38} priority />
      <span className="brand-label">Ephraim.</span>
    </Link>
  );
}
