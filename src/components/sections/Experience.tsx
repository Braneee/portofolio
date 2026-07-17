import { GraduationCap } from "lucide-react";

interface TimelineItemProps {
  date: string;
  title: string;
  company: string;
  description: string;
}

function TimelineItem({
  date,
  title,
  company,
  description,
}: TimelineItemProps) {
  return (
    <div className="relative pl-8 sm:pl-32 pb-12 last:pb-0 group">
      {/* Date sidebar (desktop) */}
      <div className="absolute left-0 top-0 hidden sm:flex w-24 flex-col items-end text-right">
        <span className="font-mono text-xs font-bold text-text-tertiary uppercase tracking-wider mt-1">{date}</span>
      </div>

      {/* Bullet Indicator */}
      <div className="absolute left-0 sm:left-28 top-0 z-10 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border border-border bg-surface text-text-secondary shadow-sm group-hover:border-primary-500 group-hover:text-primary-500 transition-colors duration-300">
        <GraduationCap className="h-4 w-4" />
      </div>

      {/* Line Connector */}
      <div className="absolute left-0 sm:left-28 top-8 bottom-0 w-px -translate-x-1/2 bg-border group-last:hidden" />

      {/* Content Card */}
      <div className="flex flex-col bg-surface/40 hover:bg-surface border border-border/60 hover:border-border p-5 rounded-xl transition-all duration-200 shadow-sm hover:shadow-md">
        {/* Date mobile */}
        <span className="font-mono text-[10px] font-bold text-text-tertiary sm:hidden mb-2">{date}</span>

        <h3 className="font-sans text-base font-bold text-text-primary">
          {title}
        </h3>
        <span className="font-sans text-xs font-semibold text-primary-500 mt-0.5">{company}</span>
        
        <p className="font-sans text-xs text-text-secondary mt-3 leading-relaxed text-justify">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function Experience() {
  const experiences = [
    {
      date: "2023 - Present",
      title: "Bachelor of Computer Science (Technical Informatics)",
      company: "Dian Nuswantoro University (UDINUS) | Semarang, Indonesia",
      description: "GPA: 3.68 / 4.00 (6th Semester). Academic Focus: Object-Oriented Programming (OOP), Data Structures & Algorithms, Software Engineering, Relational Database Systems, Web & Mobile Development.",
    },
    {
      date: "2020 - 2023",
      title: "High School (Mathematics & Natural Sciences)",
      company: "SMAN 02 Brebes | Brebes, Central Java, Indonesia",
      description: "Graduated with honors in Mathematics and MIPA sciences. Participated in basic algorithmic programming and math competitions.",
    },
  ];

  return (
    <section className="py-20 overflow-hidden relative">
      {/* Faded Ends border line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-border/70 to-transparent" />

      <div className="mb-12 text-center sm:text-left">
        <h2 className="font-sans text-3xl font-bold tracking-tight text-text-primary sm:text-4xl flex items-center justify-center sm:justify-start gap-2">
          <GraduationCap className="h-8 w-8 text-primary-500 shrink-0" />
          <span>Education Timeline</span>
        </h2>
        <p className="font-sans text-sm text-text-secondary mt-2 max-w-xl">
          Track my academic journey and unlocked milestones over the years.
        </p>
      </div>

      <div className="mx-auto max-w-3xl pt-4">
        {experiences.map((exp, idx) => (
          <TimelineItem key={idx} {...exp} />
        ))}
      </div>
    </section>
  );
}
