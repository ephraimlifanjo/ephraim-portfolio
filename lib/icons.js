import {
  Blocks,
  BriefcaseBusiness,
  Cloud,
  Github,
  ExternalLink,
  Linkedin,
  Mail,
  MessageCircle,
  PanelsTopLeft,
  ServerCog,
  Smartphone,
  Sparkles,
} from "lucide-react";

const iconMap = {
  Blocks,
  BriefcaseBusiness,
  Cloud,
  Github,
  ExternalLink,
  Linkedin,
  Mail,
  MessageCircle,
  PanelsTopLeft,
  ServerCog,
  Smartphone,
  Sparkles,
};

export function IconByName({ name, ...props }) {
  const Icon = iconMap[name] || Sparkles;
  return <Icon aria-hidden="true" {...props} />;
}
