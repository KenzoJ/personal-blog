const YEARS = [
  2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026,
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

      <h2 className="font-semibold text-black dark:text-white">About me</h2>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
        <ol className="space-y-8">
          {leftYears.map((year) => (
            <li key={year} className="bg-transparent space-y-1">
              <time className="font-semibold text-black dark:text-white">
                {year}
              </time>
              <p className="text-sm text-black/40 dark:text-white/40">
                {/* Event placeholder */}
              </p>
            </li>
          ))}
        </ol>

        <ol className="space-y-8 md:pt-12">
          {rightYears.map((year) => (
            <li key={year} className="bg-transparent space-y-1">
              <time className="font-semibold text-black dark:text-white">
                {year}
              </time>
              <p className="text-sm text-black/40 dark:text-white/40">
                {/* Event placeholder */}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
