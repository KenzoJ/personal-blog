export type HomepageProject = {
  id: string;
  title: string;
  description: string;
  href: string;
  imageSrc?: string;
  tags?: string[];
};

type Props = {
  projects: HomepageProject[];
};

export default function ProjectsSection({ projects }: Props) {
  return (
    <section id="projects" className="animate space-y-6 text-center">
      <h2 className="font-semibold text-3xl text-black dark:text-white">
        Projects
      </h2>
      <ul className="mx-auto grid w-fit grid-cols-1 gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <li key={project.id} className="w-fit bg-transparent">
            <a
              href={project.href}
              className="group relative block overflow-hidden transition-shadow duration-300 ease-in-out hover:shadow-md"
            >
              {project.imageSrc ? (
                <img
                  src={project.imageSrc}
                  alt=""
                  className="block h-auto w-auto max-w-full"
                />
              ) : (
                <div
                  className="size-[371px] max-w-full bg-black/5 dark:bg-white/10"
                  aria-hidden="true"
                />
              )}
              <div
                className="absolute inset-0 z-10 bg-black/50 transition-opacity duration-300 ease-in-out group-hover:opacity-0"
                aria-hidden="true"
              />
              <div className="absolute inset-0 z-20 flex flex-col justify-between p-3 text-left pointer-events-none">
                <h3 className="w-fit max-w-full text-sm font-semibold leading-snug text-white transition-colors duration-300 ease-in-out group-hover:text-black sm:text-base">
                  {project.title}
                </h3>
                {project.tags && project.tags.length > 0 && (
                  <ul className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="!font-sans border px-1.5 py-0.5 text-[10px] font-medium text-white sm:text-xs"
                        style={{
                          backgroundColor: "#012B08",
                          borderColor: "#4EEB00",
                        }}
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
