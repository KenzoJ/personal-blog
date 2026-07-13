export type SocialLink = {
  NAME: string;
  HREF: string;
};

type Props = {
  socials: SocialLink[];
  email: string;
};

export default function ContactSection({ socials, email }: Props) {
  return (
    <section id="contact" className="animate space-y-6">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12">
        <div className="space-y-4">
          <h2 className="font-semibold text-3xl text-black dark:text-white">
            Contact
          </h2>
          <ul className="flex flex-col gap-2">
            {socials.map((social) => (
              <li key={social.NAME} className="bg-transparent">
                <a
                  href={social.HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 decoration-black/15 dark:decoration-white/30 transition-colors duration-300 ease-in-out hover:text-black dark:hover:text-white hover:decoration-black/25 dark:hover:decoration-white/50"
                  aria-label={`CJ Felux on ${social.NAME}`}
                >
                  {social.NAME}
                </a>
              </li>
            ))}
            <li className="bg-transparent">
              <a
                href={`mailto:${email}`}
                className="underline underline-offset-2 decoration-black/15 dark:decoration-white/30 transition-colors duration-300 ease-in-out hover:text-black dark:hover:text-white hover:decoration-black/25 dark:hover:decoration-white/50"
                aria-label={`Email CJ Felux`}
              >
                {email}
              </a>
            </li>
          </ul>
        </div>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-1">
            <label
              htmlFor="contact-name"
              className="block text-sm font-semibold text-black dark:text-white"
            >
              Name
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              autoComplete="name"
              className="w-full rounded-md border border-black/15 dark:border-white/20 bg-transparent px-3 py-2 text-black dark:text-white outline-none focus:border-black/40 dark:focus:border-white/50"
            />
          </div>

          <div className="space-y-1">
            <label
              htmlFor="contact-email"
              className="block text-sm font-semibold text-black dark:text-white"
            >
              Email
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              className="w-full rounded-md border border-black/15 dark:border-white/20 bg-transparent px-3 py-2 text-black dark:text-white outline-none focus:border-black/40 dark:focus:border-white/50"
            />
          </div>

          <div className="space-y-1">
            <label
              htmlFor="contact-message"
              className="block text-sm font-semibold text-black dark:text-white"
            >
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows={5}
              className="w-full rounded-md border border-black/15 dark:border-white/20 bg-transparent px-3 py-2 text-black dark:text-white outline-none focus:border-black/40 dark:focus:border-white/50"
            />
          </div>

          <button
            type="submit"
            className="rounded-md border border-black/15 dark:border-white/20 px-4 py-2 text-sm font-semibold text-black dark:text-white transition-colors duration-300 ease-in-out hover:bg-black/5 dark:hover:bg-white/5"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
}
