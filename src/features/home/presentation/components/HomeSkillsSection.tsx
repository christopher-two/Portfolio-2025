import { TechCard } from "@/components/TechCard";
import { homeTechSkills } from "@/features/home/domain/home.constants";

export function HomeSkillsSection() {
  return (
    <section className="border-t-2 border-border">
      <div className="grid grid-cols-1 md:grid-cols-3 w-full">
        {homeTechSkills.map((skill, index) => (
          <div key={index} className="border-r-2 border-b-2 border-border">
            <TechCard {...skill} />
          </div>
        ))}
      </div>
    </section>
  );
}
