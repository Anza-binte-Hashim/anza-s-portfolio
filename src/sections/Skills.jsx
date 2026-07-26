import skillGroups from "../data/skills";
import SkillCard from "../components/SkillCard";

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">

        <div className="section-heading">
          <span className="section-tag">Skills</span>

          <h2 className="section-title">
            Technologies I work with
          </h2>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <SkillCard
              key={group.title}
              group={group}
            />
          ))}
        </div>

      </div>
    </section>
  );
}