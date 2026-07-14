import label1 from "@assets/home/intro/middle-column-labels/label1.png";
import label2 from "@assets/home/intro/middle-column-labels/label2.png";
import label3 from "@assets/home/intro/middle-column-labels/label3.png";
import label4 from "@assets/home/intro/middle-column-labels/label4.png";
import label5 from "@assets/home/intro/middle-column-labels/label5.png";
import frame1 from "@assets/home/intro/right-column-labels/frame1.png";
import frame2 from "@assets/home/intro/right-column-labels/frame2.png";
import frame3 from "@assets/home/intro/right-column-labels/frame3.png";
import frame4 from "@assets/home/intro/right-column-labels/frame4.png";
import frame5 from "@assets/home/intro/right-column-labels/frame5.png";

const middleLabels = [label1, label2, label3, label4, label5];
const rightFrames = [frame1, frame2, frame3, frame4, frame5];

const bioParagraphs = [
  "I'm CJ, I also go by Kenzo Johnson, and I enjoy writing code in Typescript or Python. I currently work as a full stack developer at a Film company with a Ruby on Rails and Vue codebase.",
  "I've spent the majority of recent months upgrading the older Rails/Ruby versions to the newer standards. I'm now tackling integrating Hubspot's API with the Rails system.",
  "I'm looking for a new full time role where I can use more Typescript or, fingers crossed, give me an excuse to learn Go.",
];

export default function IntroSection() {
  return (
    <section id="intro" className="animate space-y-6">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6 md:items-start">
        <div className="space-y-3">
          <h1 className="font-semibold text-3xl text-black dark:text-white">
            CJ Felux
          </h1>
          <p className="text-lg text-black/70 dark:text-white/80">
            full stack web developer
          </p>
          <div className="space-y-3 text-sm text-black/50 dark:text-white/50">
            {bioParagraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center gap-3">
          {middleLabels.map((src, index) => (
            <img
              key={`middle-${index + 1}`}
              src={typeof src === "string" ? src : src.src}
              alt=""
              className="w-[60%] h-auto object-contain"
            />
          ))}
        </div>

        <div className="flex flex-col items-center gap-3 overflow-visible">
          {rightFrames.map((src, index) => (
            <img
              key={`right-${index + 1}`}
              src={typeof src === "string" ? src : src.src}
              alt=""
              className="w-[120%] max-w-none h-auto object-contain"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
