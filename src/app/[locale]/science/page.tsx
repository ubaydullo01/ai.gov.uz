import {
  ScienceHeroSection,
  ScienceNewsSection,
  ScienceStatisticsSection,
  ScienceTabNavigationSection,
} from "./_components/sections";

const SciencePage = () => {
  return (
    <div className="space-y-6">
      <ScienceHeroSection />
      <ScienceNewsSection />
      <ScienceStatisticsSection />
      <ScienceTabNavigationSection />
    </div>
  );
};

export default SciencePage;
