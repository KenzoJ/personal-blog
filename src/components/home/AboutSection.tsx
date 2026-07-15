const YEARS = [
  { year: 2017, event: "Studied film at Austin Film School" },
  { year: 2018, event: "Started working at a film studio" },
  { year: 2019, event: "Created a production company" },
  { year: 2020, event: "Worked at a non-fiction production company" },
  { year: 2021, event: "Went to art school for storyboarding" },
  { year: 2022, event: "Studied programming independently" },
  { year: 2023, event: "Got first programming job — Ruby on Rails, AWS" },
  { year: 2024, event: "Learning React on the side" },
  {
    year: 2025,
    event: "Studied Boot.dev's back-end programming in Go / TypeScript",
  },
  {
    year: 2026,
    event:
      "Creating full-stack projects and making big decisions in app architecture and HubSpot API integrations",
  },
] as const;

export default function AboutSection() {
  const leftYears = YEARS.filter((_, i) => i % 2 === 0);
  const rightYears = YEARS.filter((_, i) => i % 2 === 1);

  return (
    <section id="about" className="animate relative space-y-10 overflow-hidden">
      {/* Background image slot — PNG wired in a follow-up */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat opacity-20"
        aria-hidden="true"
      />

      <h2 className="font-semibold text-3xl text-black dark:text-white">
        About me
      </h2>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
        <ol className="space-y-8">
          {leftYears.map(({ year, event }) => (
            <li key={year} className="bg-transparent space-y-1">
              <time className="font-semibold text-3xl text-black dark:text-white">
                {year}
              </time>
              <p className="text-sm text-black/40 dark:text-white/40">{event}</p>
            </li>
          ))}
        </ol>

        <ol className="space-y-8 md:pt-12">
          {rightYears.map(({ year, event }) => (
            <li key={year} className="bg-transparent space-y-1">
              <time className="font-semibold text-3xl text-black dark:text-white">
                {year}
              </time>
              <p className="text-sm text-black/40 dark:text-white/40">{event}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
