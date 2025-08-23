import { Faq } from "@/components/faq";
import { Flow } from "@/components/flow";
import { Hero } from "@/components/Hero";
import { PortfolioCarousel } from "@/components/portfolio";
import { Separator } from "@/components/ui/separator";
import { FaqData } from "@/data/faq";
import { flowData } from "@/data/flow";
import { PortfolioData } from "@/data/portfolio";

export const Home = () => {
  return (
    <div className="flex-1">
      <Hero />
      <Separator />

      <Flow steps={flowData.steps} />
      <Separator />

      <PortfolioCarousel portfolioData={PortfolioData.portfolioData} />
      <Separator />

      <Faq data={FaqData} />
      <Separator />
    </div>
  );
};

export default Home;
