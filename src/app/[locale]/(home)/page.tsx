import {
  ArticlesSection,
  HeroSection,
  NavigationSection,
  QuotesSection,
  StatisticsSection,
} from "./_components/sections";

const HomePage = () => {
  return (
    <div className="space-y-12">
      <HeroSection />
      <NavigationSection />
      <StatisticsSection />
      <ArticlesSection />
      <QuotesSection />
    </div>
  );
};

export default HomePage;
