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
    <section id="projects" className="animate space-y-6">
      <h2 className="font-semibold text-black dark:text-white">Projects</h2>
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <li key={project.id} className="bg-transparent">
            <a
              href={project.href}
              className="group block overflow-hidden rounded-lg border border-black/15 dark:border-white/20 transition-colors duration-300 ease-in-out hover:bg-black/5 dark:hover:bg-white/5"
            >
              <div className="aspect-square w-full bg-black/5 dark:bg-white/10">
                {project.imageSrc ? (
                  <img
                    src={project.imageSrc}
                    alt={project.title}
                    className="size-full object-cover"
                  />
                ) : (
                  <div
                    className="flex size-full items-center justify-center p-4 text-center text-sm text-black/40 dark:text-white/40"
                    aria-hidden="true"
                  >
                    {project.title}
                  </div>
                )}
              </div>
              <span className="sr-only">{project.title}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
