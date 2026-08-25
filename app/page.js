import PortfolioPage from "@/components/PortfolioPage";
import { getDictionary } from "@/data/i18n";

export const revalidate = false;

export default function Home() {
  return <PortfolioPage locale="en" dictionary={getDictionary("en")} />;
}
