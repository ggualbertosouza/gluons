export type PortfolioProject = {
  id: number;
  title: string;
  type: string;
  technology: string;
  description: string;
  imageUrl: string;
  demoUrl?: string;
};

export type PortfolioData = {
  title: string;
  subtitle: string;
  projects: PortfolioProject[];
};

export type PortfolioCarouselProps = {
  portfolioData: PortfolioData;
};
