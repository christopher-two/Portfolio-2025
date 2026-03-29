import { TechMarquee } from "@/components/TechMarquee";
import { getHomeProjects, getHomeSocialLinks } from "@/features/home/data/home.repository";
import { homeDesktopProjectsLimit, homeMobileProjectsLimit } from "@/features/home/domain/home.constants";
import { sortProjectsByPriority } from "@/features/projects/domain/projects.selectors";
import { HomeContactSection } from "@/features/home/presentation/components/HomeContactSection";
import { HomeHeroSection } from "@/features/home/presentation/components/HomeHeroSection";
import { HomeProjectsDesktopSection } from "@/features/home/presentation/components/HomeProjectsDesktopSection";
import { HomeProjectsMobileSection } from "@/features/home/presentation/components/HomeProjectsMobileSection";
import { HomeRecognitionsSection } from "@/features/home/presentation/components/HomeRecognitionsSection";
import { HomeSkillsSection } from "@/features/home/presentation/components/HomeSkillsSection";

export default function HomePage() {
  const projects = getHomeProjects();
  const socialLinks = getHomeSocialLinks();

  const parseData = projects.find((project) => project.slug === "parse");
  const sortedProjects = sortProjectsByPriority(projects);

  const desktopProjectsForHome = sortedProjects.slice(0, homeDesktopProjectsLimit);
  const mobileProjectsForHome = sortedProjects.slice(0, homeMobileProjectsLimit);

  return (
    <div className="flex-1 w-full">
      <HomeHeroSection parseData={parseData} />
      <HomeProjectsDesktopSection projects={desktopProjectsForHome} totalProjects={sortedProjects.length} />
      <HomeProjectsMobileSection projects={mobileProjectsForHome} totalProjects={sortedProjects.length} />
      <TechMarquee />
      <HomeSkillsSection />
      <HomeRecognitionsSection />
      <HomeContactSection socialLinks={socialLinks} />
    </div>
  );
}
