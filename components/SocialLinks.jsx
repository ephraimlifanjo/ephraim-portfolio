import {
  FaBriefcase,
  FaComments,
  FaDev,
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaGlobe,
  FaLinkedin,
  FaRedditAlien,
  FaStackOverflow,
  FaWhatsapp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiBluesky } from "react-icons/si";
import { socials } from "@/data/site";

const icons = {
  github: FaGithub,
  linkedin: FaLinkedin,
  x: FaXTwitter,
  bluesky: SiBluesky,
  dev: FaDev,
  stackoverflow: FaStackOverflow,
  reddit: FaRedditAlien,
  facebook: FaFacebook,
  jobbers: FaBriefcase,
  dikalo: FaComments,
  indiepage: FaGlobe,
  whatsapp: FaWhatsapp,
  email: FaEnvelope,
};

const brandColors = {
  github: "#6e5494",
  linkedin: "#0a66c2",
  x: "#536471",
  bluesky: "#1185fe",
  dev: "#3b49df",
  stackoverflow: "#f48024",
  reddit: "#ff4500",
  facebook: "#1877f2",
  jobbers: "#0ea5e9",
  dikalo: "#f59e0b",
  indiepage: "#8b5cf6",
  whatsapp: "#25d366",
  email: "#ea4335",
};

export default function SocialLinks({ compact = false }) {
  return (
    <div className={compact ? "socials socials--compact" : "socials"}>
      {socials.map((social) => {
        const Icon = icons[social.key] || FaGlobe;
        const color = brandColors[social.key] || "#2563eb";

        return (
          <a
            key={social.key}
            href={social.href}
            target={social.href.startsWith("http") ? "_blank" : undefined}
            rel={social.href.startsWith("http") ? "me noopener noreferrer" : undefined}
            aria-label={social.label}
            title={social.label}
            style={{ borderColor: `${color}55` }}
          >
            <Icon aria-hidden="true" style={{ color }} />
            {!compact && <span>{social.label}</span>}
          </a>
        );
      })}
    </div>
  );
}
