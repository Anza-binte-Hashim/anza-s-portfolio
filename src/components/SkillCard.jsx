export default function SkillCard({ group }) {
  return (
    <article className="skill-card">
      <h3>{group.title}</h3>

      <ul className="skill-list">
        {group.skills.map((skill) => (
          <li
            key={skill}
            className="skill-pill"
          >
            {skill}
          </li>
        ))}
      </ul>
    </article>
  );
}