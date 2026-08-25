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

export default function SocialLinks({ compact = false }) {
  return (
    <div className={compact ? "socials socials--compact" : "socials"}>
      {socials.map((social) => {
        const Icon = icons[social.key] || FaGlobe;
        return (
          <a
            key={social.key}
            href={social.href}
            target={social.href.startsWith("http") ? "_blank" : undefined}
            rel={social.href.startsWith("http") ? "me noopener noreferrer" : undefined}
            aria-label={social.label}
            title={social.label}
          >
            <Icon aria-hidden="true" />
            {!compact && <span>{social.label}</span>}
          </a>
        );
      })}
    </div>
  );
}
