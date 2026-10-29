import { CodeXml } from "lucide-react";
import {
  SiAndroid,
  SiFlutter,
  SiLaravel,
  SiPostgresql,
  SiReact,
} from "react-icons/si";

const technologies = [
  { name: "Flutter", Icon: SiFlutter },
  { name: "Android", Icon: SiAndroid },
  { name: "React", Icon: SiReact },
  { name: "Laravel", Icon: SiLaravel },
  { name: "API", Icon: CodeXml },
  { name: "PostgreSQL", Icon: SiPostgresql },
] as const;

export default function TechStackStrip() {
  return (
    <div className="skill-strip">
      <span className="sr-only">
        Teknologi: {technologies.map(({ name }) => name).join(", ")}
      </span>
      <div className="skill-strip-track" aria-hidden="true">
        {[0, 1].map((copy) => (
          <div className="skill-strip-group" key={copy}>
            {technologies.map(({ name, Icon }) => (
              <span className="tech-mark" title={name} key={`${copy}-${name}`}>
                <Icon />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
