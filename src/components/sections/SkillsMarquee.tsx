import React from "react";

interface MarqueeItem {
  name: string;
  image?: string;
  customSvg?: React.ReactNode;
  className?: string;
}

export default function SkillsMarquee() {
  const row1: MarqueeItem[] = [
    {
      name: "Flutter",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg",
    },
    {
      name: "Dart",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg",
    },
    {
      name: "Riverpod",
      customSvg: (
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-[#02569B] dark:fill-[#0175C2]">
          <path d="M12 2L2 12h5v8h10v-8h5L12 2zm0 3.8L18.2 11H15v7H9v-7H5.8L12 5.8z" />
        </svg>
      ),
    },
    {
      name: "Supabase",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg",
    },
    {
      name: "Hive DB",
      customSvg: (
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-[#FFB300]">
          <path d="M12 1L3 6v11l9 5 9-5V6l-9-5zm7 15l-7 3.8-7-3.8V7l7-3.8 7 3.8v9z" />
        </svg>
      ),
    },
    {
      name: "sqflite",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg",
    },
    {
      name: "Google ML Kit",
      customSvg: (
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-[#4285F4]">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
        </svg>
      ),
    },
    {
      name: "iOS Development",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apple/apple-original.svg",
    },
    {
      name: "Android SDK",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/android/android-original.svg",
    },
  ];

  const row2: MarqueeItem[] = [
    {
      name: "React",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    },
    {
      name: "Next.js 14",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
      className: "dark:invert",
    },
    {
      name: "TypeScript",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    },
    {
      name: "Tailwind CSS",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    },
    {
      name: "Laravel",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
    },
    {
      name: "Django",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg",
      className: "dark:invert",
    },
    {
      name: "PostgreSQL",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
    },
    {
      name: "Docker",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
    },
    {
      name: "Row Level Security (RLS)",
      customSvg: (
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-[#3b6cff]">
          <path d="M12 1L3 5v6c0 5.5 4.5 10 9 10s9-4.5 9-10V5l-9-4zm-2 15l-4-4 1.4-1.4 2.6 2.6 5.6-5.6 1.4 1.4-7 7z" />
        </svg>
      ),
    },
  ];

  const renderMarqueeRow = (items: MarqueeItem[], reverse = false) => {
    // Duplicate items to ensure seamless loop
    const doubledItems = [...items, ...items, ...items];

    return (
      <div className="relative flex w-full overflow-hidden py-3">
        <div
          className={`${
            reverse ? "animate-marquee-reverse" : "animate-marquee"
          } flex gap-4`}
        >
          {doubledItems.map((item, idx) => (
            <div
              key={idx}
              className="hover-pause flex items-center gap-3 rounded-xl border border-border bg-surface px-5 py-3 shadow-sm hover:border-primary-500 hover:text-primary-500 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
            >
              <span className="flex h-5 w-5 items-center justify-center shrink-0">
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.name}
                    className={`h-5 w-5 object-contain ${item.className || ""}`}
                  />
                ) : (
                  item.customSvg
                )}
              </span>
              <span className="font-sans text-sm font-semibold text-text-primary whitespace-nowrap">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section className="py-16 border-t border-border overflow-hidden relative">
      {/* Title */}
      <div className="text-center mb-10">
        <h2 className="font-sans text-2xl font-bold tracking-tight text-text-primary sm:text-3xl">
          Core Technologies & Tools
        </h2>
        <p className="font-sans text-sm text-text-secondary mt-1">
          Hover over a technology card to pause the scroll.
        </p>
      </div>

      {/* Marquee Wrapper with side fade-out gradients */}
      <div className="relative w-full overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-20 before:bg-gradient-to-r before:from-bg before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-20 after:bg-gradient-to-l after:from-bg after:to-transparent">
        {/* Row 1: Left to Right */}
        {renderMarqueeRow(row1, false)}
        {/* Row 2: Right to Left */}
        {renderMarqueeRow(row2, true)}
      </div>
    </section>
  );
}
