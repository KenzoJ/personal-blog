export type HomepageProject = {
  id: string;
  title: string;
  description: string;
  href: string;
  imageSrc?: string;
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
              className="group relative block overflow-hidden"
            >
              {project.imageSrc ? (
                <>
                  <img
                    src={project.imageSrc}
                    alt={project.title}
                    className="block h-auto w-auto max-w-full"
                  />
                  <div
                    className="absolute inset-0 z-10 bg-black/50 transition-opacity duration-300 ease-in-out group-hover:opacity-0"
                    aria-hidden="true"
                  />
                </>
              ) : (
                <div
                  className="flex size-[371px] max-w-full items-center justify-center p-4 text-center text-sm text-black/20 dark:text-white/40"
                  aria-hidden="true"
                >
                  {project.title}
                </div>
              )}
              <span className="sr-only">{project.title}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
