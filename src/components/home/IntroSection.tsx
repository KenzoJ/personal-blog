import { useState } from "react";
import programming1 from "@assets/home/intro/logos/programming1.png";
import programming2 from "@assets/home/intro/logos/programming2.webp";
import programming3 from "@assets/home/intro/logos/programming3.png";
import front1 from "@assets/home/intro/logos/front1.png";
import front2 from "@assets/home/intro/logos/front2.svg.webp";
import front3 from "@assets/home/intro/logos/front3.svg";
import back1 from "@assets/home/intro/logos/back1.png";
import back2 from "@assets/home/intro/logos/back2.svg.webp";
import back3 from "@assets/home/intro/logos/back3.png";
import dev1 from "@assets/home/intro/logos/dev1.png";
import dev2 from "@assets/home/intro/logos/dev2.png";
import dev3 from "@assets/home/intro/logos/dev3.svg.webp";
import dev4 from "@assets/home/intro/logos/dev4.svg.webp";
import version1 from "@assets/home/intro/logos/version1.svg.webp";
import version2 from "@assets/home/intro/logos/version2.svg.webp";

type LogoSrc = string | { src: string };

type Logo = {
  src: LogoSrc;
  alt: string;
};

type Category = {
  title: string;
  fill: string;
  accent: string;
  logos: Logo[];
};

const assetSrc = (src: LogoSrc) => (typeof src === "string" ? src : src.src);

const categories: Category[] = [
  {
    title: "Programming Languages",
    fill: "#012B08",
    accent: "#4EEB00",
    logos: [
      { src: programming1, alt: "Python" },
      { src: programming2, alt: "TypeScript" },
      { src: programming3, alt: "Ruby" },
    ],
  },
  {
    title: "Frontend & Styling",
    fill: "#08152D",
    accent: "#38BDF8",
    logos: [
      { src: front1, alt: "React" },
      { src: front2, alt: "Vue.js" },
      { src: front3, alt: "Tailwind CSS" },
    ],
  },
  {
    title: "Backend & Databases",
    fill: "#320C42",
    accent: "#C40EC1",
    logos: [
      { src: back1, alt: "Node.js" },
      { src: back2, alt: "Ruby on Rails" },
      { src: back3, alt: "MySQL" },
    ],
  },
  {
    title: "DevOps & Cloud",
    fill: "#320D05",
    accent: "#EE631D",
    logos: [
      { src: dev1, alt: "AWS" },
      { src: dev2, alt: "DigitalOcean" },
      { src: dev3, alt: "Kubernetes" },
      { src: dev4, alt: "Docker" },
    ],
  },
  {
    title: "Version Control",
    fill: "#374A07",
    accent: "#D6E00D",
    logos: [
      { src: version1, alt: "GitHub" },
      { src: version2, alt: "Git" },
    ],
  },
];

const bioParagraphs = [
  "I'm CJ, I also go by Kenzo Johnson, and I enjoy writing code in Typescript or Python. I currently work as a full stack developer at a GreenlightGO (Rails).",
  "I've spent the majority of last year upgrading the older Rails/Ruby versions to the newer standards, and I'm now tackling integrating Hubspot's API with the Rails system.",
  "I'm looking for a new full time role where I can use more Typescript or, fingers crossed, give me an excuse to learn Go.",
];

export default function IntroSection() {
  const [topIndex, setTopIndex] = useState(0);
  const [leavingIndex, setLeavingIndex] = useState<number | null>(null);

  const bringToFront = (index: number) => {
    if (index === topIndex) return;
    setLeavingIndex(topIndex);
    setTopIndex(index);
  };

  return (
    <section id="intro" className="animate space-y-6 py-10 sm:py-14">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-[1fr_auto] md:items-center md:gap-15">
        <div className="min-w-0 space-y-3 px-4 sm:px-6">
          <h1 className="font-semibold text-3xl text-black dark:text-white">
            CJ Felux
          </h1>
          <p className="text-lg text-black/70 dark:text-white/80">
            Full Stack Software Engineer
          </p>
          <div className="space-y-3 text-sm text-black/50 dark:text-white/50">
            {bioParagraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="flex min-w-0 items-center gap-2 sm:gap-3">
          <div
            className="flex w-[min(14.5rem,36vw)] shrink-0 flex-col"
            onMouseLeave={() => bringToFront(0)}
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget as Node)) {
                bringToFront(0);
              }
            }}
          >
            {categories.map((category, index) => {
              const isTop = topIndex === index;
              const isLeaving = leavingIndex === index;

              return (
                <div
                  key={category.title}
                  role="button"
                  tabIndex={0}
                  className={`relative w-[min(11rem,28vw)] cursor-pointer aspect-250/55 border shadow-sm outline-none transition-[transform,box-shadow,filter,opacity] ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:ring-2 focus-visible:ring-white/70 ${
                    isLeaving ? "duration-900" : "duration-420"
                  } ${index > 0 ? "mt-1.5 sm:mt-2" : ""} ${
                    isTop
                      ? "-translate-y-1.5 scale-[1.04] shadow-md grayscale-0 opacity-100"
                      : "translate-y-0 scale-100 grayscale opacity-80"
                  }`}
                  style={{
                    backgroundColor: category.fill,
                    borderColor: category.accent,
                    marginLeft: `${index * 0.45}rem`,
                    zIndex: isTop
                      ? categories.length + 1
                      : isLeaving
                        ? categories.length
                        : categories.length - index,
                  }}
                  onMouseEnter={() => bringToFront(index)}
                  onFocus={() => bringToFront(index)}
                  onTransitionEnd={(event) => {
                    if (
                      event.propertyName === "transform" &&
                      leavingIndex === index
                    ) {
                      setLeavingIndex(null);
                    }
                  }}
                >
                  <div className="absolute inset-0 flex items-center justify-center px-2 text-center text-xs font-medium text-white sm:text-sm">
                    {category.title}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex min-w-0 w-[min(22rem,42vw)] flex-col gap-3">
            {categories.map((category, index) => {
              const active = topIndex === index;
              const isLeaving = leavingIndex === index;

              return (
                <div
                  key={`${category.title}-logos`}
                  className={`relative w-full min-w-0 aspect-250/55 border transition-[filter,opacity] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    isLeaving ? "duration-900" : "duration-420"
                  } ${active ? "grayscale-0 opacity-100" : "grayscale opacity-80"}`}
                  style={{
                    backgroundColor: category.fill,
                    borderColor: category.accent,
                  }}
                >
                  <div className="absolute inset-0 flex items-center justify-evenly gap-2 px-2 sm:gap-3 sm:px-3">
                    {category.logos.map((logo) => (
                      <div
                        key={logo.alt}
                        className="flex h-[70%] min-w-0 flex-1 items-center justify-center"
                      >
                        <img
                          src={assetSrc(logo.src)}
                          alt={logo.alt}
                          className="max-h-full max-w-full object-contain"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
